function run_benchmark {
    # Parameters
    file=$1
    tool_name=$2
    benchmark=$3
    type=$4
    run=$5
    group=$6

    filename=$(basename $file)
    extension=${filename##*.}

    if [[ "$file" == *".toml"* || "$extension" == "main" ]]; then return; fi

    echo "file - $filename"
    
    mapfile < ./scripts/.cache/languages/$extension.json
    content=${MAPFILE[@]}

    language=$( jq -r ".language" <<< $content )
    output=$( jq -r ".enviroment[] | select(.name == \"$filename\")" <<< $content )

    runtime=$( jq -r ".runtime" <<< $output )
    versioncommand=$( jq -r ".version" <<< $output )

    # Command for build file into binary
    buildfilecommand=$( jq -r ".build" <<< $output )
    buildfilecommand=${buildfilecommand/'$FILE'/"$filename"}

    # Command for run file
    runfilecommand=$( jq -r ".run" <<< $output)
    runfilecommand=${runfilecommand/'$FILE'/"${file/".${extension}"/""}"}
    runfilecommand=${runfilecommand/'$EXTENSION'/".$extension"}
    
    if [[ "$buildfilecommand" != "null" ]]; then
        current=$( pwd )
        cd "${file/$filename/""}"
        $buildfilecommand
        cd $current
    fi

    if [[ "$tool_name" == "oha" || "$tool_name" == "bombardier" ]]; then
        # Run on background
        nohup $runfilecommand > /dev/null 2>&1 &
        sleep 10s

        output=$( $run )

        kill $!
    else
        # Run
        runfilecommand=${run/'$COMMAND'/"'$runfilecommand'"}
        bash -c "$runfilecommand"

        mapfile < ./scripts/.cache/tmp/tmp.json
        output="${MAPFILE[@]}"
    fi
    

    bun ./scripts/utils.ts "save" "$output" "$benchmark$group" "$filename" "$tool_name" "$language" "$versioncommand" "/$type" "$runtime"

    if [[ "$buildfilecommand" != "null" ]]; then
        rm "${file/".${extension}"/""}"
    fi
}

for benchmark in scripts/.cache/benchmarks/* ; do
    mapfile < $benchmark
    content="${MAPFILE[@]}"

    groups=$( jq -r '.groups' <<< $content )
    tool_name=$( jq -r '.tool_name' <<< $content )
    type=$( jq -r ".type" <<< $content )
    run=$( jq -r '.run' <<< $content )

    benchmark=$(basename $benchmark .json)
    echo "Running benchmark $benchmark"
    for fileOrFolder in benchmarks/$benchmark/* ; do
        if [[ -d "$fileOrFolder" ]]; then
            for file in $fileOrFolder/*; do
                run_benchmark "$file" "$tool_name" "$benchmark" "$type" "$run" "/${fileOrFolder/"benchmarks/$benchmark/"/""}"
            done
        else
            run_benchmark "$fileOrFolder" "$tool_name" "$benchmark" "$type" "$run"
        fi
    done
done
for benchmark in scripts/.cache/benchmarks/* ; do
    mapfile < $benchmark
    content="${MAPFILE[@]}"

    name=$( jq -r '.name' <<< $content )
    tool_name=$( jq -r '.tool_name' <<< $content )
    type=$( jq -r ".type" <<< $content )
    run=$( jq -r '.run' <<< $content )
    
    benchmark=$(basename $benchmark .json)
    echo "Running benchmark $benchmark"
    for file in benchmarks/$benchmark/* ; do
        filename=$(basename $file)
        extension=${filename##*.}

        if [[ "$file" == *".toml"* || "$extension" == "main" ]]; then continue; fi

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
        runfilecommand=${runfilecommand/'$FILE'/"benchmarks/$benchmark/${filename/".${extension}"/""}"}
        runfilecommand=${runfilecommand/'$EXTENSION'/".$extension"}
        
        if [[ "$buildfilecommand" != "null" ]]; then
            cd "benchmarks/$benchmark"
            $buildfilecommand
            cd ../../
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
        
        bun ./scripts/utils.ts "save" "$output" "$benchmark" "$filename" "$tool_name" "$language" "$versioncommand" "/$type" "$runtime"

        if [[ "$buildfilecommand" != "null" ]]; then
            rm "benchmarks/$benchmark/${filename/".${extension}"/""}"
        fi
    done
done
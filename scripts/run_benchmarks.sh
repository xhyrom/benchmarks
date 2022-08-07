for benchmark in scripts/.cache/benchmarks/* ; do
    mapfile < $benchmark
    content="${MAPFILE[@]}"

    name=$( jq -r '.name' <<< "$content")
    run=$( jq -r '.run' <<< "$content")
    
    benchmark=$(basename $benchmark .json)
    for file in benchmarks/$benchmark/* ; do
        filename=$(basename $file)
        extension=${filename##*.}

        if [[ "$file" == *".toml"* || "$extension" == "main" ]]; then continue; fi
        
        mapfile < ./scripts/.cache/languages/$extension.json
        content=${MAPFILE[@]}

        output=$( jq -r ".enviroment[] | select(.name == \"$filename\")" <<< $content)

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

        # Run in background
        nohup $runfilecommand > /dev/null 2>&1 &
        sleep 5s

        o=$( $run )
        echo $o

        kill $!

        if [[ "$buildfilecommand" != "null" ]]; then
            rm "benchmarks/$benchmark/${filename/".${extension}"/""}"
        fi
    done
done
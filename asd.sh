for dir in 3rd-packages/*/ ; do
    dir=${dir%*/}
    dir="${dir##*/}"
    
    cd 3rd-packages/$dir
done
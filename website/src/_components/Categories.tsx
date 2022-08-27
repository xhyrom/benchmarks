export default({
    showHome = false,
    benchmarks,
    comp,
}: {
    showHome: boolean;
    benchmarks: any[];
    comp: any;
}) => {
    return (
        <div class="mt-12 pt-1">
            <h4 class="text-2xl font-bold tracking-tight">Categories</h4>
            <ul class="ml-8 list-disc my-2">
            {showHome ? <li><comp.Link url="/" name="../" /></li> : null}
            {benchmarks.categories.map(c => {
                return (
                <li>
                    <comp.Link url={`/benchmarks/${c}`} name={c} />
                </li>
                )
            })}
            </ul>
        </div>
    )
}
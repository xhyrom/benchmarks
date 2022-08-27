export default({
    id,
    title,
    series,
    commits,
    formatterFunction,
  }: {
    id: number;
    title: string;
    series: any[];
    commits: string[];
    formatterFunction: string;
  }) => {
    return (
        <>
            <div id={`chart-${id}`}></div>
            <script dangerouslySetInnerHTML={{
                __html: `
new ApexChart(document.querySelector('chart-${id}'), {
    chart: {
        height: 320,
        type: 'line',
        toolbar: {
            show: true,
        },
        animations: {
            enabled: true,
        },
    },
    series: ${JSON.stringify(series)},
    stroke: {
        width: 1,
        curve: "straight",
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        position: "bottom",
    },
    yaxis: {
        labels: {
            formatter: ${formatterFunction}
        },
        title: {
            text: "${title}"
        },
    },
    xaxis: {
        categories: ${JSON.stringify([commits, 'Latest'])},
        labels: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    plotOptions: {
        bar: {
            distributed: true
        }
    }
}).render();
        `
            }} />
        </>
    )
}
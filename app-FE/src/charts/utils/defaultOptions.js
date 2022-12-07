import { palette } from "./chartsCollorPalette";

const defaultOptions = {
    colors: palette,
    pointRadius: 0,
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        intersect: false,
        mode: 'index'
    },
    plugins: {
        legend: {
            display: true,
            labels: {
                usePointStyle: true
            }
        },
        tooltip: {
            usePointStyle: true,
            position: 'nearest',
            callbacks: {
                labelPointStyle: (context) => { return { pointStyle: 'circle' } }
            }
        }
    }
}

export default defaultOptions;
import Chart from 'chart.js/auto';
import { chartCanvas } from './dom-utils';

export const chart = new Chart<"line">(chartCanvas, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{ 
          data: [],
          label: "Infizierte nach x Tagen",
          borderColor: "#3e95cd",
          fill: false
        },
      ]
    },
  });

export function resetChart(){
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [];
        });

}

export function updateChart(label: number, data: number) {
    chart.data.labels!.push(label);
    chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
    });
    chart.update();
}
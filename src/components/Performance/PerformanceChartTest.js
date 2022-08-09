import React from "react";
import 'chart.js/auto';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from "chart.js";
import {Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter} from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const PerformChartTest = () => {
    const data = {
            labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            datasets: [{
                label: '# of Votes',
                /*data: [12, 19, 3, 5, 2, 3]*/
                data: [72.72, 76.10, 75.07, 75.65, 75.38, 73.82, 75.61, 75.23, 81.08, 76.41, 76.95, 77.32],

                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        }

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

    return (
        <div>
            <Bar
                data={data}
                options={options}
                height={400}
                /*width={200}*/
            />
        </div>
    )
}

export default PerformChartTest;
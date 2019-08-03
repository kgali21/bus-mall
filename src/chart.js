
import store from './data/store.js';

const resultsCtx = document.getElementById('results').getContext('2d');

const productName = [];
const clicked = [];
const finalResults = store.getClickedItem();

for(let i = 0; i < finalResults.length; i++){
    const selected = finalResults[i];
    const views = selected.views;
    clicked.push(views);
}

// for(let i = 0; i < finalResults.length; i++){
//     const selected = finalResults[i];
//     const views = selected.views;
//     clicked.push(views);
// }


// eslint-disable-next-line no-unused-vars
const newResults = new Chart(resultsCtx, {
    type: 'bar',
    data: {
        labels: productName,
        datasets: [{
            label: 'Product Name',
            data: clicked,
            backgroundColor: '#000000',
        }],
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }, {
                display: false,
                stacked: true,
            }
            ],
            yAxes: [{ ticks: { beginAtZero: true } }]
        }
    }
});
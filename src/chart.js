
import store from './data/store.js';
import { findById } from './utility.js';
import productItems from './data/products.js';

const resultsCtx = document.getElementById('results').getContext('2d');

const productName = [];
const clicked = [];
const finalResults = store.getResults();

for(let i = 0; i < finalResults.length; i++){
    const selected = finalResults[i];
    const views = findById(productItems.id);
    clicked.push(views);
    productName.push(selected.Name);
}

// eslint-disable-next-line no-unused-vars
const results = new Chart(resultsCtx, {
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
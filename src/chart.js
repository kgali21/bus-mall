

const resultsCtx = document.getElementById('results').getContext('2d');

const productName = [];
const clicked = [];

const newResults = new Chart(resultsCtx, {
    type: 'bar',
    data: { labels: productName,
        datasets: [{
            label: 'Product Name',
            data: clicked
        }]


    }

});
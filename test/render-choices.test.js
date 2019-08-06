import renderChoices from '../src/render-choices.js';

const test = QUnit.test;

QUnit.module('Render Choices');

test('renders', assert => {
    const choiceItems = { id: 'baby-sweep', chosen: 5 };
    const item = { name: 'Baby Sweep' };
    const expected = '<li>Baby Sweep <span>5</span></li>';

    const dom = renderChoices(choiceItems, item);
    const html = dom.outerHTML;

    assert.equal(html, expected);
    
});
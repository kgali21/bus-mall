function renderChoices(choiceItem, item){
    const li = document.createElement('li');
    li.textContent = item.name + ' ';

    const span = document.createElement('span');
    span.textContent = choiceItem.chosen;
    li.appendChild(span);

    return li;

}

export default renderChoices;
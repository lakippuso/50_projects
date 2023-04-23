const choiceList = document.getElementById('choice-list')
const choicesBox = document.getElementById('choices')

window.addEventListener('keyup', e => {
    if(e.keyCode === 13){
        choiceList.value = '';
        randomSelection();
    }
})

choiceList.addEventListener('input', e => {
    let list = e.target.value.split(',')
    choicesHtml = ''
    list.forEach(choice => {
        choicesHtml += `<span class="choice">${choice}</span>`
    });
    choicesBox.innerHTML = choicesHtml;
})

function randomSelection(){
    const times = 30;

    const interval = setInterval(() => {
        const randomChoice = selectRandomChoice();

        highlightChoice(randomChoice);
        setTimeout(() => {
            unHighlightChoice(randomChoice)
        }, 100);
    }, 100);

    
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomChoice = selectRandomChoice();
    
            highlightChoice(randomChoice);
        }, 100);
    }, times * 100);
}

function selectRandomChoice() {
    const arr = document.querySelectorAll('.choice');
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function highlightChoice(choice) {
    choice.classList.add('active')
}
function unHighlightChoice(choice) {
    choice.classList.remove('active')
}
const resultEl = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getData();

filter.addEventListener('input', e => filterData(e.target.value))

async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50");

    const { results } = await res.json();

    resultEl.innerHTML = "";

    results.forEach(({ name, picture, location }) => {
        const li = document.createElement("li");
        listItems.push(li);
        li.innerHTML = `
            <img src="${picture.thumbnail}" alt="${name.first}">
            <div class="user-info">
                <h4>${name.first + " " + name.first}</h4>
                <p>${location.city + ", " + location.country}</p>
            </div>
        `;
        resultEl.appendChild(li)
    });
}

function filterData(searchTerm) {
    listItems.forEach( item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}
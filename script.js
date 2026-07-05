
const list = document.getElementById("surah-list");
const search = document.getElementById("search");

let surahs = [];

fetch("https://api.alquran.cloud/v1/surah")
.then(response => response.json())
.then(data=>{

surahs = data.data;

render(surahs);

})
.catch(()=>{

list.innerHTML = `
<div class="loading">

تعذر تحميل السور

</div>
`;

});

function render(items){

let html="";

items.forEach(surah=>{

html += `

<a class="surah-card"
href="surah.html?id=${surah.number}">

<div class="num">

${surah.number}

</div>

<div class="name">

${surah.name}

</div>

</a>

`;

});

list.innerHTML = html;

}

search.addEventListener("input",()=>{

const word = search.value.trim();

const result = surahs.filter(s=>{

return s.name.includes(word);

});

render(result);

});

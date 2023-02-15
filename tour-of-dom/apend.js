// 1. where to add
const placesList = document.getElementById('places-list');

// 2. What to be added
const li = document.createElement('li');
li.innerText = 'pahartolo bon';

// 3.add the child
placesList.appendChild(li);


// ----------new section add-----------
// 1.where to add
const maincontent = document.getElementById('main-content')

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "my food list";
section.appendChild(h1);

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'briyani'
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'kacchi'
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'fuska'
ul.appendChild(li3);

section.appendChild(ul)

maincontent.appendChild(section)


// -------set innerText directly--------
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>my dress</h1>
<ul>
    <li>shari</li>
    <li>skirt</li>
    <li>juta</li>
</ul>
`
maincontent.appendChild(sectionDress)
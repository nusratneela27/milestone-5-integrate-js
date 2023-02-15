console.log('This is a separate js file')
// option - 1 (directly set on html body)
// <button onclick="console.log(7)">click me</button>

// option - 2  (important)
// <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// option - 3
const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// option - 4 use some time
const purpleButton = document.getElementById('makePurple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// option - 5
const pinkBUtton = document.getElementById('makePink');
pinkBUtton.addEventListener('click' , makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option - 6
const greenButton = document.getElementById('makeGreen');
greenButton.addEventListener('click' , function Green(){
    document.body.style.backgroundColor = 'green';
})

// option - 7 final (important)
// document.getElementById('makeGoldenRod').addEventListener('click' , function(){})
document.getElementById('makeGoldenRod').addEventListener('click' , function(){
    document.body.style.backgroundColor = 'GoldenRod'
})
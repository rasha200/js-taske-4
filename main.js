//taske 1
let id = document.getElementById('header');
id.innerHTML='Welcome to DOM Manipulation!';


//taske 2
let clas = document.getElementsByClassName('item');
for (let i = 0; i < clas.length; i++){
    clas[i].innerHTML = 'Class Item';
};


//taske 3
// let Paragraph= document.getElementsByTagName('p');
// for (let x = 0; x < Paragraph.length; x++){
//     Paragraph[x].innerHTML = 'Paragraph Element';
// };


//taske 4
let qury = document.querySelector('.highlight');
qury.innerHTML = 'First Highlighted Item';


//taske 5 
let all = document.querySelectorAll('li');
for (let y = 0; y < all.length; y++){
    all[y].innerHTML = 'List item';
};


//taske 6
let foot = document.querySelector('#footer');
foot.innerHTML = 'Footr Updated';


//taske7
let bb = document.querySelectorAll ('.box');
for (let t = 0; t < bb.length; t++){
    bb[t].innerHTML = 'Box Item';
};


//taske 8
let combaining = document.querySelector('.container p');
combaining.innerHTML = 'change the text';


//taske 9
let role = document.querySelector('[data-role="admin"]');
role.innerHTML = 'Admin Role';


//taske 10
let secc = document.getElementById('section4');
let nested = secc.getElementsByTagName('span');

for ( let o = 0; o < nested.length; o++){
    nested[o].innerHTML = 'Span Element';
}

'use strict';

let lists = document.getElementsByClassName('lists');
let box1 = document.querySelector('.box1');    
let box2 = document.querySelector('.box2');    
let box3 = document.querySelector('.box3');    
let box4 = document.querySelector('.box4');    

for( let list of lists){
    list.addEventListener('dragstart',function(e){
        let selected = e.target;
        selected.style.fontFamily = `Geologica, sans-serif`;
        selected.style.paddingLeft = `1rem`;
        selected.style.fontWeight = `100`;
        selected.style.marginTop = '1rem';
        selected.style.textTransform = 'capitalize';
        box1.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        box1.addEventListener('drop',function(e){
            box1.appendChild(selected)
            selected = null;
        })
        box2.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        box2.addEventListener('drop',function(e){
            box2.appendChild(selected)
            selected = null;
        })  
        box3.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        box3.addEventListener('drop',function(e){
            box3.appendChild(selected)
            selected = null;
        })
        box4.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        box4.addEventListener('drop',function(e){
        selected.style.textDecoration = 'line-through';

            box4.appendChild(selected)
            selected = null;
        })
      
        console.log(selected)
    })
}

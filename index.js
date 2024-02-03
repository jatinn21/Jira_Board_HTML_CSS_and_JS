'use strict';

let lists = document.getElementsByClassName('lists');
let boxes = document.querySelectorAll('.boxes');

for( let list of lists){
    list.addEventListener('dragstart',function(e){
        let selectedTask = e.target;
        selectedTask.style.fontFamily = `Geologica, sans-serif`;
        selectedTask.style.paddingLeft = `1rem`;
        selectedTask.style.fontWeight = `100`;
        selectedTask.style.marginTop = '1rem';
        selectedTask.style.textTransform = 'capitalize';

        // Implementing Drag features
        boxes.forEach(function(box){
            box.addEventListener('dragover',function(e){
                e.preventDefault();
            })
        })

        // Drop Feature Added
        boxes.forEach((box,i)=>{
            box.addEventListener('drop',function(e){
                if(box.classList.contains('done_container')){
                    selectedTask.style.textDecoration = 'line-through'; 
                }
                else{
                    selectedTask.style.textDecoration = 'none';
                }
                box.appendChild(selectedTask)
                selectedTask = null;
            })
            
        })
    })
}


const header = (selector, element) => {
    
    const headerField = document.querySelector(selector);
    const headerLinks = document.querySelectorAll(element)
   

   
    
    headerField.addEventListener('mouseover', (e) => {
        e.preventDefault();
        let target = e.target;
        let related = e.relatedTarget;
        

       if(target && target.classList.contains('link')){
                headerLinks.forEach((el) => {
                    if(target == el){
                        el.classList.add('active_link')
                    } else if(target) {
                        el.classList.remove('active_link')
                        
                    }
                })}
            });

        

   


 }

window.addEventListener('DOMContentLoaded', () => {
"use strict";


header('.header__menu-list', 'a');
})
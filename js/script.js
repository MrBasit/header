 // ---- menu Start -----
        
 const menu = document.querySelector('.menu');
 const menuMain = menu.querySelector('.manu-main');
 const goBack = menu.querySelector('.go-back');
 const menuTrigger =  document.querySelector('.mobile-menu-trigger');
 const closeMenu = menu.querySelector('.mobile-menu-close');
 let subMenu;
 let subMenu2;
 let saveContent;
 let a=0;

 // Select DropDown Items
 menuMain.addEventListener('click', (e) =>{
     // item (news,shop,blogs,pages) sa active class screen bari krna pa hat jaya to jasa akhir ma kia ha
     if(!menu.classList.contains('active')){
         return;
     }
     if(a===0){
        if(e.target.closest('.menu-item-has-children')){
            const hasChildren = e.target.closest('.menu-item-has-children');
            console.log(hasChildren);
            a++;
            showSubMenu(hasChildren);
            
        } 
     }

     if(a===1){
        if(e.target.closest('.sub__main__2')){
            const hasChildren = e.target.closest('.sub__main__2');
            console.log(hasChildren);
            a++;
            showSubMenu(hasChildren);
           
        }
     }

     
 });

 // Go Back Function
 goBack.addEventListener('click', () => {
     hideSubMenu();
 });

 // Menu Trigger Func
 menuTrigger.addEventListener('click', () =>{
     toggleMenu();
 });

 // Close Menu Function
 closeMenu.addEventListener('click', () => {
     toggleMenu();
 });

 // For Menu Disappear to click on overlay
 document.querySelector('.menu-overlay').addEventListener('click', () =>{
     toggleMenu();
 });

 // toggle Menu func
 function toggleMenu(){
     menu.classList.toggle('active');
     document.querySelector('.menu-overlay').classList.toggle('active');
 };

 // Get Text of items heading
 function showSubMenu(hasChildren){
     if(a===1){
        subMenu = hasChildren.querySelector('.sub-manu');
        console.log(subMenu);
        subMenu.classList.add('active');
        subMenu.style.animation = 'slideLeft 0.5s ease forwards';
        // console.log(subMenu);
        const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
        menu.querySelector('.current-menu-tittle').innerHTML = menuTitle;
        menu.querySelector('.mobile-menu-head').classList.add('active');
        saveContent = menuTitle; 
     }
     else{
        subMenu2 = hasChildren.querySelector('.sub__main__inner');
        console.log(subMenu2);
        subMenu2.classList.add('active');
        subMenu2.style.animation = 'slideLeft 0.5s ease forwards';
        // console.log(subMenu);
        const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
        menu.querySelector('.current-menu-tittle').innerHTML = menuTitle;
        menu.querySelector('.mobile-menu-head').classList.add('active');
     }

 }

 // Hide Sub Menu's of targated Item
 function  hideSubMenu(){
    if(a==1){
        subMenu.style.animation = 'slideRight 0.5s ease forwards';
        setTimeout(() => {
            subMenu.classList.remove('active');
        }, 300);
        menu.querySelector('.current-menu-tittle').innerHTML = '';
        menu.querySelector('.mobile-menu-head').classList.remove('active');
        a--;
    }
    if(a==2){
        subMenu2.style.animation = 'slideRight 0.5s ease forwards';
        setTimeout(() => {
            subMenu2.classList.remove('active');
        }, 300);
        menu.querySelector('.current-menu-tittle').innerHTML = saveContent;
        a--;
    }

 }

 window.onresize = function() {
     if(this.innerWidth > 991){
         if(menu.classList.contains('active')){
             toggleMenu();
         }
         
     }
 }
// ---- menu End -----



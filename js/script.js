
const menu = document.querySelector('.menu');
const menuMain = menu.querySelector('.manu-main');
const goBack = menu.querySelector('.go-back');
const menuTrigger =  document.querySelector('.mobile-menu-trigger');
const closeMenu = menu.querySelector('.mobile-menu-close');
let subMenu;

// Select DropDown Items
menuMain.addEventListener('click', (e) =>{
    // item (news,shop,blogs,pages) sa active class screen bari krna pa hat jaya to jasa akhir ma kia ha
    if(!menu.classList.contains('active')){
        return;
    }

    if(e.target.closest('.menu-item-has-children')){
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
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

// For Menu Disappear to click on overlay yani kesi bhi jagha
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
    subMenu = hasChildren.querySelector('.sub-manu');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    // console.log(subMenu);
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.current-menu-tittle').innerHTML = menuTitle;
    menu.querySelector('.mobile-menu-head').classList.add('active');
}

// Hide Sub Menu's of targated Item
function  hideSubMenu(){
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);
    menu.querySelector('.current-menu-tittle').innerHTML = '';
    menu.querySelector('.mobile-menu-head').classList.remove('active');

}

// taka apna browser ko chota kr ka nav kholi ha or phr ap na browser ko bara kia to nav hat gaye lakin jb ap phr sa browser ko chota karo gay to nav khuli hogy to es ko set krna ka leya
window.onresize = function() {
    // console.log(this.innerWidth);
    if(this.innerWidth > 991){
        if(menu.classList.contains('active')){
            toggleMenu();
        }
        // if(menu.classList.contains('active')){
        //     console.log('true');
        // }else{
        //     console.log('false');
        // }
    }
}
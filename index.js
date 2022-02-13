const tgbtn=document.getElementsByClassName('toggle')[0];
const links=document.getElementsByClassName('links')[0];
const navbar=document.getElementsByClassName('navbar')[0];
tgbtn.addEventListener('click',function(){
    links.classList.toggle('active');
    navbar.classList.toggle('bg-active');
})
window.addEventListener('scroll',function(){
    const nbar=document.getElementsByClassName('navbar')[0];
    nbar.classList.toggle('nav-active',window.scrollY>10);
})

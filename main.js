let hamber=document.getElementById("hamnav");
let navbar=document.getElementsByClassName('navbar-nav')[0];
let navPage=document.getElementById("navPage");
let frontPage=document.getElementById('front-page');
let closeHam=document.getElementById('closeHam');
hamber.addEventListener('click',()=>{
    let height=frontPage.offsetHeight;
    console.log(height);
    document.getElementById("navPage").style.height=`${height-2}px`
    $("#navPage").animate({width:"40%"});
    navPage.style.display='block';
    hamber.classList.add('goUp');

    // hamber.style.visibility="hidden";
    
})

closeHam.addEventListener("click",()=>{
    $("#navPage").animate({width:0});
    setTimeout(() => {
    $("#navPage").css("display","none");}, 300);
    
})

document.querySelectorAll("#box5 button")[0].addEventListener("click",()=>{
    $("#projects").slideToggle();
})






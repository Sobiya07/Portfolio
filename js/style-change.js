const styleToggler= document.querySelector('.style-toggler');
styleToggler.addEventListener("click", ()=>{
    document.querySelector(".style-change").classList.toggle("open");
})

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-change").classList.contains("open"))
    {
        document.querySelector(".style-change").classList.remove("open");

    }
})

const alter=document.querySelectorAll(".alter");
function setActiveStyle(color)
{
    alter.forEach((style)=>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");

        }
    })
}
const dayNight= document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
document.body.classList.toggle("dark");

})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");      
    }
})
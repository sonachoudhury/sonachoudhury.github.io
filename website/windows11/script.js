let taskbar = document.getElementById("sona");
let startmenu = document.getElementsByClassName("startmenu")[0]

//this opens the menu
taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
taskbar.addEventListener("mouseover", ()=>{
})
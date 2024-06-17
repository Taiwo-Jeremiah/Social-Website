var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn")
function settingsMenuToggle(){
    settingsmenu.classList.toggle
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

const nav = document.querySelector(".settings-menu");
const navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", () => {
    
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else{
        nav.setAttribute("data-visible", false);s
        navToggle.setAttribute("aria-expanded", false);
    }
})

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme", "light")
}


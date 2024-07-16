
const darkButton = document.querySelector(".toggle-button"); 
darkButton.addEventListener("click", function(){ 
    let background_color = ''; 
    let text_color = ''; 
    if(darkButton.textContent === '다크모드'){ 
        darkButton.textContent = "일반모드"; 
        background_color = 'black'; 
        text_color = 'white'; 
    }
    else{ 
        darkButton.textContent = '다크모드'; 
        background_color = 'white'; 
        text_color = 'black'; 
    }
    
    // invert background color
    const bd = document.querySelector("body");
    bd.style.backgroundColor = background_color; 
    
    // invert text color
    const textelement = document.querySelectorAll(".header-nav-list-wrapper"); 
    textelement.forEach(element => {
        element.style.color = text_color; 
    })
}); 

const searchInput = document.querySelector("#search-input"); 
searchInput.addEventListener("keydown", function(e){ 
    if (e.key === "Enter"){ 
        url = "https://www.google.com/search?q="; 
        url += searchInput.value; 
        window.location.href = url
    }
})


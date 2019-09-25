var sandwich = document.getElementById("menutel"); 
var nav = document.getElementsByTagName("nav")[0];

sandwich.addEventListener("click" , function(){

    if(nav.style.display=="initial"){
        nav.style.display="none";
    }   

    else{
        nav.style.display="initial";
    }

})
    
    

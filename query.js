var sandwich = document.getElementById("menutel"); 
var ul = document.getElementsByTagName("ul")[0];

sandwich.addEventListener("click" , function(){

    if(ul.style.display=="initial"){
        ul.style.display="none";
    }   

    else{
        ul.style.display="initial";
    }

})
    
    

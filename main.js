let getGender;
let getSize;
let text = document.getElementById("text");
let info = document.getElementById("info");
let img = document.getElementById("img");



function getInput() {
    
    getGender = prompt("What gender shoes are you looking for? (Male or Female)", "Male");
    
    if ((getGender === "") || (getGender === undefined)) {
        alert("Due to your negligence, your gender has been default set to Men's!")
        getGender = "Men's";
        
    }
    
    getSize = prompt("What foot size are you? (input a number)", 8);
    
    if ((getSize === "") || (getSize === undefined)) {
        alert("Due to your negligence, your foot size has been default set to Men's size 8!")
        getSize = 8;
        
    }
    
    getGender = getGender.toUpperCase();
    console.log(getGender);
    getSize = parseInt(getSize);
    console.log(getSize);
}



function isMen() {
    
    if (getSize >= 8 && getSize <= 12) {
        text.innerHTML = ("Welcome to the store! Your request is being processed!");
        info.innerHTML = ("You input a gender of male with a foot size of " + getSize + "!");
        img.style.height = ("300px");
        img.style.width = ("450px");
        img.src = ("./content/men.png");

    } else if (getSize < 8) {
        text.innerHTML = ("What are you, Cinderella? Get out!");
        
    } else if (getSize > 12) {
        text.innerHTML = ("What is it with people with boats for feet? Get out!");
        
    } else {
        alert("Please Try Again! Input a proper foot size!");
        text.innerHTML = ("Try Again! That isn't a foot size!");
        info.innerHTML = ("");
        img.src = ("");
        console.log("Recursion starting!");
        runProgram(); // Recursion, in case the user makes an error
        
    }
}



function isWomen() {
    
    if (getSize >= 5 && getSize <= 9) {
        text.innerHTML = ("Welcome to the store! Your request is being processed!");
        info.innerHTML = ("You input a gender of female with a foot size of " + getSize + "!");
        img.style.height = ("300px");
        img.style.width = ("450px");
        img.src = ("./content/women.png");
        
    } else if (getSize < 5) {
        text.innerHTML = ("What are you, Cinderella? Get out!");
        
    } else if (getSize > 9) {
        text.innerHTML = ("What is it with people with boats for feet? Get out!");
        
    } else {
        alert("Please Try Again! Input a proper foot size!");
        text.innerHTML = ("Try Again! That isn't a foot size!");
        info.innerHTML = ("");
        img.src = ("");
        console.log("Recursion starting!");
        runProgram(); // Recursion, in case the user makes an error
        
    }
}
      


function runProgram() {
    
    getInput();
    
    if (getGender.indexOf("MALE") === 0) {
        isMen();
        
    } else if (getGender.indexOf("FEMALE") === 0) {
        isWomen();
        
    } else {
        alert("Please Try Again! Input a proper gender!");
        text.innerHTML = ("Please Try Again! Input a proper gender!");
        info.innerHTML = ("");
        img.src = ("");
        console.log("Recursion starting!");
        runProgram(); // Recursion, in case the user makes an error
        
    }
}



//runProgram();
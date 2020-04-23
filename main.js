

function getInput() {
    let getGender = prompt("What gender shoes are you looking for? (Mens or Womens)", "men's");
    let getSize = prompt("What foot size are you?");
    
    return {
        userGender : getGender,
        footSize : getSize,
        logInfo : function(){
            console.log(this.userGender + " : " + this.footSize);
        }
    }
}


function processInfo() {
    let info = getInput();
    let gender = info.userGender;
    let size = info.footSize;
    info.logInfo();
    
    if ((gender.toUpperCase() === "MENS") || (gender.toUpperCase === "MEN'S") || (gender.toUpperCase === "MEN")){
        
    } else if ((gender.toUpperCase() === "WOMENS") || (gender.toUpperCase === "WOMEN'S") || (gender.toUpperCase === "WOMEN")){
        
    } else {
        alert("Invalid gender! Please try again!");
        getInput();
    }
}

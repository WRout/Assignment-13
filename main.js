

function getInput() {
    let gender = prompt("What gender shoes are you looking for? (Mens or Womens)", "men's");
    if ((gender.toUpperCase() === "MENS") || (gender.toUpperCase === "MEN'S") || (gender.toUpperCase === "MEN")){
        let size = prompt("What foot size are you?");
    } else if ((gender.toUpperCase() === "WOMENS") || (gender.toUpperCase === "WOMEN'S") || (gender.toUpperCase === "WOMEN")){
        
    } else {
        alert("Invalid gender! Please try again!");
        getInput();
    }
}

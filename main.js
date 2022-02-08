/*Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you 
what this user interface looks like exactly).  If the user chooses to combine, prompt them for two colors (one at a time). 
Combine the colors (using if, else if, and else statements) then log the result.
If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, 
else if, and else statements) then log the result. 
#### Color combining

| inputs | output |
| --- | --- |
| red + blue | purple |
| red + yellow | orange |
| blue + yellow | green |
| anything else | "error" |

#### Color deconstructing

| input | outputs |
| --- | --- |
| purple | red + blue |
| orange | red + yellow |
| green | blue + yellow |
| anything else | error |

-choose combine or deconstruct
    -if combine--> prompt 2 primary colors, one at a time 
         if color+color--> log created new color

    -if deconstruct, prompt which single color to deconstruct
        if (single color)--> log the two colors

*/

const prompt = require('prompt-sync')();

//choose
let choose = prompt("Would you like to combine colors, or deconstruct a color? Type 1 to combine, or 2 to deconstruct. ");


//combine
if (choose === "1") {
    let primary1 = prompt("Choose a primary color; red, yellow, or blue: ");
    if (primary1 !== "red" &&  primary1 !== "blue" && primary1 !== "yellow") {
        console.log("Error, this is not a primary color. Please try again");
        return;
     }
    let primary2 = prompt("Choose a second primary color: ");
    
    if (primary2 !== "red" &&  primary2 !== "blue" && primary2 !== "yellow") {
        console.log("Error, this is not a primary color. Please try again.");
     }
    if (primary1 === "red" && primary2 === "blue") {
        console.log("You've created purple!");
    }
    else if (primary1 === "red" && primary2 === "yellow") {
        console.log("You've created orange!");
    }
    else if (primary1 === "blue" && primary2 === "yellow") {
        console.log("You've created green!");
    }
}

//deconstruct
else if (choose === "2") {
    let decon = prompt("Would you like to deconstruct purple, orange, or green? ");

    if (decon === "purple") {
        console.log("Purple is created by combining red and blue.");
    }
    else if (decon === "orange") {
        console.log("Orange is created by combining red and yellow.");
    }
    else if (decon === "green") {
        console.log("Green is created by combining blue and yellow.");
    }
    else{
        console.log("Error, this is not a secondary color. Please try again.")
    }
}










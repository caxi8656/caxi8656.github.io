function tellFortune() {
    let childrenNo = prompt("Enter the number of children:");
    let partnerName = prompt("Enter the name of your partner:");
    let location = prompt("Enter a location:");
    let job = prompt("Enter a job title:");

    let result = "You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + childrenNo + " kids.";
    document.getElementById("output").innerText = result;
}

function calculateDogAge() {
    let puppyAge = prompt("Enter your dog's age:");
    let result = "Your doggie is " + (puppyAge * 7) + " years old in dog years!";
    document.getElementById("output").innerText = result;
}

function reverseNumber() {
    let numberString = prompt("Enter a series of numbers as a single string (e.g., 12345):");
    // Split the string into an array of characters, reverse it, and join it back into a string
    let reverseString = numberString.split("").reverse().join("");
    
    let result = "Reversed numbers: " + reverseString;
    document.getElementById("output").innerText = result;
}

function alphabetString() {
    let letterString = prompt("Enter a string:");
    let sortedString = letterString.split('').sort().join('');
    let result = "Alphabetically sorted: " + sortedString;
    document.getElementById("output").innerText = result;
}

function upperConverter() {
    let lowerString = prompt("Enter a string:");
    // Split the string into words, capitalize the first letter of each word, then join them back together
    let upperString = lowerString
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    let result = "Capitalized Letters: " + upperString;
    document.getElementById("output").innerText = result;
}


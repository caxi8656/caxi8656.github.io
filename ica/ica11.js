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
    let numberArray = prompt("Enter a series of numbers separated by commas:").split(",");
    let reverseArray = numberArray.reverse();
    let result = "Reversed numbers: " + reverseArray.join(", ");
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
    let upperString = lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
    let result = "Converted string: " + upperString;
    document.getElementById("output").innerText = result;
}

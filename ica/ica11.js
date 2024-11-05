function tellFortune() {
    let childrenNo = prompt("Enter the number of children:");
    let partnerName = prompt("Enter the name of your partner:");
    let location = prompt("Enter a location:");
    let job = prompt("Enter a job title:");

    console.log("You will be a " + job + " in " + location + ", and married to " + partnerName + " with " + childrenNo + " kids.");
}

function calculateDogAge() {
    let puppyAge = prompt("Enter your dog's age:");
    console.log("Your doggie is " + puppyAge * 7 + " years old in dog years!");
}

function reverseNumber() {
    let numberArray = prompt("Enter a series of numbers separated by commas:").split(",");
    let reverseArray = numberArray.reverse();
    console.log(reverseArray);
}

function alphabetString() {
    let letterString = prompt("Enter a string:");
    let sortedString = letterString.split('').sort().join('');
    console.log(sortedString);
}

function upperConverter() {
    let lowerString = prompt("Enter a string:");
    let upperString = lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
    console.log(upperString);
}

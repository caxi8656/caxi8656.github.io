function tellFortune(childrenNo,partnerName,location,job)
{
    console.log("You will be a " + job + " in " + location + " , and married to " + partnerName + " with " + childrenNo + " kids.");
}

function calculateDogAge(puppyAge)
{
    console.log("Your doggie is " + puppyAge * 7 + " years old in dog years!");
}

function reverseNumber(numberArray)
{
    reverseArray = numberArray.reverse();
    console.log(reverseArray);
}

function alphabetString(letterString)
{
    reverseLetter = letterString.split('').sort().join('');

    console.log(reverseLetter);
}

function upperConverter(lowerString)
{
    upperString = lowerString.charAt(0).toUpperCase() + str.slice(1);
    console.log(upperString);
}



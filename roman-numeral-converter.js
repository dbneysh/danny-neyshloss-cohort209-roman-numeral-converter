//Get a table of Roman Numerals and their corresponding Arabic numeral values 
//Store that information in a data structure, either in 2 arrays, 1 2D array or an object

function romanNumeralConverter(number){
    var integer = number;
    const romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    const arabicNumeralValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    //const twoDarray=[[],[],[]]
    //MMD would be 2500

    var romanNumeralString = ""; 
    //if we get 5421 as our number argument 
    //we will convert it to MMMMCDXXI
    //CCCC is incorrect, CD = 400

    //WE NEED A LOOP
    //This for loops counter variable 'i' is being set to arabicNumeralValues.length-1, which is 12, which the index of the last element in the array
    //If you want to get to the last index of an array, just do array.length-1, and that will be the last index of that array
    for(let i = arabicNumeralValues.length-1; i >= 0; i--){
        while(integer >= arabicNumeralValues[i]){
            integer -= arabicNumeralValues[i]; //this is equal to integer = integer - arabicNumeralValues[i]
            romanNumeralString += romanNumerals[i]; 
        }
    }
    //When we get a number value, we want to check to see what is the largest roman numeral that can divide into that number
    //Loop through our arabicNumeralValues array and check to see what is the largest value we can subtract from our number

    //For loop, looping through the arabic numeral values array
    //while loop for subtracting value and adding the roman numeral to a string

        console.log(romanNumeralString); 
}

romanNumeralConverter(5421);
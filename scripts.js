function start()
{
    //initializing const arrays. These are the arrays that contain all potential characters in the password and dont need to be changed.
    const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    //initialize password length variable
    let passNumber = 0;
    let password = "";
    //initialize workingArray as an empty array to add the characters that the user wants
    let workingArray =[];
    //asking what characters the user wants
    let passNumbers = confirm("Do you want numbers in your password?");
    let passUpper = confirm("Do you want uppercase letters in your password?");
    let passLower = confirm("Do you want lowercase letters in your password?");
    let passSpecial = confirm("Do you want special characters in your password?");

    //asking user how long they want the password to be
    do
    {
        passNumber = prompt("How long do you want your password to be? Must be at least 8 characters long.");
        //makes sure password is a number
        if(isNaN(passNumber))
        {
            alert("please enter a valid number");
        }
        //makes sure password is longer than 8
        if(passNumber < 8)
        {
            alert("password must be longer than 7");
        }
    }
    //runs loop as long as password length is not a number or password is not longer than 8
    while(isNaN(passNumber) || passNumber < 8) 

    //pushing requested characters to the working array
    if(passNumbers)
    {
        Array.prototype.push.apply(workingArray, numbers);
        console.log(workingArray);
    }

    if(passUpper)
    {
        Array.prototype.push.apply(workingArray, uppercase);
        console.log(workingArray);
    }

    if(passLower)
    {
        Array.prototype.push.apply(workingArray, lowercase);
        console.log(workingArray);
    }

    if(passSpecial)
    {
        Array.prototype.push.apply(workingArray, symbols);
        console.log(workingArray);
    }

    //generates password
    let pass = generatePw(workingArray, passNumber);


    console.log(checkUppercase(pass));
    console.log(checkLowercase(pass));
    console.log(checkNumbers(pass));
    console.log(checkSpecial(pass));


    //start of checking loop
    let numcheck = false;
    let upcheck = false;
    let lowcheck = false;
    let speccheck = false;
    numcheck = false;
    upcheck = false;
    lowcheck = false;
    speccheck = false;
    //runs as long as the password does not contain requested characters. if statement at the end breaks the loop once everything is true
    while(true)
    {
        //first if statement checks if the user requested the specific characters
        if(passNumbers === true)
        {
            //nested if else checks if it contains the characters. if  it does, it sets its check to true. if it does not, it generates a new password sets every check to false. New password means everything has to be checked again. Repeated for all the if statements in this loop
            if(checkNumbers(pass) === true)
            {
                numcheck = true;
            }
            else
            {
                pass = generatePw(workingArray, passNumber);
                numcheck = false;
                upcheck = false;
                lowcheck = false;
                speccheck = false;
            }
        }
        if(passUpper === true)
        {
            if(checkUppercase(pass) === true)
            {
                upcheck = true;
            }
            else
            {
                pass = generatePw(workingArray, passNumber);
                numcheck = false;
                upcheck = false;
                lowcheck = false;
                speccheck = false;
            }
        }
        
        if(passLower === true)
        {
            if(checkLowercase(pass) === true)
            {
                lowcheck = true;
            }
            else
            {
                pass = generatePw(workingArray, passNumber);
                numcheck = false;
                upcheck = false;
                lowcheck = false;
                speccheck = false;
            }
        }
        if(passSpecial === true)
        {
            if(checkSpecial(pass) === true)
            {
                speccheck = true;
            }
            else
            {
                pass = generatePw(workingArray, passNumber);
                numcheck = false;
                upcheck = false;
                lowcheck = false;
                speccheck = false;
            }
        }
        //if password contains all the characters, breaks out of the infinite loop. I couldn't figure out a better way to do this so break seemed like my best option
        if((speccheck && lowcheck && upcheck && numcheck))
        {
            break;
        }
    }
    //sets password text to the randomly generated password
    document.getElementById("pwText").innerHTML = pass;


}
//password generation function. passChars is the array of characters to include in the password, passNum is the length of the password
function generatePw(passChars, passNum)
{
    //initialized password string
    let password = "";
    //generate password. loop runs the amount of times as the password length
    for(let i = 0; i < passNum; i++)
    {
        //adds random character from the passChars array to password
        password+=passChars[parseInt(Math.random()*(passChars.length-1))];
        console.log(password);
    }
    //returns the password
    return password;
}
//all the check functions work the same. pw is the password you want to check
function checkUppercase(pw)
{
    //array of characters that you want to see if the password contains
    const uppercaseCheck = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //function runs the amount of times that the length of the array is
    for(let i = 0; i<uppercaseCheck.length; i++)
    {
        //checks if contains a specific value of the array
        if(pw.includes(uppercaseCheck[i]))
        {
            //if the if statement passes then the password contains an uppercase character. Does not need to run anymore so returns here true
            return true;
        }
    }
    //if the entire for loop runs, then the password did not contain anything in the uppercaseCheck array. Returns false
    return false;
}
//works the same as checkUppercase() but with lowercase letters
function checkLowercase(pw)
{
    const lowercaseCheck = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for(let i = 0; i<lowercaseCheck.length; i++)
    {
        if(pw.includes(lowercaseCheck[i]))
        {
            return true;
        }
    }
    return false;
}
//works the same as checkUppercase() but with numbers
function checkNumbers(pw)
{
    const numbersCheck = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    for(let i = 0; i<numbersCheck.length; i++)
    {
        if(pw.includes(numbersCheck[i]))
        {
            return true;
        }
    }
    return false;
}
//works the same as checkUppercase() but with special characters
function checkSpecial(pw)
{
    const symbolsCheck = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?"];
    for(let i = 0; i<symbolsCheck.length; i++)
    {
        if(pw.includes(symbolsCheck[i]))
        {
            return true;
        }
    }
    return false;
}
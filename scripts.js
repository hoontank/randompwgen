function start()
{
    const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let workingArray = [];
    let passNumber;
    let password = "";
    do
    {
        passNumber = prompt("How long do you want your password to be?");
        if(isNaN(passNumber))
        {
            alert("please enter a valid number");
        }
    }
    while(isNaN(passNumber)) 

    if(confirm("Do you want numbers in your password?"))
    {
        Array.prototype.push.apply(workingArray, numbers);
        console.log(workingArray);
    }

    if(confirm("Do you want uppercase letters in your password?"))
    {
        Array.prototype.push.apply(workingArray, uppercase);
        console.log(workingArray);
    }

    if(confirm("Do you want lowercase letters in your password?"))
    {
        Array.prototype.push.apply(workingArray, lowercase);
        console.log(workingArray);
    }

    if(confirm("Do you want special characters in your password?"))
    {
        Array.prototype.push.apply(workingArray, symbols);
        console.log(workingArray);
    }

    for(let i = 0; i < passNumber; i++)
    {
        password+=workingArray[parseInt(Math.random()*(workingArray.length-1))];
        document.getElementById("pwText").innerHTML = password;
        console.log(password);
    }



}


let month = prompt("Enter the month");

if(month<=3) {
    console.log("6%")
}
else if(month>3 && month<6)
{
    console.log("6.8%");
}
else if(month>=6 && month<=9)
{
    console.log("7.6%");
}
else if(month>9 && month<=12)
{
    console.log("8.2%");
}
else{
    console.log("9%");
}
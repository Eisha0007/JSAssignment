///////////////////////////////////CHAPTER:1/////////////////////////////////////////////
//===========CHAPTER#1-Question#1==================
alert("Welcome to our Website!");
//===========CHAPTER#1-Question#2==================
alert("Error!Please enter a valid Password");
//===========CHAPTER#1-Question#3==================
alert("Welcome to JS Land"+ "\n" +"Happy Coding");
//===========CHAPTER#1-Question#4==================
alert("Welcome to JS Land");
alert("Happy Coding");
//===========CHAPTER#1-Question#5==================
console.log("Hello...I can run code through my browser's console");
//===========CHAPTER#1-Question#6==================
//Done in projects
//===========CHAPTER#1-Question#7==================
//Done in projects

///////////////////////////////////CHAPTER:2/////////////////////////////////////////////
//===========CHAPTER#2-Question#1==================
var username;
//===========CHAPTER#2-Question#2==================
var myName;
var name="Eisha Ahmad Khan";
myName=name;
alert(myName);
//===========CHAPTER#2-Question#3==================
var message;
message="Hello World"
alert(message);
//===========CHAPTER#2-Question#4==================
var nam;
var age;
var  course;
nam="Jhone Doe";
age="15 Years Old";
course="Certified Mobile Application Development"
alert(nam);
alert(age);
alert(course);
//===========CHAPTER#2-Question#5==================
var m;
m = "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" +"\n"+"P";
alert(m);
//===========CHAPTER#2-Question#6==================
var email;
var EA="eishakhan@gmail.com"
email=EA;
alert("My email address is:"+email);
//===========CHAPTER#2-Question#7==================
var book;
var book_value="A smarter way to learn Javascript";
book=book_value;
alert("I am trying to learn from the Book "+book);
//===========CHAPTER#2-Question#8==================
document.write("<hr>"+"Yah!I can write HTML content through Javascript.");
//===========CHAPTER#2-Question#9==================
var symbols ="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
alert(symbols);


///////////////////////////////////CHAPTER:3/////////////////////////////////////////////
//===========CHAPTER#3-Question#1==================
var c3age=15;
alert("I am "+c3age+" years old.");
//===========CHAPTER#3-Question#2==================
var c3counter = 15;
alert("You have visited this site " + c3counter + " times");
//===========CHAPTER#3-Question#3==================
var birthYear;
birthYear=1998;
document.write("<hr>" + "My Birth year is "+birthYear+"<br>"+"Data type of my declared variable is number");
//===========CHAPTER#3-Question#4==================
var Visitors_name="John Doe";
var Product_title="T-shirts";
var Quantity=5;
document.write("<hr>"+ Visitors_name+" oredered "+Quantity+" "+Product_title+"(s) on XYZ Clothing store.");

///////////////////////////////////CHAPTER:4/////////////////////////////////////////////
//===========CHAPTER#4-Question#1==================
var var1,var2,var3;
//===========CHAPTER#4-Question#2==================
//LEGAL NAMES
var var1,_var1,v1ar,v123,$var2;
//ILLEGAL NAMES
// var 123,%var,write,var,document;
//===========CHAPTER#4-Question#3==================
document.write("<hr>"+"<h2>"+"Rules for naming JS variables"+"</h2>");
document.write("Variable names can only contain numbers,$ and _.For example $my_1stVariable");
document.write("<br>" + "Variables must begin with a letter,$ or_.For example $name, _name or name.");
document.write("<br>" + "Variable names are case sensitive.");
document.write("<br>" + "Variable names should not be JS keywords."+"<hr>");

///////////////////////////////////CHAPTER:5/////////////////////////////////////////////
//===========CHAPTER#5-Question#1==================
var num1=40;
var num2=6;
var sum;
sum=num1+num2;
document.write("<hr>"+"Sum of "+num1+" and "+num2+" is "+sum+"<br>");
//===========CHAPTER#5-Question#2==================
var subtraction,multiplication,division,modulus;
subtraction = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + sum + "<br>");
multiplication= num1 * num2;
document.write( "Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");
division = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
modulus = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>"+"<br>");
//===========CHAPTER#5-Question#3==================
var n;
document.write("Value after variable declaration: "+n+"<br>");
n=2;
document.write("Intial Value: " + n + "<br>");
n++;
document.write("Value after increment : " + n + "<br>");
n=n+7;
document.write("Value after addition: " + n + "<br>");
n--;
document.write("Value after decrement : " + n + "<br>");
n=n/3;
document.write("The remainder is : " + n + "<br>");
//===========CHAPTER#5-Question#4==================
var Cost_of_ticket;
Cost_of_ticket=600;
var total_cost;
total_cost=Cost_of_ticket*5;
document.write("<br>"+"Total cost to buy 5 tickets to a movie is:" +total_cost +" PKR"+ "<br>");
//===========CHAPTER#5-Question#5==================
var x=4;
document.write("<br>"+"Table of 4"+"<br>");
document.write(x +"  x "+ "  1 = "+  x * 1+"<br>");
document.write(x + " x " + " 2 = " + x * 2 + "<br>");
document.write(x + " x " + " 3 = " + x * 3 + "<br>");
document.write(x + " x " + " 4 = " + x * 4 + "<br>");
document.write(x + " x " + " 5 = " + x * 5 + "<br>");
document.write(x + " x " + " 6 = " + x * 6 + "<br>");
document.write(x + " x " + " 7 = " + x * 7 + "<br>");
document.write(x + " x " + " 8 = " + x * 8 + "<br>");
document.write(x + " x " + " 9 = " + x * 9 + "<br>");
document.write(x + " x " + " 10 = " + x * 10 + "<br>");
document.write(x + " x " + " 11 = " + x * 11 + "<br>");
document.write(x + " x " + " 12 = " + x * 12 + "<br>");


///////////////////////////////////CHAPTER:6-9/////////////////////////////////////////////
//===========CHAPTER#6-9-Question#3==================
var c6name;
c6name=prompt("What is your name?");
alert("Welcome to the webpage! "+c6name);
//===========CHAPTER#6-9-Question#5==================
var c6num;
c6num = prompt("Enter a number");
if (c6num == "") {
    c6num = 5;
}
else {
    c6num = c6num;
}

document.write(c6num + "  x " + "  1 = " + c6num * 1 + "<br>");
document.write(c6num + " x " + " 2 = " + c6num * 2 + "<br>");
document.write(c6num + " x " + " 3 = " + c6num * 3 + "<br>");
document.write(c6num + " x " + " 4 = " + c6num * 4 + "<br>");
document.write(c6num + " x " + " 5 = " + c6num * 5 + "<br>");
document.write(c6num + " x " + " 6 = " + c6num * 6 + "<br>");
document.write(c6num + " x " + " 7 = " + c6num * 7 + "<br>");
document.write(c6num + " x " + " 8 = " + c6num * 8 + "<br>");
document.write(c6num + " x " + " 9 = " + c6num * 9 + "<br>");
document.write(c6num + " x " + " 10 = " + c6num * 10 + "<br>");
document.write(c6num + " x " + " 11 = " + c6num * 11 + "<br>");
document.write(c6num + " x " + " 12 = " + c6num * 12 + "<br>");


///////////////////////////////////CHAPTER:9-11/////////////////////////////////////////////
//===========CHAPTER#9-11-Question#1==================
var cityname;
cityname = prompt("What is your city name?","Enter your city name");
if( cityname =="Karachi" || cityname=="karachi")
{
alert("Welcome to the City of Lights!");
}
else if (cityname == "Lahore" || cityname == "lahore") {
    alert("Welcome to the City of Love!");
}
else if (cityname == "Islamabad" || cityname == "islamabad") {
    alert("Welcome to the City of Peace!");
}
else if (cityname == "Peshawar" || cityname == "peshawar") {
    alert("Welcome to the City of Pathans!");
}
else
{
alert("Please enter a valid city name")
}


//===========CHAPTER#9-11-Question#2==================
var G;
G = prompt("What is your gender?", "Enter your gender");
if (G == "Male" ||G=="M" || G=="m" ||G=="male" )
{
    alert("Good Morning Sir!");
}
else if (G == "Female" || G == "F" || G == "f" || G == "female")
{
    alert("Good Morning ma'am!");
}
else 
{
    alert("Please enter a valid value of Gender!");
}

//===========CHAPTER#9-11-Question#3==================
var lightvalue;
lightvalue = prompt("Enter the color of road traffic?", "Enter the value");
if (lightvalue == "Red" || lightvalue=="red")
{
    alert("Must Stop!");
}
else if(lightvalue == "Yellow" || lightvalue == "yellow")
{
    alert("Ready to move!");
}
else if (lightvalue == "Green" || lightvalue == "green") {
    alert("Move now!");
}


//===========CHAPTER#9-11-Question#4==================
var fuel;
fuel = prompt("What is the remaining fuel?", "Enter your fuel value");
if (fuel<0.25)
{
    alert("Please refill the fuel in your car");
}
else
{
    alert("The fuel value is okay!")
}


//===========CHAPTER#9-11-Question#5==================
var a=4;
if (++a === 5) 
{ 
    alert("given condition for variable a is true"); 
}
var b = 82;
if (b++ === 83) 
{ 
     alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) 
{ 
    alert("condition 1 is true"); 
} 
if (c === 13) 
{ 
    alert("condition 2 is true");
}
if (++c < 14)
{
     alert("condition 3 is true");
}
 if (c === 14)
{ 
    alert("condition 4 is true");
}
var materialCost = 20000; 
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost) 
{ 
    alert("The cost equals"); 
}
if(true)
{ 
    alert("True"); } if (false) { alert("False");
}
if("car" < "cat")
{ 
    alert("car is smaller than cat");
}


///////////////////////////////////CHAPTER:12-13/////////////////////////////////////////////
//===========CHAPTER#12-13-Question#1==================
var y;
y=prompt("Enter a character!");
var t;
t=y.charCodeAt(0);
  if(t>=65 && t<=90)
    {
        alert("The character entered is an  UpperCase Alphabet");
    }
   else if (t >= 97 && t <= 122) 
    {
         alert("The character entered is a Lowercase Alphabet");
    }
   else if (t >= 48 && t <= 57) 
    { alert("The character entered is a Number");}   
 else
{
     alert("Please enter a valid character");
} 
//===========CHAPTER#12-13-Question#5==================
var password;
var passwordconfirm;
password=prompt("Enter your password!","Enter password");
if(password=="")
{
    alert("Please enter your password!");
    password = prompt("Enter your password!");
    passwordconfirm = prompt("Enter your confirm password!");
    if (password == passwordconfirm) {
        alert("Correct!The password you entered matches the original password");
    }
    else {
        alert("Incorrect password!");
    }
}
else
{
    passwordconfirm = prompt("Enter your confirm password!");
    if (password == passwordconfirm) {
        alert("Correct!The password you entered matches the original password");
    }
    else {
        alert("Incorrect password!");
    }
}


/////////////////////////////////CHAPTER:14-16/////////////////////////////////////////////
//===========CHAPTER#14-16-Question#1==================
var student_names=[];
//===========CHAPTER#14-16-Question#3==================
var string_array=["s1","s2","s3"];
//===========CHAPTER#14-16-Question#4==================
var numbers_array=[1,2,3,4,5,6,7,8,9,10];
//===========CHAPTER#14-16-Question#5==================
var boolean_array=[false,true];
//===========CHAPTER#14-16-Question#6==================
var mixed_array=[1,"Eisha",45,false];
//===========CHAPTER#14-16-Question#7==================
var QArray=["SSC","HSC","BCS","BS","BCOM","MS","M_Phil","PhD"];
document.write("<br>" + QArray[0]+"<br>");
document.write(QArray[1] + "<br>");
document.write(QArray[2] + "<br>");
document.write(QArray[3] + "<br>");
document.write(QArray[4] + "<br>");
document.write(QArray[5] + "<br>");
document.write(QArray[6] + "<br>");
document.write(QArray[7] + "<br>" + "<br>");

//===========CHAPTER#14-16-Question#15==================
var company=["Apple","Samsung","Motrola","Sony","Nokia","Haier"];
document.write("<br>"+"<nav>"+"<ul>");
document.write("<li>"+company[0]+"</li>");
document.write("<li>" + company[1] + "</li>");
document.write("<li>" + company[2] + "</li>");
document.write("<li>" + company[3] + "</li>");
document.write("<li>" + company[4] + "</li>");
document.write("<li>" + company[5] + "</li>");
document.write("</ul>" + "</nav>");





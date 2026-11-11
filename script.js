
// Part 1: Primitive Data Types


// Questions 1-8: 
{
    let studentName = "Mani Bharathi";
    console.log("1.", typeof studentName);
}


{
    let employeeAge = 26;
    console.log("2.", typeof employeeAge);
}


{
    let isWorking = true;
    console.log("3.", typeof isWorking);
}


{
    let myVariable;
    console.log("4.", myVariable);
}


{
    let myString = "JavaScript practice";
    let myNumber = 2439;
    let myBoolean = true;
    let myUndefined;
    let myNull = null;

    console.log("6. String:", typeof myString);
    console.log("6. Number:", typeof myNumber);
    console.log("6. Boolean:", typeof myBoolean);
    console.log("6. Undefined:", typeof myUndefined);
    console.log("6. Null:", typeof myNull); // JavaScript returns "object" for null.
}


{
    let courseName = "JavaScript practice";
    console.log("7.", courseName);
}


{
    let batchNumber = 42;
    console.log("8.", typeof batchNumber);
}


// Part 2: Arrays


//Questions 9-12:
{
    let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

    console.log("10.", fruits[0]);
    console.log("11.", fruits[2]);
    console.log("12.", fruits[fruits.length - 1]);
}

// Questions 13 & 14:
{
    let personalDetails = ["Mani Bharathi", 26, "Trichy", " Full Stack Developer"];

    console.log("14. Name:", personalDetails[0]);
    console.log("14. Age:", personalDetails[1]);
    console.log("14. City:", personalDetails[2]);
    console.log("14. Designation:", personalDetails[3]);
}

// Questions 15 & 16:
{
    let mixedArray = ["Java", 100, true, "Angular", 50];
    console.log("16.", mixedArray.length);
}

// Questions 17:
{
    let mobileBrands = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus"];
    console.log("17.", mobileBrands[1]);
}

// Questions 18:
{
    let languages = ["Java", "JavaScript", "Python", "C", "C++", "PHP"];
    console.log("18.", languages[languages.length - 1]);
}



// Part 3: Objects


// Questions 19-21:
{
    let student = {
        name: "Mani Bharathi",
        age: 26,
        city: "Trichy"
    };

    console.log("20.", student.name);
    console.log("21.", student.age);
}

// Questions 22:
{
    let employee = {
        name: "Mani Bharathi",
        salary: 600000,
        designation: "Full Stack Developer"
    };

    console.log("22.", employee);
}

// Questions 23:
{
    let developer = {
        skills: ["Java", "Spring Boot", "Angular", "MySQL", "JavaScript"]
    };

    console.log("23.", developer.skills[2]);
}

// Questions 24 & 25:
{
    let myObject = {
        fruit: "Apple",
        number: 10,
        isAvailable: true,
        toy: "Car"
    };

    console.log("25.", myObject.toy);
}

//  Questions 26:
{
    let company = {
        companyName: "HBSPL",
        location: "Chennai",
        employeeCount: 100
    };

    console.log("26.", company);
}


// Part 4: Arithmetic Operators

// Questions 27: Add two numbers and print the result
{
    let firstNumber = 20;
    let secondNumber = 10;
    console.log("27.", firstNumber + secondNumber);
}

// Questions 28: Subtract two numbers and print the result
{
    let firstNumber = 20;
    let secondNumber = 10;
    console.log("28.", firstNumber - secondNumber);
}

// Questions 29: Multiply three numbers and print the result
{
    let firstNumber = 2;
    let secondNumber = 5;
    let thirdNumber = 10;
    console.log("29.", firstNumber * secondNumber * thirdNumber);
}

// Questions 30: Divide 100 by 5 and print the result
{
    console.log("30.", 100 / 5);
}

// Questions 31: Find the remainder when 25 is divided by 4
{
    console.log("31.", 25 % 4);
}

// Questions 32: Calculate 3 to the power of 4
{
    console.log("32.", 3 ** 4);
}

// Questions 33: Create two variables and perform all six arithmetic operations
{
    let num1 = 15;
    let num2 = 5;

    console.log("33. Addition:", num1 + num2);
    console.log("33. Subtraction:", num1 - num2);
    console.log("33. Multiplication:", num1 * num2);
    console.log("33. Division:", num1 / num2);
    console.log("33. Remainder:", num1 % num2);
    console.log("33. Exponentiation:", num1 ** num2);
}

// Part 5: Increment and Decrement


// Questions 34: Create a variable with value 10 and use pre-increment
{
    let number = 10;
    console.log("34.", ++number);
}

// Questions 35: Create a variable with value 20 and use post-increment
{
    let number = 20;
    console.log("35. Before increment:", number++);
    console.log("35. After increment:", number);
}

// Questions 36: Create a variable with value 30 and use pre-decrement
{
    let number = 30;
    console.log("36.", --number);
}

// Questions 37: Create a variable with value 40 and use post-decrement
{
    let number = 40;
    console.log("37. Before decrement:", number--);
    console.log("37. After decrement:", number);
}

// Questions 38: Predict the output before running this code
{
    let a = 10;
    let b = a++;

    console.log("38. a =", a);
    console.log("38. b =", b);
}

// Questions 39: Predict the output before running this code
{
    let x = 15;
    let y = ++x;

    console.log("39. x =", x);
    console.log("39. y =", y);
}

// Questions 40: Predict the final values of all variables
{
    let num1 = 25;
    let num2 = --num1;
    let num3 = num2++;
    let num4 = ++num3;

    console.log("40. num1 =", num1);
    console.log("40. num2 =", num2);
    console.log("40. num3 =", num3);
    console.log("40. num4 =", num4);
}

import { Add } from "./add.js";
import { Multiply } from "./multy.js";
import { Division } from "./division.js";
import { Sub } from "./subtract.js";
import inquirer from "inquirer";




const number1 = await inquirer.prompt([{
    message: "Enter first number: ",
    name: "Num1",
    type: "number"
}]);

const operator = await inquirer.prompt([{
    message: "Enter operator: ",
    name: "operator1",
    type: "list",
    choices: ["+","-","*","/"]
}]);


const number2 = await inquirer.prompt([{
    message: "Enter second number: ",
    name: "Num2",
    type: "number"
}]);




if(operator.operator1 === "+"){
    let addnum = Add(number1.Num1,number2.Num2)
    console.log(addnum)
}
else if(operator.operator1 === "-"){

    let subNum = Sub(number1.Num1,number2.Num2)
    console.log(subNum)
}
else if(operator.operator1 === "*"){

    let MultyNum = Multiply(number1.Num1,number2.Num2)
    console.log(MultyNum)
}
else if(operator.operator1 === "/"){

    let divNum = Division(number1.Num1,number2.Num2)
    console.log(divNum)
}

else{
    console.log("Some thing went wrong")
}









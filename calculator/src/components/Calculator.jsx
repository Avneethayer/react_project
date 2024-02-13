import Display from "./Display.jsx"
import Keypad from "./Keypad.jsx"
import { useState } from "react"
const Calculator = () => {
    let temp;
    const [operand1,setOperand1]= useState(null);
    const [operand2,setOperand2]= useState(null);
    const [operator, setOperator] = useState(null)
    const [result, setResult] = useState(0); 

    function handleClick(value){

        switch(value){
            case "C":
                setResult(0);
                setOperand1(null)
                setOperand2(null)
                break;

            case "=":      
                switch(operator){
                    case "+":
                        temp = operand1 + operand2
                        setOperand1(temp)
                        break;
                    
                    case "-":
                        temp = (operand1 - operand2)
                        setOperand1(temp)
                        break; 
                    
                    case "/":
                        temp = (operand1 / operand2)
                        setOperand1(temp)
                        break; 
                    
                    case "X":
                        temp = (operand1 * operand2)
                        setOperand1(temp)
                        break; 

                    case "%":
                        temp = (operand1 % operand2)
                        setOperand1(temp)
                        break; 
                }

                setResult(temp)
                console.log("result", result)
                setOperand2(null)
                break;

            default:
                if(!isNaN(value)){
                    if(operand1 === null) setOperand1(value)
                    else if(operand2 === null) setOperand2(value)
                    setResult(value)
                }

                else if(value !== '='){
                    setOperator(value)
                }    
        }
    }

    return (
        <div id="calculator">
            <Display result={result}/>
            <Keypad click={handleClick}/>
        </div>
    )
}

export default Calculator

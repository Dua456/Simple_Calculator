"use client";

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Default export of the CalculatorComponent function
export default function Calculator(){
    // State hooks for managing input numbers and the result
    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");
    const [result, setResult] = useState<string>("");

    // Handler for updating num1 state on input change
    const handleNum1Change = (e:ChangeEvent<HTMLInputElement>) : void  =>  {
        setNum1(e.target.value);
    };

    // Handler for updating num2 state on input change
    const handleNum2Change = (e:ChangeEvent<HTMLInputElement>) : void => {
        setNum2(e.target.value);
    };

    // Function to perform addition and set the result
    const add = () : void => {
        setResult ((parseFloat(num1) + parseFloat(num2)).toString());
    };

    // Function to perform subtraction and set the result
    const subtract = () : void => {
        setResult((parseFloat(num1) - parseFloat(num2)).toString());
    };

    // Function to perform multiplication and set the result
    const multiplication = () : void => {
        setResult((parseFloat(num1) * parseFloat(num2)).toString());
    };

     // Function to perform division and set the result
    const divide = () : void => {
        if(parseFloat(num2) !== 0){
            setResult((parseFloat(num1) / parseFloat(num2)).toString());
        } else {
            setResult("Error: Division by zero");
        };
    };

    // Function to clear the inputs and result
    const clear = (): void => {
        setNum1("");
        setNum2("");
        setResult("");
    };

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
        <Card className="w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-3xl transition-transform duration-500 hover:scale-105 transform-gpu">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-yellow-300 dark:to-red-600">
              Simple Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="num1" className="text-lg font-medium text-gray-700 dark:text-gray-300">Number 1</Label>
                <Input
                  id="num1"
                  type="number"
                  value={num1}
                  onChange={handleNum1Change}
                  placeholder="Enter a number"
                  className="p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="num2" className="text-lg font-medium text-gray-700 dark:text-gray-300">Number 2</Label>
                <Input
                  id="num2"
                  type="number"
                  value={num2}
                  onChange={handleNum2Change}
                  placeholder="Enter a number"
                  className="p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <Button
                variant="outline"
                className="text-2xl font-bold text-white bg-gradient-to-br from-green-400 to-blue-500 dark:from-teal-400 dark:to-blue-500 p-4 rounded-full shadow-md transform hover:scale-110 transition"
                onClick={add}
              >
                +
              </Button>
              <Button
                variant="outline"
                className="text-2xl font-bold text-white bg-gradient-to-br from-red-400 to-pink-500 dark:from-orange-400 dark:to-red-600 p-4 rounded-full shadow-md transform hover:scale-110 transition"
                onClick={subtract}
              >
                -
              </Button>
              <Button
                variant="outline"
                className="text-2xl font-bold text-white bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-amber-400 dark:to-orange-600 p-4 rounded-full shadow-md transform hover:scale-110 transition"
                onClick={multiplication}
              >
                *
              </Button>
              <Button
                variant="outline"
                className="text-2xl font-bold text-white bg-gradient-to-br from-purple-400 to-pink-500 dark:from-fuchsia-400 dark:to-pink-600 p-4 rounded-full shadow-md transform hover:scale-110 transition"
                onClick={divide}
              >
                /
              </Button>
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="result" className="text-lg font-medium text-gray-700 dark:text-gray-300">Result</Label>
              <Input
                id="result"
                type="text"
                value={result}
                placeholder="Result"
                readOnly
                className="p-3 border-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-center text-lg font-semibold"
              />
            </div>
            <Button
              variant="outline"
              className="w-full p-4 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 text-gray-800 dark:text-gray-100 rounded-xl shadow-md hover:bg-gray-200 dark:hover:bg-gray-500 transition"
              onClick={clear}
            >
              Clear
            </Button>
          </CardContent>
        </Card>
      </div>
    );
}    
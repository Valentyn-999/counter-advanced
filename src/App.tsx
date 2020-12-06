import React, {useState} from 'react';
import './App.css';
import {AddButtons} from "./buttons/AddButton";
import {Display} from "./Display";
import {MaxValue} from "./Manu/MaxValue";
import {StartValue} from "./Manu/StartValue";
import {SetButton} from "./Manu/SetButton";


function App() {


    const [counter, setCounter] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [disableSetB, setDisableSetB] = useState<boolean>(true)


    function addNumber() {
        setCounter(counter + 1)
    }

    function resetNumber() {
        setCounter(minValue)
    }

    function setValueOf () {
        // @ts-ignore
        const inputValueMax = document.getElementById("max-value").value
        // @ts-ignore
        const inputValueMin = document.getElementById("min-value").value

        const toNumberMax = parseInt(inputValueMax)
        const toNumberMin = parseInt(inputValueMin)
        setMaxValue(toNumberMax)
        setMinValue(toNumberMin)
        setCounter(toNumberMin)
    }
    function setDisableHere () {
        debugger
        setDisableSetB(false)
    }

    return (
        <div className="App">
            <div className={'column settings'}>
                <div className="maxValue">
                    <MaxValue setValueOf={setValueOf} maxValue={maxValue} setDisableHere={setDisableHere}/>
                </div>
                <div className="startValue">
                    <StartValue setValueOf={setValueOf} minValue={minValue} setDisableHere={setDisableHere}/>
                </div>
                <div>
                    <SetButton maxValue={maxValue} minValue={minValue} setValueOf={setValueOf} counter={counter} disableSetB={disableSetB}/>
                </div>
            </div>
            <div className={'column bestCounter'}>
                <div className="counterSS">
                    <Display counter={counter} maxValue={maxValue} minValue={minValue}/>
                </div>
                <AddButtons
                            resetNumber={resetNumber}
                            addNumber={addNumber}
                            counter={counter}
                            maxValue={maxValue}
                            minValue={minValue}
                />
            </div>
        </div>
    );
}


export default App;

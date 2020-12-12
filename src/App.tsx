import React, {useState, ChangeEvent} from 'react';
import './App.css';
import SetButton from "./SettingsMenu/SetButton";
import StartValue from './SettingsMenu/StartValue';
import MaxValue from './SettingsMenu/MaxValue';
import IncButton from './SecondMenu/IncButtons';
import Display from "./SecondMenu/Display";
import ResetButton from './SecondMenu/ResetButton';


function App() {


    const [counter, setCounter] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(Number(localStorage.getItem("minValue")))
    const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem("maxValue")))
    const [isDisabled, setIsDisabled] = useState<boolean>(false)


    function addNumber() {
        return setCounter(counter + 1)
    }

    function resetNumber() {
        return setCounter(minValue)
    }
    function setMinimum(e: ChangeEvent<HTMLInputElement>) {
        setIsDisabled(true)
        const newMinimum = Number(e.currentTarget.value)
        localStorage.setItem("minValue", newMinimum.toString())
        return setMinValue(newMinimum)
    }
    function setMaximum(e: ChangeEvent<HTMLInputElement>) {
        setIsDisabled(true)
        const newMaximum = Number(e.currentTarget.value)
        localStorage.setItem("maxValue", newMaximum.toString())
        return setMaxValue(newMaximum)
    }

    function setUndisable() {
        setIsDisabled(false)
        setCounter(minValue)
    }

    return (
        <div className={'App'}>
            <div className={'settings1'}>
                <div className={'sMaxValue'}><MaxValue maxValue={maxValue} setMaximum={setMaximum}/></div>

                <div className={'sStartValue'}><StartValue minValue={minValue} setMinimum={setMinimum}/></div>

                <div className={'sSetButton'}><SetButton setUndisable={setUndisable} isDisabled={isDisabled} minValue={minValue} maxValue={maxValue}/></div>
            </div>
            <div className={'settings2'}>
                <div className={'sDisplay'}><Display counter={counter} maxValue={maxValue} minValue={minValue} isDisabled={isDisabled}/></div>

                <div className={'sInc'}><IncButton addNumber={addNumber} maxValue={maxValue} counter={counter} isDisabled={isDisabled}/></div>

                <div className={'sReset'}><ResetButton resetNumber={resetNumber} isDisabled={isDisabled}/></div>
            </div>
        </div>
    )
}


export default App;

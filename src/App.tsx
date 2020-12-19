import React from 'react';
import './App.css';
import {Counter} from './Counter';
import {useDispatch} from "react-redux";
import {AddNumberAC, ResetNumberAC, SetAsDisableAC, SetMaximumAC, SetMinimumAC} from "./redux/counter-reducer";

export type CounterType = {
    counter: number
    minValue: number
    maxValue: number
    isDisabled: boolean
}

function App() {

    const dispatch = useDispatch()


    function addNumber() {
        debugger
    const action = AddNumberAC()
        dispatch(action)
    }

    function resetNumber() {
        const action = ResetNumberAC()
        dispatch(action)
    }

    function setMinimum(minValue: number, isDisabled: boolean) {
        const action = SetMinimumAC(minValue, isDisabled)
        dispatch(action)
    }

    function setMaximum(maxValue: number, isDisabled: boolean) {
        const action = SetMaximumAC(maxValue, isDisabled)
        dispatch(action)
    }

    function setAsDisable(isDisabled: boolean) {
        const action = SetAsDisableAC(isDisabled)
        dispatch(action)
    }

    return (
        <div>
            <Counter
            addNumber={addNumber}
            resetNumber={resetNumber}
            setMinimum={setMinimum}
            setMaximum={setMaximum}
            setAsDisable={setAsDisable}
            />
        </div>
    )
}

export default App;

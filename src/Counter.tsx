import React, {ChangeEvent} from 'react';
import {Inputs} from "./SettingsMenu/Input";
import SetButton from "./SettingsMenu/SetButton";
import Display from "./SecondMenu/Display";
import {Buttons} from "./SecondMenu/Buttons";
import {AppRootStateType} from './redux/store';
import {useSelector} from "react-redux";
import {CounterType} from "./App";

export type PropsType = {
    addNumber: () => void
    resetNumber: () => void
    setMinimum: (minValue: number, isDisabled: boolean) => void
    setMaximum: (maxValue: number, isDisabled: boolean) => void
    setAsDisable: (isDisabled: boolean) => void
}

export const Counter = (props: PropsType) => {


    const addNumber = () => {
        debugger
        props.addNumber()
    }

    const resetNumber = () => {
        props.resetNumber()
    }

    const setMinimum = (e: ChangeEvent<HTMLInputElement>) => {
        const newMinimum = Number(e.currentTarget.value)
        const isDisabled = true
        props.setMinimum(newMinimum, isDisabled)
    }

    const setMaximum = (e: ChangeEvent<HTMLInputElement>) => {
        const isDisabled = true
        const newMaximum = Number(e.currentTarget.value)
        props.setMaximum(newMaximum, isDisabled)
    }

    const setAsDisable = () => {
        const isDisabled = false
        props.resetNumber()
        props.setAsDisable(isDisabled)
    }
    const state = useSelector<AppRootStateType, CounterType>(state => state.counter)
    return (
        <div className={'App'}>
            <div className={'settings1'}>
                <div className={'sMaxValue'}><Inputs value={state.maxValue} onChange={setMaximum} label={'Max Value'}/></div>
                <div className={'sStartValue'}><Inputs value={state.minValue} onChange={setMinimum} label={'Min Value'}/></div>
                <div className={'sSetButton'}><SetButton setAsDisable={setAsDisable} isDisabled={state.isDisabled}
                                                         minValue={state.minValue} maxValue={state.maxValue} title={'SET'}/></div>
            </div>
            <div className={'settings2'}>
                <div className={'sDisplay'}><Display counter={state.counter} maxValue={state.maxValue} minValue={state.minValue}
                                                     isDisabled={state.isDisabled}/></div>
                <div className={'sInc'}><Buttons title={'INC'} id={'inc-id'} counter={state.counter}
                                                 addNumber={addNumber} resetNumber={resetNumber}
                                                 maxValue={state.maxValue} isDisabled={state.isDisabled}/>
                </div>
                <div className={'sReset'}><Buttons title={'RESET'} id={'reset-id'} counter={state.counter}
                                                   addNumber={addNumber} resetNumber={resetNumber}
                                                   maxValue={state.maxValue} isDisabled={state.isDisabled}/>
                </div>
            </div>
        </div>
    )
}
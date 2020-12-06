import React from "react";

export type PropsType = {
    addNumber: () => void
    resetNumber: () => void
    counter: number
    maxValue: number
    minValue: number


}
export const AddButtons = (props: PropsType) => {

    return (
        <div>
            {<button disabled={props.counter === props.maxValue || props.minValue < 0 || props.minValue >= props.maxValue} onClick={props.addNumber}>ADD</button>}
            {<button disabled={props.counter === props.minValue || props.minValue >= props.maxValue} onClick={props.resetNumber}>RESET</button>}
        </div>
    )
}
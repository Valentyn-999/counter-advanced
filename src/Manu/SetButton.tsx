import React from 'react';

type PropsType = {
    setValueOf: () => void
    disableSetB: boolean
    minValue: number
    maxValue: number
    counter: number
}

export const SetButton = (props: PropsType) => {
    // const trueForReal = true
    return (
        <div>
            <button
                disabled={
                   props.minValue < 0
                || props.minValue >= props.maxValue
                || props.maxValue === props.counter
                || props.disableSetB
                    }
                onClick={props.setValueOf}
            >SET</button>
        </div>
    )
}
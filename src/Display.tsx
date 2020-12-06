import React from 'react';

type PropsType = {
    counter: number
    maxValue: number
    minValue: number
}

export const Display = (props: PropsType) => {
    return (
        <div className={props.counter === props.maxValue ? "activeS" : ""}>
            {props.minValue >= 0 ? props.counter : ` ${props.minValue} is INCORRECT VALUE!!!`}
        </div>
    )
}
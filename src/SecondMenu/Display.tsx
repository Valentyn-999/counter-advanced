import React from 'react';

type PropsType = {
    counter: number
    maxValue: number
    minValue: number
    isDisabled: boolean
}

const Display = (props: PropsType) => {
    return (
        <div className={props.counter === props.maxValue ?
            "last-number" : props.minValue < 0 ?
            "last-number" : props.minValue >= props.maxValue ?
            "last-number" : undefined}>

            {props.minValue >= props.maxValue ?
                <div className={'incorrect-value'}>Incorrect value!</div> : props.isDisabled ?
                    <div className={'enter-value'}>Enter values and press SET</div> : props.counter}

        </div>
    )
}

export default Display
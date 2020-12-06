import React from 'react';

type PropsType = {
    setValueOf: () => void
    setDisableHere: () => void
    maxValue: number
}



export const MaxValue = (props: PropsType) => {


    return (
        <div>
            <div className={"maxValue"}>
                <b>Max value:</b>
                <input
                    id={"max-value"}
                    type="number"
                    onChange={props.setValueOf || props.setDisableHere }
                    value={props.maxValue}
                />
            </div>
        </div>
    )
}
import React from 'react';

type PropsType = {
    setValueOf: () => void
    setDisableHere: () => void
    minValue: number
}


export const StartValue = (props: PropsType) => {


    return (
        <div className={"minValue"}>
            <b>Start value:</b>
            <input
                id={"min-value"}
                type="number"
                onChange={props.setValueOf }
                value={props.minValue}
            />
        </div>
    )
}
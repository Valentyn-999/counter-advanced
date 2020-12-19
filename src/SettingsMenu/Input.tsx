import React, {ChangeEvent} from 'react';
import {TextField} from "@material-ui/core";

type PropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    label: string
}



export const Inputs = (props: PropsType) => {
    return (
        <div>
            <div className={"maxValue"}>
                <TextField id="standard-basic"
                           label={props.label}
                           type={"number"}
                           value={props.value}
                           onChange={props.onChange }
                />
            </div>
        </div>
    )
}
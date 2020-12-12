import React, {ChangeEvent} from 'react';
import {TextField} from "@material-ui/core";

type PropsType = {

    setMaximum: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
}



export const MaxValue = (props: PropsType) => {


    return (
        <div>
            <div className={"maxValue"}>

                <TextField id="standard-basic"
                           label="Max value"
                           type={"number"}
                           value={props.maxValue}
                           onChange={props.setMaximum }
                />
            </div>
        </div>
    )
}

export default MaxValue
import React, { ChangeEvent } from 'react';
import {TextField} from "@material-ui/core";

type PropsType = {

    setMinimum: (e: ChangeEvent<HTMLInputElement>) => void
    minValue: number
}


export const StartValue = (props: PropsType) => {


    return (
        <div className={"s"}>
            <TextField id="standard-basic"
                       label="Start value"
                       type={"number"}
                       value={props.minValue}
                       onChange={props.setMinimum}
            />
            {/*<input*/}
            {/*    id={"min-value"}*/}
            {/*    type="number"*/}
            {/*    // onChange={props.setValueOf }*/}
            {/*/>*/}
        </div>
    )
}

export default StartValue
import React from "react";
import {Button} from "@material-ui/core";

export type PropsType = {
    addNumber: () => void
    isDisabled: boolean
    counter: number
    maxValue: number
//     minValue: number
}
export const IncButton = (props: PropsType) => {

    return (
        <div>
            <Button id={'inc-id'}
                    variant={"outlined"}
                    color={"inherit"}
                    onClick={props.addNumber}
                    disabled={props.counter === props.maxValue || props.isDisabled}>
                INC
            </Button>

        </div>
    )
}
export default IncButton
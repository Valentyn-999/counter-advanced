import React from "react";
import {Button} from "@material-ui/core";

export type PropsType = {
    addNumber: () => void
    isDisabled: boolean
    counter: number
    maxValue: number
    id: string
    title: string
    resetNumber: () => void
}
export const Buttons = (props: PropsType) => {
    return (
        <div>
            <Button id={props.id}
                    variant={"outlined"}
                    color={"inherit"}
                    onClick={props.title === 'INC' ? props.addNumber : props.resetNumber}
                    disabled={props.title === 'INC' ? props.counter === props.maxValue || props.isDisabled : props.isDisabled}>
                {props.title}
            </Button>

        </div>
    )
}
import React from 'react';
import {Button} from "@material-ui/core";

type PropsType = {
    setAsDisable: () => void
    isDisabled: boolean
    minValue: number
    maxValue: number
    title: string
}

const SetButton = (props: PropsType) => {
    return (
        <div>
            <Button id={'set-id'}
                    variant={"outlined"}
                    color={"inherit"}
                    onClick={props.setAsDisable}
                    disabled={!props.isDisabled || props.minValue < 0 || props.minValue >= props.maxValue}>
                {props.title}
            </Button>
        </div>
    )
}

export default SetButton
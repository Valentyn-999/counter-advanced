import React from 'react';
import {Button} from "@material-ui/core";

type PropsType = {
    setUndisable: () => void
    isDisabled: boolean
    minValue: number
    maxValue: number
}

const SetButton = (props: PropsType) => {
    return (

        <div>
            <Button id={'set-id'}
                    variant={"outlined"}
                    color={"inherit"}
                    onClick={props.setUndisable}
                    disabled={!props.isDisabled || props.minValue < 0 || props.minValue >= props.maxValue}

            >SET
            </Button>
        </div>
    )
}

export default SetButton
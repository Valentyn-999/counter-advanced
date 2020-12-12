import React from "react";
import {Button} from "@material-ui/core";

type propsType = {
    resetNumber: () => void
    isDisabled: boolean
}


const ResetButton = (props: propsType) => {

    return (
        <div>
            <Button id={'reset-id'}
                    variant={"outlined"}
                    color={"inherit"}
                    onClick={props.resetNumber}
                    disabled={props.isDisabled}>RESET
            </Button>
            {/*<button*/}
            {/*    // disabled={props.counter === props.minValue || props.minValue >= props.maxValue}*/}
            {/*    onClick={() => {}}>*/}
            {/*    RESET*/}
            {/*</button>*/}
        </div>
    )
}

export default ResetButton
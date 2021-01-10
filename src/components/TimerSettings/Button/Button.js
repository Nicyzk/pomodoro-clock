//button should depend on timerState and selectedtimertype to be disabled
//incrementclicked has not received its timerType. 
import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    let shouldDisable;
    if (props.timerState === "running") {
        if (props.selectedTimerType !== props.buttonType) {
            shouldDisable = true;
        } else {
            shouldDisable = false;
        }
    }

    let arrow;
    if (props.arrow === "up") {
        arrow = <i className={"fa fa-arrow-up " + classes.arrow}></i>
    } else {
        arrow = <i className={"fa fa-arrow-down " + classes.arrow}></i>
    }

    return (
        <button 
            disabled={shouldDisable}
            className={classes.button}
            onClick={() => props.clicked(props.buttonType)}>
            {arrow}
        </button>
    );
}

export default Button;
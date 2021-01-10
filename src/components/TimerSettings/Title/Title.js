import React from 'react';

const Title = (props) => {
    let shouldDisable;
    let style;
    if (props.timerState === "running") {
        if (props.selectedTimerType !== props.textType) {
            shouldDisable = true;
        } else {
            shouldDisable = false;
        }
    }

    if (shouldDisable) {
        style = {
            color: "#ccc"
        }
    }
    return(
        <p
        className={props.class}
        style={style}>{props.children}</p>
    );
}

export default Title;
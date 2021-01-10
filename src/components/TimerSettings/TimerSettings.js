import React from 'react';
import classes from './TimerSettings.module.css'
import 'font-awesome/css/font-awesome.min.css';
import Button from './Button/Button';
import Title from './Title/Title';

const TimerSettings = (props) => {

    return (
        <div className={classes.timerSettings}>
            <div className={classes.settingControlContainer}>
                <Title
                class={classes.settingTitle} 
                textType="Study"
                selectedTimerType={props.selectedTimerType}
                timerState={props.timerState}
                >Study</Title>
                <div className={classes.settingControl}>
                    <Button
                    arrow="up"
                    buttonType="Study"
                    selectedTimerType={props.selectedTimerType}
                    timerState={props.timerState}
                    clicked={props.incrementClicked}/>
                    <Title 
                    textType="Study"
                    selectedTimerType={props.selectedTimerType}
                    timerState={props.timerState}>{props.studyTime}</Title>
                    <Button
                    arrow="down"
                    buttonType="Study"
                    selectedTimerType={props.selectedTimerType}
                    timerState={props.timerState}
                    clicked={props.decrementClicked}/>
                </div>
            </div>
            <div className={classes.settingControlContainer}>
                <Title
                textType="Break"
                class={classes.settingTitle} 
                selectedTimerType={props.selectedTimerType}
                timerState={props.timerState}
                >Break</Title>
                <div className={classes.settingControl}>
                    <Button
                    arrow="up"
                    buttonType="Break"
                    selectedTimerType={props.selectedTimerType}
                    timerState={props.timerState}
                    clicked={props.incrementClicked}/>
                    <Title 
                    textType="Break"
                    selectedTimerType={props.selectedTimerType}
                    timerState={props.timerState}>{props.breakTime}</Title>
                    <Button
                    arrow="down"
                    buttonType="Break"
                    selectedTimerType={props.selectedTimerType}
                    timerState={props.timerState}
                    clicked={props.decrementClicked}/>
                </div>
            </div>
        </div>
    )
}

export default TimerSettings;
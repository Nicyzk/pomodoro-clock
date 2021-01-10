import React, { Component } from 'react';
import classes from './PomodoroClock.module.css';
import TimerSettings from '../../components/TimerSettings/TimerSettings'
import 'font-awesome/css/font-awesome.min.css';

class PomodoroClock extends Component {
    state = {
        timerState: "stopped",
        selectedTimerType: "Study", //this has NO LINK with the timer countdown, used with timerState to disable irrelevant buttons
        studyTime: 25,
        breakTime: 5,
        remainingTime: 25*60*1000,
        currentCorrectTiming: 0
    }

    startClickedHandler = () => {
        const currentCorrectTiming = Date.now() + 1000;
        this.setState({
            timerState: "running",
            currentCorrectTiming: currentCorrectTiming
        })
    }

    pauseClickedHandler = () => {
        this.setState({
            timerState: "stopped"
        })
    }

    resetClickedHandler = () => {
        let duration;
        if (this.state.selectedTimerType === "Study") {
            duration = this.state.studyTime;
        } else {
            duration = this.state.breakTime;
        }
        this.setState({
            remainingTime: duration*60*1000,
            timerState: "stopped"
        })
    }

    componentDidUpdate () {
        if (this.state.timerState === "running") {
            this.timerRun();
        }
    }

    clockify = () => {
        let minutes = Math.floor(this.state.remainingTime/(1000*60));
        let seconds = Math.floor((this.state.remainingTime - minutes*(1000*60))/1000);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes+":"+seconds;
    }

    timerRun = () => {
        if (this.state.remainingTime === 0) {
            console.log("times up!")
            this.setState({
                timerState: "stopped"
            });
        }
        const delay = this.state.currentCorrectTiming - Date.now();
        setTimeout(() => {
            if (this.state.timerState === "running") {
                this.setState(prevState => ({
                    currentCorrectTiming: prevState.currentCorrectTiming + 1000,
                    remainingTime: prevState.remainingTime - 1000
                }))
            }
        }, delay)
    }

    sessionTimerIncrementHandler = (timerType) => {
        let duration;
        if (timerType === "Study") {
            duration = this.state.studyTime + 1;
            this.setState({
                studyTime: duration,
                remainingTime: duration*60*1000,
                selectedTimerType: "Study"
            })
        }
        else if (timerType === "Break") {
            duration = this.state.breakTime + 1;
            this.setState({
                breakTime: duration,
                remainingTime: duration*60*1000,
                selectedTimerType: "Break"
            })
        }
    }

    sessionTimerDecrementHandler = (timerType) => {
        let duration;
        if (timerType === "Study") {
            duration = this.state.studyTime - 1;
            this.setState({
                studyTime: duration,
                remainingTime: duration*60*1000,
                selectedTimerType: "Study"
            })
        }
        else if (timerType === "Break") {
            duration = this.state.breakTime - 1;
            this.setState({
                breakTime: duration,
                remainingTime: duration*60*1000,
                selectedTimerType: "Break"
            })
        }
    }

    render () {
        let button;
        if (this.state.timerState === "stopped") {
            button = <button 
            className={classes.button + " " + classes.play}
            onClick={this.startClickedHandler}><i className="fa fa-play"></i></button>
        } else {
            button = <button 
            className={classes.button}
            onClick={this.pauseClickedHandler}><i className="fa fa-pause"></i></button>
        }
        return (
            <div className={classes.background}>
                <p className={classes.title}>Pomodoro Clock</p>
                <div className={classes.clock}>
                    <div className={classes.display}>{this.clockify()}</div>
                    <div className={classes.controls}>
                        {button}
                        <button className={classes.button} onClick={this.resetClickedHandler}><i className="fa fa-undo"></i></button>
                    </div>
                    <TimerSettings
                    studyTime={this.state.studyTime}
                    breakTime={this.state.breakTime}
                    incrementClicked={this.sessionTimerIncrementHandler}
                    decrementClicked={this.sessionTimerDecrementHandler}
                    selectedTimerType={this.state.selectedTimerType}
                    timerState={this.state.timerState}/>
                </div>
            </div>
        );
    }
}

export default PomodoroClock;
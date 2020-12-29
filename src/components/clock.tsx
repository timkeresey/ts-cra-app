import * as React from "react";
import "./clock.css";

type Props = {
  timeZoneDifference: number,
  name: string
}

type ClockState = {
  hours: number,
  minutes: number,
  seconds: number,
  timeZoneDifference: number,
}
 export default class Clock extends React.Component<Props, ClockState> {

   interval: any;

   handleClockTick() {
       const date = new Date();
       date.setHours(date.getHours() + this.props.timeZoneDifference);
       this.setState({
           hours: date.getHours(),
           minutes: date.getMinutes(),
           seconds: date.getSeconds()
       });
   }

   // Before the component mounts, initialize the state
    componentWillMount() {
        this.handleClockTick();
    }

    // After the component did mount, set state on each 1 second tick.
    componentDidMount() {
        this.interval = setInterval(() => this.handleClockTick(), 1000);
    }

    // Once component unmount remove the timer to avoid memory leaks
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={"clock"}>
                <p>{this.props.name}</p>
                <div className={"clock-face"}>
                    <div className={"dial seconds"} style={{transform: `rotate(${this.state.seconds * 6}deg)`}} />
                    <div className={"dial minutes"} style={{transform: `rotate(${this.state.minutes * 6}deg)`}} />
                    <div className={"dial hours"} style={{transform: `rotate(${this.state.hours * 30}deg)`}} />
                </div>
            </div>
        );
    }
 }

import React from "react";
import WorkoutRoutine from "./workout_routine_container";
import Map from "./maps";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    // this.MarkerManager = undefined;
  }
  render() {
    // if (this.props.location && !this.MarkerManager) {
    //   this.MarkerManager = new MarkerManager(this.map, this.props.locations);
    // }
    return <>
        <WorkoutRoutine />
        {/* <div id="map" ref={map => this.mapNode = map}></div> */}
        <Map fetchLocations={this.props.fetchLocations} locations={this.props.locations}/>
    </>
  }
}

export default Workout;
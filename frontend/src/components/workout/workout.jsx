import React from "react";
import MarkerManager from "../../util/marker_manager";

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.MarkerManager = undefined;
  }
  componentDidMount() {
      const mapOptions = {
          center: {lat: 40.752067, lng: -73.981637},
          zoom: 13
      }

      this.map = new google.maps.Map(this.mapNode, mapOptions)
      this.props.fetchLocations();
      // this.MarkerManager = new MarkerManager(this.map, this.props.locations);
  }
  render() {
    if (this.props.location && !this.MarkerManager) {
      this.MarkerManager = new MarkerManager(this.map, this.props.locations);
    }
    return <>
        <WorkoutRoutine workouts={this.props.workouts} />
        <div id="map" ref={map => this.mapNode = map}></div>;
    </>
  }
}

export default Workout;
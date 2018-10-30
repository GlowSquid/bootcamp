import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    return (
      <div>
        <p>Boink!</p>
      </div>
    );
  }
}

export default connect(
  null,
  { getCurrentProfile }
)(dashboard);

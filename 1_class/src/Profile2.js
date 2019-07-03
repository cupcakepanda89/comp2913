// import React from 'react';
import React, { Component } from 'react';
class Profile extends Component {
    render() {
      return (
        <div>
          <img src={this.props.imageUrl} />
          <span>{this.props.name}</span>
        </div>
      );
    }
  }
  export default Profile;
  
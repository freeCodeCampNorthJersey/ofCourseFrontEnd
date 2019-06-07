import React, { Component } from 'react';
import { withTheme } from '@material-ui/core';

export default class MyCard extends Component {
  render() {
    return (
      <div
        style={{
          background: 'white',
          border: '1px solid light-grey',
          margin: '10px',
          borderRadius: '4px',
          boxShadow: '2px 2px hsl(261, 21%, 86%)',
          flexBasis: 1,
          minWidth: 300,
          padding: '5px'
        }}
      >
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Description: {this.props.description}</li>
          <li>Start Date: {this.props.startDate}</li>
          <li>End Date: {this.props.endDate}</li>
          <li>id: {this.props.id}</li>
        </ul>
      </div>
    );
  }
}

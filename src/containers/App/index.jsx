import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends Component {

  render() {
    return (
      <Grid componentClass="div" fluid={true}>
        <Row componentClass="div">
          <Col xs={12} componentClass="section">
            { this.props.children }
          </Col>
        </Row>
      </Grid>
    )
  }
}
import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react'


import MenuNavbar from '../scenes/components/MenuNavbar'
import Graphics from '../scenes/components/Graphics';

export default class App extends Component {
  render () {
    return (
      <div>
        <Grid divided='vertically'>
          <Grid.Row>
            <Grid.Column>
              <MenuNavbar/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Graphics/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  };
};


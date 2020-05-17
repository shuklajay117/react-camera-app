import React from "react";
import { Grid } from 'semantic-ui-react';

import "./style.scss";
import { navigate } from "hookrouter";

function Navigation() {

  const navigateTo = (e, to) => {
    e.preventDefault();
    navigate(to);
  }

  return (<div className="nav-wrapper">
    <Grid>
      <Grid.Row>
        <Grid.Column className="header">
          <Grid container>
            <Grid.Row>
              <Grid.Column>
                <nav>
                  <a onClick={(event) => navigateTo(event, '/')} href="/">Find GCD</a>
                  <a onClick={(event) => navigateTo(event, '/captureimg')} href="/">Camera Capture</a>
                  <a onClick={(event) => navigateTo(event, '/primenum')} href="/">Find N<sup>th</sup> Prime Number</a>
                </nav>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div >)
}

export default Navigation

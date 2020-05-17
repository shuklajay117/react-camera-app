import React, { useState } from "react";
import { Grid } from 'semantic-ui-react';
import "./style.scss";

export default function Gcd() {

  const [state, setState] = useState({ numbers: '', result: null});
  const formRef = React.createRef();

  const calculateGCD = () => {
    const getGCD = (firstNum, secNum) => {
      let temp;
      console.log('fi', firstNum, 'se', secNum);
      if (typeof firstNum !== 'number' || typeof secNum !== 'number' || isNaN(firstNum) || isNaN(secNum)) {
        return false;
      }

      firstNum = Math.abs(firstNum);
      secNum = Math.abs(secNum);
      
      while(secNum) {
        temp = secNum;
        secNum = firstNum % secNum;
        firstNum = temp;
      }

      return firstNum;
    };
    let f,s,totalNumbers, allNumbers;

    allNumbers = state.numbers.split(',') || [];
    totalNumbers = allNumbers.length;

    if ( !totalNumbers ) {
      setState({...state, result: 'Invalid Input'});
      return null;
    }

    f = parseInt(allNumbers[ 0 ]);
    for ( let i = 1; i < totalNumbers; i++ ) {
      s = parseInt(allNumbers[ i ]);
      f = getGCD( f, s );

      if (f === false) {
        setState({...state, result: `Invalid Input`});
        return;    
      }
    }

    setState({...state, result: `GCD : ${f}`});
  };

  const handleChange = (e) => {
    setState({result: null, numbers: e.target.value});
  };

  return (<div className="home-wrapper">
    <Grid container
      spacing={0}
      centered={true}
      verticalAlign="middle"
      justify="center"
      style={{ minHeight: "100vh" }}>
      <Grid.Row>
        <Grid.Column width={12}>
          <div className="ui form gcm-container">
            <form ref={formRef}>
              <h4 className="gcm-header">Find GCD</h4>
              <input type="text" onChange={handleChange} value={state.numbers} placeholder="Enter list of numbers to find its GCD" id="num" />
              <span className="sample-input">Example: 15,23,45,77</span>
              <button type="button" onClick={calculateGCD} name="submit" className="ui button">Calculate</button>
            </form>
            { state.result && <div className="result" >
                <h1>{state.result}</h1>
              </div> }

          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>)
}
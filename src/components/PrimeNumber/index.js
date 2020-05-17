import React, { useState } from "react";
import { Grid } from 'semantic-ui-react'

import "./style.scss";

export default function PrimeNumber() {
  const [state, setState] = useState({ num: '', result: null, cache: []});
  const cache = [];
  
  const handleChange = (e) => {
    setState({...state, result: null, num: e.target.value});
  };
  
  const getNthPrimeNumber = () => {
    const getNextPrimeNumber = (startValue) => {
      let num, isPrime;
      for (num = startValue+1; num <= Number.MAX_VALUE; num++) {
        isPrime = true;
        for (let i = 2; i <= num; i++) {
          if (num % i === 0 && i !== num) {
            isPrime = false;
          }
        }
        if (isPrime === true) {
           break;
        }
      }
      
      return num;
    };
    let isPrimeAvailableInCache = state.num <= state.cache.length;
    let primeNumber = isPrimeAvailableInCache ? state.cache[state.num-1] : (state.cache.length ? state.cache[state.cache.length-1] : 1);

    if (!isPrimeAvailableInCache) {
      for (let count=state.cache.length; count<state.num; count++) {
        setTimeout(() => {
          primeNumber = getNextPrimeNumber(primeNumber);
          cache.push(primeNumber);
          setState({...state, result: primeNumber, cache: [...state.cache, ...cache]});
        });
      }
    }
    
    setState({...state, result: primeNumber});

  }

  return (<div className="home-wrapper">
    <Grid container
      spacing={0}
      centered={true}
      verticalAlign="middle"
      justify="center"
      style={{ minHeight: "calc(100vh - 49px)" }}>
      <Grid.Row>
        <Grid.Column width={12}>
          <div className="ui form prime-container">
            <h4 className="task-label">Get N<sup>th</sup> Prime Number</h4>
            <input type="number" onChange={handleChange} value={state.num} placeholder="Enter number" id="num" />
            <button type="button" onClick={getNthPrimeNumber} name="submit" className="ui button">Calculate</button>
            
            { state.result && <div className="result" >
                <h1>{state.result}</h1>
              </div> }
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>)
}

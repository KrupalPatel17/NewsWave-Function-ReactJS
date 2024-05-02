import React, { Component } from 'react'
import load from './load.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={load} alt="" />
      </div>
    )
  }
}

export default Spinner

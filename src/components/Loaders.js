// import React, { Component } from 'react'
import React from 'react'
import './Loader.css'

export class Loaders extends React.Component {
    render() {
        return (
            <div>
                <center>
                    <div className="loader mt-5 pt-5 mb-5 pb-5 my-5">
                        <div className="loader-inner">
                            <div className="loader-block"></div>
                            <div className="loader-block"></div>
                            <div className="loader-block"></div>
                            <div className="loader-block"></div>
                            <div className="loader-block"></div>
                            <div className="loader-block"></div>
                            <div className="loader-block"></div>
                            <div className="loader-block"></div>
                        </div>
                    </div>

                </center>
            </div>
        )
    }
}

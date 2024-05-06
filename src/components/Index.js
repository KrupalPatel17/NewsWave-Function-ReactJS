import React from 'react'
import './index.css'

export default function Index() {
    return (
        <div>
            <video autoplay muted loop id="myVideo">
                <source src="earth.mp4" type="video/mp4" />
            </video>

            <div class="content">
                <h1>Heading</h1>
                <p>Lorem ipsum...</p>
                <button id="myBtn" onclick="myFunction()">Pause</button>
            </div>

        </div>
    )
}

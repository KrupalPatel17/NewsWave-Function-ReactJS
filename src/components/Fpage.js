import React from 'react'
import './Fpage.css'
import { Link } from 'react-router-dom';
export default function Index() {


    return (
        // <div className="video-background">
        //     {/* Add loop attribute here */}
        //     <video className="video" src="/earth.mp4" type="video/mp4" autoPlay loop muted />

        //     <div className="video-content">
        //         <h1>Catch the Wave of Information!</h1>
        //         <Link to="/general">
        //             <button>Read News</button>
        //         </Link>
        //     </div>
        // </div>
        <>
        <div className="video-background">
                <video className="video" src="/earth.mp4" type="video/mp4" autoPlay loop muted />
                <div className="video-content">
                 <h1>Catch the Wave of Information!</h1>
                 <Link to="/general">
                     <button className="fbtn">Read News</button>
                 </Link>
             </div>
             </div>

        </>
    )
}

import React from "react";
import { useLaunch } from "../hooks/useLaunch";
import {useParams} from 'react-router';
import {Link} from 'react-router-dom'


import './MissionList.css';


export default function Launch(){
    const {id} =useParams()
    const {data,loading,error}=useLaunch(id)
    if(loading){
        return <h1 className="loader">Loading Spinner</h1>;
    }
    if(error){
        return <h1 className="loader">Error Occured</h1>;
    }
    if(data){
        let launch=data?.launch;
            return <div className="card" key={launch?.id}>
                <div className="left">
                <div className="head">
                    <h2 className="title">Mission Name: {launch.mission_name}</h2>
                    <h3 className="info">Year: {launch.launch_year} & Mission got {launch?.launch_success?<span className="msuccess">Success</span>:<span className="mfail">Failure</span>}</h3>
                </div>
                <div className="foot">
                    <h4 className="details-title">Summary</h4>
                    <p className="details">{launch.details}</p>
                </div>
                <Link to="/"><p style={{textAlign:"right"}}>{`<<`} Back</p></Link>
                </div>
                <div className="right">
                       <div className="foot-img">
                            <img src={launch?.links?.flickr_images[0]} alt={"spacex-images"}/>
                        </div>
                </div>
            </div>
        
    }
}
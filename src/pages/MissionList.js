import React from "react";
import { useMissions } from "../hooks/useMission";
import {Link} from 'react-router-dom'



import './MissionList.css';


export default function MissionList(){
    
    const {data,loading,error}=useMissions()
    if(loading){
        return <h1 className="loader">Loading Spinner</h1>;
    }
    if(error){
        return <h1 className="loader">Error Occured</h1>;
    }
    if(data){
        return data?.launches.map((launch,index)=>{
            return <div className="card" key={index}>
                <div className="left">
                <div className="head">
                    <Link to={`/${launch.id}`}><h2 className="title">Mission Name: {launch.mission_name}</h2></Link>
                    <h3 className="info">Year: {launch.launch_year} & Mission got {launch?.launch_success?<span className="msuccess">Success</span>:<span className="mfail">Failure</span>}</h3>
                </div>
                <div className="foot">
                    <h4 className="details-title">Summary</h4>
                    <p className="details">{launch.details}</p>
                </div>
                </div>
                <div className="right">
                       <div className="foot-img">
                            <img src={launch?.links?.flickr_images[0]} alt={"spacex-images"}/>
                        </div>
                </div>
            </div>
        })
    }
}
import React from 'react'

function WhetherCard({data}) {

    const {name}=data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    const iconSrc="https://openweathermap.org/img/wn/"+icon+".png";

    return (
        <div className='newscard-grid'>
            <div className='card w-card'>
                <div className="w-title">
                    Weather in {name||"Unknown"}
                </div>
                <div className="w-innercardgrid">
                    <div className="w-degree">
                    {temp||0} °C
                    </div>
                    <div className="w-info" >
                        <div><img src={iconSrc} alt='icon' /></div>
                        <div>{description}</div>
                    </div>
                </div>
                <div className="w-humidity">
                    Humidity : {humidity}%
                </div>
                <div className="w-wspeed">
                    Wind Speed : {speed} km/h
                </div>
            </div>
        </div>
    )
}

export default WhetherCard


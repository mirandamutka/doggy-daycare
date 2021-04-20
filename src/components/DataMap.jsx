import { useState, useEffect } from "react";
import './DataMap.css'

const DataMap = () => {

    let dogsData = JSON.parse(localStorage.getItem('dogs'));

    if (dogsData != null) {
        return (
            dogsData.map((data, key) => {
                return (
                    <div className="dogEntry" key={key}>
                        <img className="dogPortrait" src={data.img} />
                        <div className="sectionRow">
                            <img src={data.present ? 'online.png' : 'offline.png'} className="presentImg" />
                            <p>{data.name}</p>  
                        </div>               
                        <p>{data.sex === "female" ? '♀' : '♂'} {data.breed}, {data.age}</p>
                        <p></p>
                    </div>
                )
            })
        )
    } else {
        return (
            <p>No data</p>
        )
    }

}

export default DataMap;
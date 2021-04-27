import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import GetDogs from './GetDogs';
import './DogList.css'

const DogList = ({dogsData}) => {

    useEffect(() => {
        GetDogs();            
}, []);

    const history = useHistory();
    const selectedDog = (selectedDog) => {
        history.push(`/dog/${selectedDog.name}`, 
        {
            params: selectedDog
        })
    }
    if (dogsData != null) {
        return (

                dogsData.map((data, key) => {
                    return (
                            <div className="dogEntry" key={key}>
                                <img className={data.present ? "dogPortrait dogPortraitPresent" : "dogPortrait"} src={data.img} alt={data.name} onClick={() => selectedDog(data)} />
                                <div className="sectionText">
                                    <p>{data.sex === "female" ? '♀' : '♂'} {data.name}</p>
                                </div>
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

export default DogList;
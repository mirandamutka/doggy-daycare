import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import GetDogs from './GetDogs';
import './DogList.css'

const DogList = ({dogsData}) => {

    useEffect(() => {
        GetDogs();            
}, []);

    const [dog, setDog] = useState([]);
    const [ready, setReady] = useState(false)
    const history = useHistory();
    

    function selectDog(data) {
        setDog({
            img: data.img,
            name: data.name,
            chipNumber: data.chipNumber,
            sex: data.sex,
            age: data.age,
            breed: data.breed,
            ownerName: data.owner.name,
            ownerLastName: data.owner.lastName,
            ownerPhoneNumber: data.owner.phoneNumber
        })
        setReady(true)
    }

    
    if (ready) {
        localStorage.setItem('selectedDog', JSON.stringify(dog));
        history.push('/currentDog')
    } else {
        console.log('no data')
    }


    if (dogsData != null) {
        return (
                dogsData.map((data, key) => {
                    return (
                            <div className="dogEntry" key={key}>
                              <img className={data.present ? "dogPortrait dogPortraitPresent" : "dogPortrait"} src={data.img} alt={data.name} onClick={() => selectDog(data)} />
                                <div className="sectionText">
                                    <p>{data.sex === "female" ? '♀' : '♂'} {data.name}</p>
                                </div>
                        </div>
                        
                    )
                })
        )
    } else {
        return (
            <p>No data, please refresh</p>
        )
    }

}

export default DogList;
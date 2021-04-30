import { useState } from "react";
import { useHistory } from 'react-router-dom';

import './DogList.css'

const DogList = (loaded) => {

    const [dog, setDog] = useState([]);
    const [ready, setReady] = useState(false)
    const history = useHistory();

    let dogsDataUnparsed = localStorage.getItem('dogs')
    let dogsData = JSON.parse(dogsDataUnparsed);

    console.log('loaded: ' + loaded);
    console.log('dogsData: ' + dogsData);

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
        history.push('/currentDog');
    } else {
        console.log('No dog selected');
    }

    return (
        loaded && dogsData ? (
            dogsData.map((data, key) => {
                return (
                    <div className="dogEntry" key={key}>
                        <img src={data.img} alt={data.name} className={data.present ? "dogPortrait dogPortraitPresent" : "dogPortrait"} onClick={() => selectDog(data)} />
                        <div className="sectionText">
                            <p>{data.sex === "female" ? '♀' : '♂'} {data.name}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p>Loading...</p>
        )
    )}

export default DogList;
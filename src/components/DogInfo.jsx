import Registry from './Registry'; 
import React, {useState, useEffect} from 'react';

const DogInfo = () => {
    const [name, setName] = useState(null);
    const [sex, setSex] = useState(null);
    const [breed, setBreed] = useState(null);
    const [age, setAge] = useState(null);
    const [owner, setOwner] = useState(null);
    useEffect(() => {
        let dogsData = JSON.parse(localStorage.getItem('dogs'));
        setName(dogsData[2].name)
        setSex(dogsData[2].sex)
        setBreed(dogsData[2].breed)
        setAge(dogsData[2].age)
        setOwner(dogsData[2].owner.name + " " + dogsData[2].owner.lastName)

    }, []);
    
    return (
        <div>
            <p>{name}</p>
            <p>{sex}</p>
            <p>{breed}</p>
            <p>{age}</p>
            <p>{owner}</p>
        </div>
    )
}

export default DogInfo;
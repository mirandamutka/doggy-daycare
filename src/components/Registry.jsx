import React, {useEffect} from 'react';
import DogList from './DogList';
import GetDogs from './GetDogs';
import './Registry.css';

const Registry = () => {
   
    useEffect(() => {
            GetDogs();            
    }, []);

    
    return (
            <div className="container">
                <main>
                    <DogList />
                </main>
            </div>
    )
}

export default Registry;
import React, {useEffect} from 'react';
import DataMap from './DataMap';
import GetDogs from './GetDogs';

const Registry = () => {
   
    useEffect(() => {
            GetDogs();            
    }, []);

    
    return (
            <div>
                <p>Dog Info</p>
                <DataMap />
            </div>
    )
}

export default Registry;
import React, {useState, useEffect} from 'react';

const Registry = () => {
    const [name, setName] = useState(null);
    useEffect(() => {
        async function getDogs() {
        
            let url = `https://api.jsonbin.io/b/607eb78124143e5df089bc47`
        
            try {
                let resp = await fetch(url);
                let data = await resp.json();
                setName(data[0].name)
                console.log(data)
        
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
        return () => {
            getDogs();
            
        }
    }, []);

    
    return (
        <div>
            <p>Dog Info</p>
            <p>{name}</p>
        </div>

    )
}

export default Registry;
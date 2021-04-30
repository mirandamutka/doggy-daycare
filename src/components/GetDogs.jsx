const GetDogs = async (setLoaded) => {
        
    let url = `https://api.jsonbin.io/b/607ef0f6f099765deef87a67`

    fetch(url)
    .then (async response => {
        const data = await response.json()
        console.log('getDogs: ' + data);
        localStorage.setItem('dogs', JSON.stringify(data));
        setLoaded();
    })
    .catch (error => {
        console.log(error);
    })
}

export default GetDogs;
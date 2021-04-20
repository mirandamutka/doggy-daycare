const GetDogs = async () => {
        
    let url = `https://api.jsonbin.io/b/607ef0f6f099765deef87a67`

    try {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data)
        localStorage.setItem('dogs', JSON.stringify(data));

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export default GetDogs;
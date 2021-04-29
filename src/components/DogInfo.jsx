import './DogInfo.css'

const DogInfo = () => {

    let selectedDogData = JSON.parse(localStorage.getItem('selectedDog'));
    
    console.log("Current dog:" + selectedDogData);
    
    
    if (selectedDogData != null) {
    return (
        <div className="dogContainer">
            <section>
                <img src={selectedDogData.img} alt={selectedDogData.name} className="dogImg" />
            </section>
            <section className="sectionInfo">
                <section className="infoHeader">
                    <h3>{selectedDogData.sex === "female" ? '♀' : '♂'} {selectedDogData.name}</h3>
                    <div>#{selectedDogData.chipNumber}</div>
                </section>
                <div className="seperator"></div>
                <section className="sectionDetails">
                    <section>  
                        <div>Age: {selectedDogData.age}</div>
                        <div>Breed: {selectedDogData.breed}</div>   
                    </section>
                    <section>
                        <div>Owner:</div>
                        <div>{selectedDogData.ownerName} {selectedDogData.ownerLastName}</div>
                        <div>{selectedDogData.ownerPhoneNumber}</div>   
                    </section>
                </section>
            </section>  
        </div>
    )
    } else {
        return (
            <p>No data found.</p>
        )
    }
}

export default DogInfo;
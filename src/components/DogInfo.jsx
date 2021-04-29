import './DogInfo.css'

const DogInfo = () => {

    let selectedDogData = JSON.parse(localStorage.getItem('selectedDog'));
    
    console.log("Current dog:" + selectedDogData);
    
    
    if (selectedDogData != null) {
    return (
        <div className="dogContainer">
            <section className="sectionImg">
                <img src={selectedDogData.img} alt={selectedDogData.name} className="dogImg" />
                <section className="chipNumber">
                    <h4>#{selectedDogData.chipNumber}</h4>
                </section>
            </section>
            <section className="sectionInfo">
                <section className="dogInfo">
                    <h3>{selectedDogData.sex === "female" ? '♀' : '♂'} {selectedDogData.name}</h3>
                    <div>Age: {selectedDogData.age}</div>
                    <div>Breed: {selectedDogData.breed}</div>  
                </section>    
                <section className="ownerInfo">       
                    <h4>Owner:</h4>
                    <div>{selectedDogData.ownerName} {selectedDogData.ownerLastName}</div>
                    <div>{selectedDogData.ownerPhoneNumber}</div>  
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
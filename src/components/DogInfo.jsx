import { useLocation } from "react-router-dom";
import './DogInfo.css'

const DogInfo = () => {

    const location = useLocation();
    if (location.state) {
        const dogSelected = location.state.params;
    
        console.log(dogSelected);
        
        if (dogSelected != null) {
        return (
            <div className="dogContainer">
                <section className="sectionImg">
                    <img src={dogSelected.img} alt={dogSelected.name} className="dogImg" />
                    <section className="chipNumber">
                        <h4>#{dogSelected.chipNumber}</h4>
                    </section>
                </section>
                <section className="sectionInfo">
                    <section className="dogInfo">
                        <h3>{dogSelected.sex === "female" ? '♀' : '♂'} {dogSelected.name}</h3>
                        <div>Age: {dogSelected.age}</div>
                        <div>Breed: {dogSelected.breed}</div>  
                    </section>    
                    <section className="ownerInfo">       
                        <h4>Owner:</h4>
                        <div>{dogSelected.owner.name} {dogSelected.owner.lastName}</div>
                        <div>{dogSelected.owner.phoneNumber}</div>
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
    else {
        return (
            <p>No data found, please navigate to page from doglist.</p>
        )
    }
}

export default DogInfo;
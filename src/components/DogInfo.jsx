import { useLocation } from "react-router-dom";

const DogInfo = () => {

    const location = useLocation();
    const dogSelected = location.state.params;
    console.log(dogSelected);
    
    return (
        <div>
            <img src={dogSelected.img} alt={dogSelected.name} />
            <p>{dogSelected.name}</p>
            <p>{dogSelected.sex}</p>
            <p>{dogSelected.age}</p>
            <p>{dogSelected.breed}</p>
            <p>{dogSelected.chipNumber}</p>
            <p>{dogSelected.owner.name} {dogSelected.owner.lastName}</p>
            <p>{dogSelected.owner.phoneNumber}</p>
        </div>
    )
}

export default DogInfo;
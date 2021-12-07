import { styles } from "../../../HomePage/styles/styles";
import FacilitiesTable from "./FacilitiesTable";
import FacilityCreation from "./FacilityCreation";

const FacilitiesDataArea = ({facilities, setFacilities}) => {
    return(
        <div>
            <div className='facilitiesTable' style={styles.HotelCreationFacilityTable}>
                <FacilitiesTable facilities={facilities} setFacilities={setFacilities}/>

            </div>
            <div style={styles.FacilityCreation}>
                <FacilityCreation facilities={facilities} setFacilities={setFacilities} />
            </div>
        </div>
    )
}

export default FacilitiesDataArea;
import FacilitiesTable from "./FacilitiesTable";
import FacilityCreation from "./FacilityCreation";

const FacilitiesDataArea = ({facilities, setFacilities}) => {
    return(
        <div>
            <div style={{width: 400}}>
                <FacilitiesTable facilities={facilities} setFacilities={setFacilities}/>

            </div>
            <div style={{ float: 'right', width: 900, height: 500, marginTop:150}}>
                <FacilityCreation facilities={facilities} setFacilities={setFacilities} />
            </div>
        </div>
    )
}

export default FacilitiesDataArea;
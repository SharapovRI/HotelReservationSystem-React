import { useEffect, useState } from "react";
import getHotelFacilities from "../../../api/apiRequests/getHotelFacilities";
import FacilitiesList from "./FacilitiesList";



const FacilitiesArea = ( { hotelId, facilities, setFacilities } ) => {

    useEffect(() => {
        async function fetchFacilities() {

            const data = await getHotelFacilities(hotelId, {
                index: 0,
                size: 200
            });

            setFacilities(data);
        }

        fetchFacilities();

    }, [hotelId])

    return(
        <div>
            <FacilitiesList facilities={facilities} setFacilities={setFacilities}/>
        </div>
    )

}

export default FacilitiesArea;
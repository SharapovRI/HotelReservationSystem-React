import { useEffect, useState } from "react";
import getHotelFacilities from "../../api/apiRequests/getHotelFacilities";
import CostSlider from "./CostSlider";
import FacilitiesList from "./FacilitiesList";


const FacilitiesArea = ( { hotelId } ) => {
    const [minCost, setMinCost] = useState(0);
    const [maxCost, setMaxCost] = useState(9999);
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            async function fetchFacilities() {

                const data = await getHotelFacilities(hotelId, {
                    minCost: minCost,
                    maxCost: maxCost,
                    index: 0,
                    size: 200
                });

                setFacilities(data);
            }

            fetchFacilities();
        }, 1000);

        return () => clearTimeout(timer1);
    }, [minCost, maxCost])

    return(
        <div>
            <FacilitiesList facilities={facilities} />
            <CostSlider minCost={minCost} setMinCost={setMinCost} maxCost={maxCost} setMaxCost={setMaxCost} setTimeout={setTimeout}/>
        </div>
    )

}

export default FacilitiesArea;
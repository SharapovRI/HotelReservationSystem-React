import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce/lib";
import getHotelFacilities from "../../api/apiRequests/getHotelFacilities";
import CostSlider from "./CostSlider";
import FacilitiesList from "./FacilitiesList";

const FacilitiesArea = ({ hotelId }) => {
    const [minCost, setMinCost] = useState(0);
    const [maxCost, setMaxCost] = useState(9999);
    const [facilities, setFacilities] = useState([]);

    const [debouncedMinCost] = useDebounce(minCost, 500);
    const [debouncedMaxCost] = useDebounce(maxCost, 500);

    useEffect(() => {
        async function fetchFacilities() {

            const data = await getHotelFacilities(hotelId, {
                minCost: debouncedMinCost,
                maxCost: debouncedMaxCost,
                index: 0,
                size: 200
            });

            setFacilities(data);
        }

        fetchFacilities();

    }, [debouncedMinCost, debouncedMaxCost])

    return (
        <>
            <div className='facilitiesList'>
                <FacilitiesList facilities={facilities} />
            </div>
            <div className='costSlider'>
                <CostSlider minCost={minCost} setMinCost={setMinCost} maxCost={maxCost} setMaxCost={setMaxCost} setTimeout={setTimeout} />
            </div>
        </>
    )

}

export default FacilitiesArea;
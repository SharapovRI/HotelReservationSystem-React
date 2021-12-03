import { useEffect, useState } from "react";
import RadioTime from "./RadioTime";
import { useSelector } from "react-redux";
import { getId } from "../../services/TokenService/getId";
import ComboBox from "../Shared/ComboBox/ComboBox";


const OrderFilterArea = ( { setFilter } ) => {
    const token = useSelector((state) => state.jwtReducer?.token);
    const [userId, setUserId] = useState();
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [time, setTime] = useState(true);

    useEffect(() => {
        const id = getId(token);
        const filter = {
            userId:id,
            cityId:city,
            whichTime:time,
            size:1,
        }
        setUserId(id);
        setFilter(filter);
    }, [city, time]);

    return (
        <>
            <ComboBox className='cbLocates' option={city}
                setOption={(newValue) => setCity(newValue)}
                setCountry={(newValue => setCountry(newValue))}
                boxText={(option) => (option.country) + ', ' + option.city}
                getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                labelText='Locates'
            />
            <RadioTime time={time} setTime={setTime} />
        </>
    )
}

export default OrderFilterArea;
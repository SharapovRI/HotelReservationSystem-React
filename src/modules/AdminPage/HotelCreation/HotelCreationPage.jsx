import { useState } from "react";
import HotelDataArea from "./HotelDataArea";
import RoomDataArea from "./RoomDataArea/RoomDataArea";

const HotelCreationPage = () => {


    return (
        <>
            <div>
                <HotelDataArea />
            </div>
            <br />
                <RoomDataArea />
        </>
    )
}

export default HotelCreationPage;
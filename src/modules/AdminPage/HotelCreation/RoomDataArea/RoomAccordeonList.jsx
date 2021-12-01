import RoomAccordeonListItems from "./RoomAccordeonListItems";
import Stack from '@mui/material/Stack';
import { useEffect } from "react";

const RoomAccordeonList = ({ rooms }) => {
    return (
        <>
            <Stack spacing={2}>
                <RoomAccordeonListItems content={rooms} />
            </Stack>
        </>
    )
}

export default RoomAccordeonList;
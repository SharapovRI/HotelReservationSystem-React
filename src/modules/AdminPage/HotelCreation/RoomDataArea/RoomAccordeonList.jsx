import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

const RoomAccordeonList = ({ content, createdRooms, setCreatedRooms, removeRoomType }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Array.from(content));
    }, [content])

    const listItems = data.map((content, index) =>
        <AccordionItem content={content} index={index} createdRooms={createdRooms} setCreatedRooms={setCreatedRooms} removeRoomType={removeRoomType}/>
    );

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default RoomAccordeonList;
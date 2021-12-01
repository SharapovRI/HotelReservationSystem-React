import { useState } from "react"
import AddPhotoItem from "./AddPhotoItem";
import PhotoListItem from "./PhotoListItem";
import './ul_style.css'

const PhotoList = () => {
    const [itemSource, setItemSource] = useState([]);

    const listItems = () => {
        const list = [];
        if (itemSource.length > 0) {
            itemSource.map((item, index) =>
                list.push(
                    <PhotoListItem item={item} index={index} removePhoto={removePhoto} />
                )
            );
        }
        list.push(
            <AddPhotoItem itemSource={itemSource} setItemSource={setItemSource} />
        );

        return list;
    }

    function removePhoto(index) {
        const newSource = Array.from(itemSource);
        newSource.splice(index, 1);
        setItemSource(newSource);
    }

    return (
        <div>
            <ul className="images">{listItems()}</ul>
        </div>
    )
}

export default PhotoList;
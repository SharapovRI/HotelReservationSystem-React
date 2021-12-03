import { useState } from "react"
import AddPhotoItem from "./AddPhotoItem";
import PhotoListItem from "./PhotoListItem";
import './ul_style.css'

const PhotoList = ( { photos, setPhotos } ) => {

    const listItems = () => {
        const list = [];
        if (photos.length > 0) {
            photos.map((item, index) =>
                list.push(
                    <PhotoListItem item={item} index={index} removePhoto={removePhoto} />
                )
            );
        }
        list.push(
            <AddPhotoItem itemSource={photos} setItemSource={setPhotos} />
        );

        return list;
    }

    function removePhoto(index) {
        const newSource = Array.from(photos);
        newSource.splice(index, 1);
        setPhotos(newSource);
    }

    return (
        <div>
            <ul className="images">{listItems()}</ul>
        </div>
    )
}

export default PhotoList;
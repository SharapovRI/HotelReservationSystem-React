import React, { useState } from "react";

const AddPhotoItem = ({ itemSource, setItemSource }) => {
    const [image, setImage] = useState(null);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(img);

            reader.onload = () => {
                const url = reader.result;
                setImage(url);
                setItemSource([...itemSource, url]);
            }
        }
    };

    return (
        <li>
            <img src={image}/>
            <input type="file" name="myImage" onChange={onImageChange} />
        </li>
    );

}
export default AddPhotoItem;
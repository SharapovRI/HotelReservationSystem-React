import React, { useState } from "react";
import './AddPhotoItem.scss';

const AddPhotoItem = ({ itemSource, setItemSource }) => {

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(img);

            reader.onload = () => {
                const url = reader.result.toString();

                const from = url.indexOf(':');
                const to = url.indexOf(';');
                const extension = url.substring(from + 1, to);

                const base64Index = url.indexOf(';base64,') + ';base64,'.length;
                const data = url.substring(base64Index);

                const name = img.name;

                const photo = {
                    title: name,
                    data: data,
                    extension: extension,
                }
                setItemSource([...itemSource, photo]);
            }
        }
    };

    return (
        <li className='attach'>
            {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

            <div class="example-1">
                <div class="form-group">
                    <label class="label">
                        <i class="material-icons">attach_file</i>
                        <span class="title">Добавить файл</span>
                        <input type="file" name="myImage" onChange={onImageChange}/>
                    </label>
                </div>
            </div> */}
            <input type="file" name="myImage" onChange={onImageChange} />
        </li>
    );

}
export default AddPhotoItem;
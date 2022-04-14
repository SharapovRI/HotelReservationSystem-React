import './AddPhotoItem.scss';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';


const AddPhotoItem = ({ photos, setPhotos }) => {

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
                setPhotos([...photos, photo]);
            }
        }
    };

    function inputCreate() {
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = onImageChange;
        input.click();
    }

    return (
        <>
            <div onClick={inputCreate} className='add_photo_item'>
                Add photo
            </div>
        </>
    )
}

export default AddPhotoItem;
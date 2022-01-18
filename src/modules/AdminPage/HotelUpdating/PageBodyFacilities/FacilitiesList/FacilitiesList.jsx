import FacilitiesListItem from './FacilitiesListItem/FacilitiesListItem';
import './FacilitiesList.scss';

const FacilitiesList = ({ facilitiesList, setFacilitiesList }) => {
    const listItems = () => {
        const list = [];
        console.log(facilitiesList);
        if (facilitiesList.length > 0) {
            facilitiesList.map((item, index) =>
                list.push(
                    <FacilitiesListItem item={item} index={index} removeRoomType={removeRoomType} facilities={facilitiesList} setFacilities={setFacilitiesList}/>
                )
            );
        }

        return list;
    }

    function removeRoomType(index) {
        const newSource = Array.from(facilitiesList);
        newSource.splice(index, 1);
        setFacilitiesList(newSource);
    }

    return (
        <div>
            <ul className="facilities">{listItems()}</ul>
        </div>
    )
}

export default FacilitiesList;
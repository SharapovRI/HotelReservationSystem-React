import './SelectedFacilitiesList.scss';

const SelectedFacilitiesList = ({ selectedFacilities }) => {
    function getList() {
        const facilitiesList = [];

        if (selectedFacilities.length > 0) {
            selectedFacilities.map((item, index) =>
                facilitiesList.push(
                    <div className="sfl_item">
                        <span>
                            {item.name}
                        </span>
                    </div>
                )
            );
        }

        return facilitiesList;
    }
    return (
        <div className="selected_failities_list">
            {getList()}
        </div>
    )
}

export default SelectedFacilitiesList;
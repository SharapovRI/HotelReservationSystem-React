import TextField from '@mui/material/TextField';
import './FacilityInfoArea.scss'

const FacilityInfoArea = ({ facilityName, setTypeName, cost, setCost }) => {

    const onNameChange = (event) => {
        setTypeName(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    return (
        <div className='facilityInfoArea'>
            <div className='facilityInfoItem'>
                <h3>Facility creation</h3>
            </div>
            <div className='facilityInfoItem'>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={facilityName}
                    value={facilityName}
                    onInput={onNameChange}
                    label="Facility name"
                    variant="outlined"
                />
            </div>
            <div className='facilityInfoItem'>
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={cost}
                    value={cost}
                    onInput={onCostChange}
                    label="Cost"
                    variant="outlined"
                    min={1}
                />
            </div>
        </div>
    )
}

export default FacilityInfoArea;
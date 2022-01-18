import './PageBodyFacilities.scss';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import FacilitiesButtons from './FacilitiesButtons/FacilitiesButtons';
import FacilitiesList from './FacilitiesList/FacilitiesList';

const PageBodyFacilities = ({ facilities, setFacilities, step, setStep }) => {
    return (
        <Box className='header' sx={
            {
                width: 'auto',
                height: '90%',
                border: '1px solid grey',
                borderRadius: '20px',
                borderWidth: '5px',
                padding: '15px',
                margin: '15px',
            }}>
            <div className='pageBody'>
                <FacilitiesButtons facilities={facilities} setFacilities={setFacilities}/>
                <FacilitiesList facilitiesList={facilities} setFacilitiesList={setFacilities}/>
                <div className='facilityCreationButtons'>
                    <div className='cancelButtonDiv'>
                        <button onClick={() => setStep(step - 1)}>Cancel</button>
                    </div>
                    <div className='nextButtonDiv'>
                        <button onClick={() => setStep(step + 1)}>Next step</button>
                    </div>
                </div>
            </div>
        </Box >
    )
}

export default PageBodyFacilities;
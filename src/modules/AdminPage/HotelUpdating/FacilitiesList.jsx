import React, { useState, useEffect } from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import {getFacilityListColumns} from './getFacilityListColumns';
import { convertingToDataGridData } from './convertingToDataGridData';
import ActionFacilityButton from './Buttons/ActionFacilityButton';

const FacilitiesList = ({ facilities, setFacilities }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        { facilities && convertingToDataGridData(facilities, setData) }
    }, [facilities])

    function removeFacility(index) {
        const newSource = Array.from(facilities);
        const arrayIndex = newSource.findIndex((item) => item.id === index);
        newSource.splice(arrayIndex, 1);
        setFacilities(newSource);
    }

    function updateFacility(facility) {
        console.log(facility);
        const newSource = Array.from(facilities);
        const index = newSource.findIndex((item) => item.id === facility.id);
        newSource[index] = facility;
        setFacilities(newSource);
    }

    function addFacility(facility) {
        if(facility.id === undefined){
            facility.id = facilities.length * -1;
        }
        const newSource = Array.from(facilities);
        newSource.push(facility);
        setFacilities(newSource);
    }

    const columns = getFacilityListColumns(updateFacility, removeFacility);

    return (
        <div style={{ height: 520, width: 630 }}>
            <DataGridPro
                columns={columns}
                rows={data}
                rowHeght={38}
            />
            <ActionFacilityButton actionFacility={addFacility} buttonName='Add'/>
        </div>
    );
}

export default FacilitiesList;
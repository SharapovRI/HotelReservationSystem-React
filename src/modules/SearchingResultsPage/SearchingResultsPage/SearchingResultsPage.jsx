import { useState } from 'react';
import Mape from '../Map/Map/Mape';
import SearchedHotels from '../SearchedHotels/SearchedHotels/SearchedHotels';
import SearchingArea from '../SearchingArea/SearchingArea/SearchingArea';
import SimpleMap from '../SearchingResultsMap/SearchingResultsMap/SearchingResultsMap';
import FuncMap from '../FuncMap/FuncMap/FuncMap'
import './SearchingResultsPage.scss'

const SearchingResultsPage = () => {
    const [filter, setFilter] = useState(null);

    return(
        <div className='searchingResultsContainer'>
            <div className='searchingResultsArea'>
                <SearchingArea setFilter={setFilter} />
                {/* <SimpleMap /> */}
                {/* <Mape /> */}
                {/* <FuncMap /> */}
            </div>
            <div className='searchedResultsArea'>
                <SearchedHotels filter={filter}/>
            </div>
        </div>
    )
}

export default SearchingResultsPage;
import { useState } from 'react';
import SearchedHotels from '../SearchedHotels/SearchedHotels/SearchedHotels';
import SearchingArea from '../SearchingArea/SearchingArea/SearchingArea';
import './SearchingResultsPage.scss'

const SearchingResultsPage = () => {
    const [filter, setFilter] = useState(null);

    return(
        <div className='searchingResultsContainer'>
            <div className='searchingResultsArea'>
                <SearchingArea setFilter={setFilter} />
            </div>
            <div className='searchedResultsArea'>
                <SearchedHotels filter={filter}/>
            </div>
        </div>
    )
}

export default SearchingResultsPage;
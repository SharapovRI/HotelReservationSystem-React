import { useState } from 'react';
import SearchedHotels from '../SearchedHotels/SearchedHotels/SearchedHotels';
import SearchingArea from '../SearchingArea/SearchingArea/SearchingArea';
import './SearchingResultsPage.scss'

const SearchingResultsPage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    return(
        <div className='searchingResultsContainer'>
            <div className='searchingResultsArea'>
                <SearchingArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount}/>
            </div>
            <div className='searchedResultsArea'>
                <SearchedHotels hotels={content} filter={filter}/>
            </div>
        </div>
    )
}

export default SearchingResultsPage;
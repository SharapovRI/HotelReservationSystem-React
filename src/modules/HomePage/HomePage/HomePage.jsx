import { useState } from "react";
import CitiesGroups from "../CitiesGroups/CitiesGroups/CitiesGroups";
import CountiesGroups from "../CountiesGroups/CountiesGroups/CountiesGroups";
import SearchArea from "../SearchArea/SearchArea/SearchArea";


const HomePage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    return(
        <>
            <SearchArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount}/>
            <CountiesGroups />
            <CitiesGroups />
        </>
    )
}

export default HomePage;
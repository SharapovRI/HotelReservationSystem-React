import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CountiesGroups.scss'
import getHotels from '../../../../api/apiRequests/getHotels';
import { useNavigate } from 'react-router-dom';

const CountiesGroups = () => {
    const [appState, setAppState] = useState([]);
    const [randomCountriesIds, setRandomCountriesIds] = useState([]);
    const [randomCountries, setRandomCountries] = useState([]);
    const [listItems, setListItems] = useState([]);
    const navigate = useNavigate();

    function getUniqueIds(a) {
        var seen = {};
        var out = [];
        var len = a.length;
        var j = 0;
        for(var i = 0; i < len; i++) {
             var item = a[i];
             if(seen[item] !== 1) {
                   seen[item] = 1;
                   out[j++] = item;
             }
        }
        return out;
    }

    useEffect(() => {
        const apiUrl = 'https://localhost:44382/Locates';
        axios.get(apiUrl)
            .then((resp) => {
                const allPersons = resp.data;
                setAppState(allPersons);
            })
            .catch(async function (error) {
                if (error.response) {

                }
            });
    }, [setAppState]);

    useEffect(() => {
        const countryIds = appState?.map(country => country.countryId);
        const uniqueIds = getUniqueIds(countryIds);
        const shuffled = uniqueIds?.sort(() => Math.random() - 0.5);
        const randomIds = shuffled?.slice(0, 10);
        setRandomCountriesIds(randomIds);
    }, [appState]);

    useEffect(async () => {
        const list = [];

        if (randomCountriesIds.length > 0) {
            for (const item of randomCountriesIds) {
                const hotels = await getHotels({ countryId: item, size: 1, index: 0 });
                list.push({hotels, id: item});
            }
        }
        setRandomCountries(list);

    }, [randomCountriesIds])

    useEffect(() => {
        const list = [];
        if (randomCountries?.length > 0) {
            randomCountries?.map((item, index) => {
                item.hotels?.result[0] &&
                    list.push(
                        <div className="cgc_c_item" key={index}>
                            <div className="cgc_c_photo" onClick={() => navigate(axios.getUri({ url: `/Hotels`, params: {countryId:item.id} }))}>
                                <img src={`data:${item.hotels?.result[0].photos[0]?.extension};base64,${item.hotels?.result[0].photos[0]?.data}`} />
                            </div>
                            <div className="cgc_c_discription">
                                <h3>{item.hotels?.result[0].country}</h3>
                                <span>Searched {item.hotels?.pageCount} variants</span>
                            </div>
                        </div>
                    )
            }
            );
        }
        setListItems(list);
    }, [randomCountries]);

    return (
        <div className="countriesGroupingContainer">
            <h2>Grouping by countries</h2>
            <div className="cgc_carousel">
                {listItems}
            </div>
        </div>
    )
}

export default CountiesGroups;
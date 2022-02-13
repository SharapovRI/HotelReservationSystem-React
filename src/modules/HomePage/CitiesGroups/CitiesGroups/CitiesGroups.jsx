import './CitiesGroups.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import getHotels from '../../../../api/apiRequests/getHotels';
import { useNavigate } from 'react-router-dom';

const CitiesGroups = () => {
    const [appState, setAppState] = useState([]);
    const [randomCitesIds, setRandomCitesIds] = useState([]);
    const [randomCities, setRandomCities] = useState([]);
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
        const cityIds = appState?.map(city => city.id);
        console.log(cityIds);
        const uniqueIds = getUniqueIds(cityIds);
        const shuffled = uniqueIds?.sort(() => Math.random() - 0.5);
        const randomIds = shuffled?.slice(0, 10);
        setRandomCitesIds(randomIds);
    }, [appState]);

    useEffect(async () => {
        const list = [];

        if (randomCitesIds.length > 0) {
            for (const item of randomCitesIds) {
                const hotels = await getHotels({ cityId: item, size: 1, index: 0 });
                list.push({hotels, id: item});
            }
        }
        setRandomCities(list);

    }, [randomCitesIds])

    useEffect(() => {
        const list = [];
        if (randomCities?.length > 0) {
            randomCities?.map((item, index) => {
                item.hotels?.result[0] &&
                    list.push(
                        <div className="cgc_c_item">
                            <div className="cgc_c_photo" onClick={() => navigate(axios.getUri({ url: `/Hotels`, params: {cityId:item.id} }))}>
                                <img src={`data:${item.hotels?.result[0].photos[0]?.extension};base64,${item.hotels?.result[0].photos[0]?.data}`} />
                            </div>
                            <div className="cgc_c_discription">
                                <h3>{item.hotels?.result[0].city}</h3>
                                <span>Searched {item.hotels?.pageCount} variants</span>
                            </div>
                        </div>
                    )
            }
            );
        }
        setListItems(list);
    }, [randomCities]);

    return (
        <div className="countriesGroupingContainer">
            <h2>Grouping by cities</h2>
            <div className="cgc_carousel">
                {listItems}
            </div>
        </div>
    )
}

export default CitiesGroups;
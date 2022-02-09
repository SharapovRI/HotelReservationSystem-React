import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CountiesGroups.scss'
import getHotels from '../../../../api/apiRequests/getHotels';

const CountiesGroups = () => {
    const [appState, setAppState] = useState([]);
    const [randomCountriesIds, setRandomCountriesIds] = useState([]);
    const [randomCountries, setRandomCountries] = useState([]);
    const [listItems, setListItems] = useState([]);

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
        const shuffled = countryIds?.sort(() => Math.random() - 0.5);
        const randomIds = shuffled?.slice(0, 6);
        setRandomCountriesIds(randomIds);
    }, [appState]);

    async function getHotelsFromCountry(countryId) {
        const filter = {
            countryId: countryId,
            size: 1,
            index: 0,
        }
        const data = await getHotels({ ...filter });
        return data;
    }

    useEffect(async () => {
        const list = [];

        if (randomCountriesIds.length > 0) {
            for (const item of randomCountriesIds) {
                const hotels = await getHotels({ countryId: item, size: 1, index: 0 });
                list.push(hotels);
            }
        }
        console.log(list);
        setRandomCountries(list);

    }, [randomCountriesIds])

    useEffect(() => {
        const list = [];
        console.log(randomCountries);
        if (randomCountries.length > 0) {
            randomCountries.map((item, index) => {
                item.result[0] &&
                    list.push(
                        <div className="cgc_c_item">
                            <div className="cgc_c_photo">
                                <img src={`data:${item.result[0].photos[0]?.extension};base64,${item.result[0].photos[0]?.data}`} />
                            </div>
                            <div className="cgc_c_discription">
                                <h3>{item.result[0].country}</h3>
                                <span>Searched {item.pageCount} variants</span>
                            </div>
                        </div>
                    )
            }
            );
        }
        console.log(list);
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
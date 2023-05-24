import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { Restaurant } from "../models/restaurant";

export default () => {
    const [results, setResults] = useState<Restaurant[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm: string) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
}
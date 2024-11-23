import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const getCocktailsByLetter = async (letter) => {
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
    return response.data.drinks;
};

export const getCocktailDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data.drinks[0];
};

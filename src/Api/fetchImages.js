const key = '?client_id=ay4ZqrdBl4GH18jufE2J2yY5aVILknp2n0ruMYNwJH4';
const URL = 'https://api.unsplash.com/photos/';

export const fetchImages = async page => {
    const response = await fetch(`${URL}${key}&per_page=10&page=${page}`);
    const data = await response.json();
    return data;
};

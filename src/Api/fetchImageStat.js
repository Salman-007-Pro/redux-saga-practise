const key = '?client_id=ay4ZqrdBl4GH18jufE2J2yY5aVILknp2n0ruMYNwJH4';
const URL = 'https://api.unsplash.com/photos/';

export const fetchImageStat = async id => {
    const response = await fetch(`${URL}${id}/statistics${key}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

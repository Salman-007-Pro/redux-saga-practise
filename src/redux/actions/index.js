import {
    //images
    IMAGES_LOAD_PROGRESS,
    IMAGES_LOAD_SUCCESS,
    IMAGES_LOAD_FAIL,

    //image stat
    IMAGES_STAT_PROGRESS,
    IMAGES_STAT_SUCCESS,
    IMAGES_STAT_FAIL,
} from '../../Constants';

const loadImages = () => ({
    type: IMAGES_LOAD_PROGRESS,
});

const setImages = images => {
    return { type: IMAGES_LOAD_SUCCESS, images };
};

const setError = error => ({
    type: IMAGES_LOAD_FAIL,
    error,
});

const loadImageStat = id => ({
    type: IMAGES_STAT_PROGRESS,
    id,
});

const setImageStat = (id, downloads, views) => {
    return { type: IMAGES_STAT_SUCCESS, id, downloads, views };
};

const setErrorImageStat = error => {
    return{
        type: IMAGES_STAT_FAIL,
        error,
    }
}

export {
    loadImages,
    setError,
    setImages,
    loadImageStat,
    setImageStat,
    setErrorImageStat,
};

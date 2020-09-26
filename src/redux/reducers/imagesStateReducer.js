import {
    IMAGES_STAT_PROGRESS,
    IMAGES_STAT_SUCCESS,
    IMAGES_STAT_FAIL,
} from '../../Constants';

const imagesStatReducer = (state = {}, action) => {
    switch (action.type) {
        case IMAGES_STAT_PROGRESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    views: null,
                    error: '',
                },
            };

        case IMAGES_STAT_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    views: action.views,
                    error: '',
                },
            };

        case IMAGES_STAT_FAIL:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    views: null,
                    error: action.error,
                },
            };

        default:
            return state;
    }
};

export { imagesStatReducer };

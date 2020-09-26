import {
    IMAGES_LOAD_PROGRESS,
    IMAGES_LOAD_SUCCESS,
    IMAGES_LOAD_FAIL,
} from '../../Constants';
const initialState = {
    error: '',
    images: [],
    loading: false,
    page: 1,
};
const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES_LOAD_PROGRESS:
            return {
                ...state,
                loading: true,
                error: '',
            };

        case IMAGES_LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                images: [...state.images, ...action.images],
                page: state.page + 1,
                error: '',
            };

        case IMAGES_LOAD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export { imagesReducer };

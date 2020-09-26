//main
import { put, call, select, delay, takeLatest } from 'redux-saga/effects';

//actions
import { setImages, setError } from '../actions/index';

//api
import { fetchImages } from '../../Api/fetchImages';

//constant
import { IMAGES_LOAD_PROGRESS } from '../../Constants';

const getImagesReducerState = state => state.imagesReducer;

function* getImages() {
    try {
        const { page } = yield select(getImagesReducerState);
        yield delay(800);
        const data = yield call(fetchImages, page);
        yield put(setImages(data));
    } catch (err) {
        yield put(setError(err.message));
    }
}

export default function* watcherImages() {
    yield takeLatest(IMAGES_LOAD_PROGRESS, getImages);
}

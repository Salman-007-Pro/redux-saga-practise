//main
import { put, call, delay, takeEvery } from 'redux-saga/effects';

//actions
import { loadImageStat, setImageStat, setErrorImageStat } from '../actions';

//api
import { fetchImageStat } from '../../Api/fetchImageStat';

//constant
import { IMAGES_LOAD_SUCCESS } from '../../Constants';

function* getImageStat(action) {
    for (const element of action.images)
        try {
            const { id } = yield element;
            yield put(loadImageStat(id));
            const data = yield call(fetchImageStat, id);
            const {
                downloads: { total: dTotal },
                views: { total: vTotal },
            } = data;
            delay(500);
            yield put(setImageStat(id, dTotal, vTotal));
        } catch (err) {
            yield put(setErrorImageStat(err.message));
        }
}

export default function* watcherImagesStat() {
    yield takeEvery(IMAGES_LOAD_SUCCESS, getImageStat);
}

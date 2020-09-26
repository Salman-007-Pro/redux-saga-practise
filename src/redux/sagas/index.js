import { all } from 'redux-saga/effects';
import watcherImages from './imagesSaga';
import watcherImagesStat from './imageStat';
function* rootSaga() {
    yield all([watcherImages(), watcherImagesStat()]);
}
export default rootSaga;

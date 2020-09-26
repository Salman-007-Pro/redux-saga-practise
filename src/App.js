import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import ImageGrid from './components/ImageGrid/ImageGrid';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <ImageGrid />
                </Fragment>
            </Provider>
        );
    }
}

export default App;

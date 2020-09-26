import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stats from '../Stats/Stats';
import { loadImages } from '../../redux/actions';
import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        const {
            fetchImages,
            imagesUnsplash: { loading },
        } = this.props;
        fetchImages();
        window.onscroll = _e => {
            if (
                window.innerHeight + window.pageYOffset >=
                document.body.offsetHeight
            ) {
                if (!loading) {
                    fetchImages();
                }
            }
        };
    }

    render() {
        const { imageStat, imagesUnsplash } = this.props;
        const { images, loading, error } = imagesUnsplash;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStat[image.id]} error={imageStat[image.id]?.error} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                {loading && <div className="loading"></div>}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        imagesUnsplash: state.imagesReducer,
        imageStat: state.imagesStatReducer,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        fetchImages: () => dispatch(loadImages()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);

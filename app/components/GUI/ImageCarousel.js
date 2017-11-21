// React
import React, { Component } from "react";

export default class ImageCarousel extends Component {
    createImageBlock(image, index) {
        const { uniqueKey } = this.props;
        return(
            <div key={`${uniqueKey}-${index}`} className="image-carousel-element">
                <div className="remove-button" onClick={() => this.removeImage(index)}>x</div>
                <img src={image}/>
            </div>
        )
    }

    //ref={`${uniqueKey}-${index}`}

    removeImage(index) {
        const { images, removeImage } = this.props;
        let newData = images;
        delete newData[index];
        removeImage(newData);
    }

    render() {
        const { images } = this.props;
        return(
            <div className="image-carousel">
                {Object.keys(images).map((key) => this.createImageBlock(images[key], key))}
            </div>
        )
    }
}
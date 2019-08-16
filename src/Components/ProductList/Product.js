import React from 'react';

const Product = (props) => {
    return(
        <React.Fragment>
            <div className="grid-item">
            <img className="grid-image"src={props.photos} alt="{props.name}"/>
            <p className="grid-item-name">
            { props.name }
            </p>
            <span className="price">${props.price}</span>
            <p className="grid-description">
            { props.description}
            </p>
            </div>
        </React.Fragment>
    );
}

export default Product;


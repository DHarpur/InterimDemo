import React from 'react';
import PropTypes from 'prop-types';
import ImageHeader from './ImageHeader';
import Content from './Content';

const CardComponentStyle = {
    margin: 'auto',
    padding: 20,
    display: 'inline-block',
    marginTop: 50,
    border: '0.5px #085893 solid',
    borderRadius: 10,
    backgroundColor: 'white', 
};


const CardComponent = ({ title }) => {
    return (
        <div style={CardComponentStyle}>
            <ImageHeader  width={140} height={200} />
            <br/>
            <Content title={title} />
        </div>
    );
};

export default CardComponent;

CardComponent.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

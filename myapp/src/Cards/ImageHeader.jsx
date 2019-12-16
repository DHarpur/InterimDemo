import React from 'react';
import PropTypes from 'prop-types';
import image from '../images/BladeRunner2049Final.jpg'

const ImageHeader = ({ width, height }) => {
    return(
        <img 
            src={image}
            style={{width: width, height: height}}
            alt="BladeRunnerImage"
        />
    );
};

export default ImageHeader;

ImageHeader.propTypes = {
    img: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

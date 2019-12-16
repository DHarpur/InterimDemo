import React from 'react';
import PropTypes from 'prop-types';

const Content = ({title}) => {
    return <span> {title} </span>;
};

export default Content;

Content.propTypes = {
    title: PropTypes.string.isRequired
};

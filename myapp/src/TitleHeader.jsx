import React from 'react';

const headerStyle = {
    width: '100%',
    backgroundColor: '#085893',
    height: 75,
    textAlign: 'center'
};

const titleStyle = {
    color: 'cyan',
    fontSize: 40,
    fontStyle: 'italic',
    paddingTop:10
}

const TitleHeader = () => {

    return(
        <div style={headerStyle}>
            <h2 style={titleStyle}>NovelNarrative</h2>
        </div>
    );
};

export default TitleHeader;
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Track = styled.div`
    width: 100%;
    height: 10px;
    background-color: 
    border-radius: inset 0 0 5px #white;
`;

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #6bccf9;
    border-radius: 8px;
`;

export default class SurveyBar extends React.Component {
    render() {
        return (
                <Track>
                    <Thumb percentage={50} />
                </Track>
            );
    }
}

SurveyBar.propTypes = {
    percentage: PropTypes.number,
};
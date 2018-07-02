import React from 'react';

import Image from './backgroundless.png';
import './Icon.css';

class Icon extends React.Component {
    render() {
        return(
            <img src={Image} alt="icon" className="Icon" draggable="false"/>
        );
    }
}

export default Icon;
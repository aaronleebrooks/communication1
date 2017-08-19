import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
		super(props);
        this.state = {
            surprised: false
        }
    }

    setSurprise() {
        this.setState({
            surprised: 'surprised'
        });
    }


    render() {
        if (this.state.surprised === false) {
            return (
            	<SurpriseButton onClick={e => this.setSurprise()} />
    	);
        } else if (this.state.surprised === 'surprised')
	    return (
	    		<SurpriseImage />
	    	);
	}
}
import React, { Component } from 'react';

class ClassExample extends Component {

    constructor(props) {    
        super(props)

        this.state = { latitude: null, longitude: null, errorMessage:'' }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
            },
            // (position) => {
            //     this.setState({ longitude: position.coords.longitude })
            // },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        )
    }

    render() {
        return (
            <div>
                {this.state.latitude}
                {/* {this.state.longitude} */}
                {this.state.errorMessage}
            </div>
        )
    }
}

export default ClassExample;
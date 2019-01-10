import React from 'react';
import Spinner from "../commons/components/Spinner";

const withPreload = Component =>
    class PreloadComponent extends React.Component {
        state = {isLoading: true};

        componentDidMount() {
            setTimeout(() => this.setState({isLoading: false}), 1000);
        };

        render() {
            return (
                this.state.isLoading ? <Spinner/> : <Component {...this.props}/>
            );
        }
    };

export default withPreload;

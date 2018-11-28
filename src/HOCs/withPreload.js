import React from 'react';
import Loading from '../commons/components/Loading';

const withPreload = Component =>
   class PreloadComponent extends React.Component {
      state = { isLoading: true };

      componentDidMount() {
         setTimeout(() => this.setState({ isLoading: false }), 300);
      };

      render() {
         return (
            this.state.isLoading ? <Loading/> : <Component {...this.props}/>
         );
      }
   };

export default withPreload;

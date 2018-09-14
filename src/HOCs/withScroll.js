import React from 'react';
import _ from "lodash";

const withScroll = (Component, nextRoute, prevRoute) =>
    class ScrollableComponent extends React.Component {
        scrollUp = () => {

            const {history} = this.props;
            if (prevRoute) {
                if (history.location.pathname !== prevRoute)
                    history.push(prevRoute)
            }
        }
        scrollDown = () => {
            const {history} = this.props;
            console.log(history)
            if (nextRoute) {
                if (history.location.pathname !== nextRoute)
                    history.push(nextRoute)
            }
        }
        handleScroll = event => {
            event.preventDefault();
            if (event.deltaY < 0)
                this.scrollUp();
            else this.scrollDown();
        };
        componentDidMount = () => {

            window.addEventListener('wheel', this.handleScroll, false);
        }
        componentWillUnmount = () => {
            window.removeEventListener('wheel', this.handleScroll, false)
        };

        constructor(props) {
            super(props);
            this.handleScroll = _.debounce(this.handleScroll, 1000);
        }

        render() {
            return (
                <Component {...this.props}/>
            );
        }
    };
export default withScroll;


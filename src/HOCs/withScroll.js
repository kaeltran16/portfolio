import React from 'react';
import _ from "lodash";


const links = ['/', '/about', '/skill', '/work/project1', '/work/project2', '/work/project3', '/contact'];

const withScroll = (Component) =>
    class ScrollableComponent extends React.Component {
        state = {nextRoute: '', preRoute: ''};
        scrollUp = () => {
            const {history, match} = this.props;

            const currentPageIndex = links.findIndex(i => i === match.url);
            if (currentPageIndex !== 0) {
                this.setState({prevRoute: links[currentPageIndex - 1]});
                if (history.location.pathname !== this.state.prevRoute) {
                    history.push(this.state.preRoute);
                }
            }
        };
        scrollDown = () => {
            const {history, match} = this.props;
            const currentPageIndex = links.findIndex(i => i === match.url);
            this.setState({nextRoute: links[currentPageIndex + 1]});
            if (history.location.pathname !== this.state.nextRoute) {
                history.push(this.state.nextRoute);
            }
        };
        handleScroll = event => {
            event.preventDefault();
            if (event.deltaY < 0)
                this.scrollUp();
            else this.scrollDown();
        };

        constructor(props) {
            super(props);
            this.handleScroll = _.debounce(this.handleScroll, 200);
        }

        componentDidMount() {

            window.addEventListener('wheel', this.handleScroll, false);
        };

        componentWillUnmount() {
            window.removeEventListener('wheel', this.handleScroll, false)
        };

        render() {
            const {nextRoute, prevRoute} = this.state;
            return (
                <Component {...this.props} nextRoute={nextRoute} prevRoute={prevRoute}/>
            );
        }
    }
;
export default withScroll;


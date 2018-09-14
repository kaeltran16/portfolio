import React from 'react';
import _ from "lodash";


const links = ['/', '/about', '/skill', '/work/project1', '/work/project2', '/work/project3', '/contact'];

const withScroll = (Component) =>
    class ScrollableComponent extends React.Component {
        scrollUp = () => {
            const {history, match} = this.props;

            const currentPageIndex = links.findIndex(i => i === match.url);
            if (currentPageIndex !== 0) {
                const prevRoute = links[currentPageIndex - 1];
                if (history.location.pathname !== prevRoute) {
                    history.push(prevRoute);
                }
            }
        };
        scrollDown = () => {
            const {history, match} = this.props;
            const currentPageIndex = links.findIndex(i => i === match.url);
            const nextRoute = links[currentPageIndex + 1];
            if (history.location.pathname !== nextRoute) {
                history.push(nextRoute);
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
            this.handleScroll = _.debounce(this.handleScroll, 200);
        }

        render() {
            return (
                <Component {...this.props}/>
            );
        }
    }
;
export default withScroll;


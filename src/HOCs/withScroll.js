import React from "react";
import _ from "lodash";

const links = [
  "/",
  "/work/crwn-clothing",
  "/work/recipello",
  "/work/devchat",
  "/skill",
  "/about",
  "/contact",
];

const withScroll = (Component) =>
  class ScrollableComponent extends React.Component {
    state = { nextRoute: "", prevRoute: "" };
    scrollUp = () => {
      const { history, match } = this.props;

      const currentPageIndex = links.findIndex((i) => i === match.url);
      if (currentPageIndex !== 0) {
        this.setState({ prevRoute: links[currentPageIndex - 1] });
        if (history.location.pathname !== this.state.prevRoute) {
          history.push(this.state.prevRoute);
        }
      }
    };
    scrollDown = () => {
      const { history, match } = this.props;
      const currentPageIndex = links.findIndex((i) => i === match.url);
      if (currentPageIndex === links.length - 1) {
        this.setState({ nextRoute: links[0] });
      } else {
        this.setState({ nextRoute: links[currentPageIndex + 1] });
      }
      if (history.location.pathname !== this.state.nextRoute) {
        history.push(this.state.nextRoute);
      }
    };
    handleScroll = (event) => {
      event.preventDefault();
      if (event.deltaY < 0) {
        this.scrollUp();
      } else {
        this.scrollDown();
      }
    };

    constructor(props) {
      super(props);
      this.handleScroll = _.debounce(this.handleScroll, 200);
    }

    componentDidMount() {
      window.addEventListener("wheel", this.handleScroll, false);
      window.addEventListener("scroll", this.handleScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener("wheel", this.handleScroll, false);
      window.removeEventListener("scroll", this.handleScroll, false);
    }

    render() {
      const { nextRoute, prevRoute } = this.state;
      return (
        <Component
          {...this.props}
          nextRoute={nextRoute}
          prevRoute={prevRoute}
        />
      );
    }
  };
export default withScroll;

import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const particleSettings = {
    'particles': {
        'number': {
            'value': 20,
            'density': {
                'enable': false,
                'value_area': 800
            }
        },
        'color': {
            'value': '#ffffff'
        },
        'shape': {
            'type': 'star',
            'stroke': {
                'width': 0,
                'color': '#c00000'
            },
            'polygon': {
                'nb_sides': 5
            },
            'image': {
                'src': 'img/github.svg',
                'width': 100,
                'height': 100
            }
        },
        'opacity': {
            'value': 0.352380571016698,
            'random': false,
            'anim': {
                'enable': true,
                'speed': 0.48669300216578404,
                'opacity_min': 0,
                'sync': false
            }
        },
        'size': {
            'value': 6,
            'random': false,
            'anim': {
                'enable': true,
                'speed': 12.167325054144603,
                'size_min': 4.055775018048201,
                'sync': false
            }
        },
        'line_linked': {
            'enable': false,
            'distance': 500,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 2
        },
        'move': {
            'enable': true,
            'speed': 3,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
            }
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'bubble'
            },
            'onclick': {
                'enable': true,
                'mode': 'repulse'
            },
            'resize': true
        },
        'modes': {
            'grab': {
                'distance': 400,
                'line_linked': {
                    'opacity': 0.5
                }
            },
            'bubble': {
                'distance': 400,
                'size': 4,
                'duration': 0.3,
                'opacity': 1,
                'speed': 3
            },
            'repulse': {
                'distance': 129.7848005775424,
                'duration': 0.4
            },
            'push': {
                'particles_nb': 4
            },
            'remove': {
                'particles_nb': 2
            }
        }
    },
    'retina_detect': true
};

const Container = styled.div`
  position: relative;
  background-color: ${props => props.theme.primary.main};
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        const {width, height} = this.state;
        return (
            <Container>
                <Particles height = {height} width={width} params={particleSettings}/>
            </Container>
        );
    }
}

export default Background;
import React from 'react';

export const {Provider, Consumer} = React.createContext({});

export function withContext(Component) {
    return function Wrapper(props) {
        return (
            <Consumer>
                {value => (
                    <Component {...props} {...value} />
                )}
            </Consumer>
        );
    };
}
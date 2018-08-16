import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class AnimatedMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <Button
                    aria-owns={open ? 'fade-menu' : null}
                    aria-haspopup='true'
                    onClick={this.handleClick} color='primary'>
                    Menu
                </Button>
                <Menu
                    id='fade-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>About</MenuItem>
                    <MenuItem onClick={this.handleClose}>Skill</MenuItem>
                    <MenuItem onClick={this.handleClose}>Project</MenuItem>
                    <MenuItem onClick={this.handleClose}>Contact</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default AnimatedMenu;
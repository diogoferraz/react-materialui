import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import LongMenu from './menuList';

const styles = theme => ({
  drawerPaper:{
    position: 'relative',
    color: "#f5f5f5",
    width:70,
  },
  drawerPaperHorizontal:{
    position: 'relative',
    color: "#f5f5f5",
    height:100,
  },
  container:{
    display: 'flex',
  },
  paper:{},
});

class SideMenu extends React.Component {
  state = {
    orientation: undefined,
  }

  constructor(props){
    super(props);
    this._renderMenu = this._renderMenu.bind(this);
  }

  handleResize = () => this.setState({
    orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  _renderMenu(){
    const { classes } = this.props;
    switch(this.state.orientation) {
      case 'portrait':
      return (
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaperHorizontal,
            }}
          >
            <div className={classes.container}>
                <LongMenu />
            </div>   
          </Drawer>
        ); 
      default:
        return (
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.container}>
              <LongMenu />     
            </div>   
          </Drawer>
        );
    }
    
  }

  render(){
    return this._renderMenu();
  } 
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
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
    windowHeight: undefined,
    windowWidth: undefined,
    orientation: undefined,
  }

  constructor(props){
    super(props);
    this._renderMenu = this._renderMenu.bind(this);
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
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
      break;
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
      break;
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
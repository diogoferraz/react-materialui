import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from '../components/side-menu/side-menu';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

class Index extends React.Component {


  render() {
    const { classes } = this.props;

    return (
        <SideMenu />
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot((Index));

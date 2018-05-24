import React from 'react';
import PropTypes from 'prop-types';
import SideMenu from '../components/side-menu/side-menu';
import withRoot from '../withRoot';

class Index extends React.Component {


  render() {
    return (
        <SideMenu />
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot((Index));

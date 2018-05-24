// This file is shared across the demos.
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import HighlightIcon from '@material-ui/icons/Highlight';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';


const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Pyxis',
];

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="add"
          aria-owns={anchorEl ? 'add-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AddIcon />
        </IconButton>
        <Menu
          id="add-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: 200,
              width: 400,
              position:'relative',
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        <IconButton
          aria-label="fullscreen"
          aria-owns={anchorEl ? 'fullscreen-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <FullscreenIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          aria-owns={anchorEl ? 'delete-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <DeleteIcon />
        </IconButton>
        
        <IconButton
          aria-label="search"
          aria-owns={anchorEl ? 'search-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <SearchIcon />
        </IconButton>
        
        <IconButton
          aria-label="filter"
          aria-owns={anchorEl ? 'filter-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <FilterListIcon />
        </IconButton>
        
        <IconButton
          aria-label="zoom"
          aria-owns={anchorEl ? 'zoom-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <ZoomOutMapIcon />
        </IconButton>
        
        <IconButton
          aria-label="highlight"
          aria-owns={anchorEl ? 'highlight-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <HighlightIcon />
        </IconButton>
        
        <IconButton
          aria-label="undo"
          aria-owns={anchorEl ? 'undo-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <UndoIcon />
        </IconButton>
        
        <IconButton
          aria-label="redo"
          aria-owns={anchorEl ? 'redo-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <RedoIcon />
        </IconButton>
        
      </div>
    );
  }
}

export default LongMenu;
/*import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

export const verticalMenu = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
    </ListItem>
  </div>
);

export const horizontalMenu = (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          Select
        </ListItem>
      </Grid>
      <Grid item xs={3}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
        </ListItem>
      </Grid>
      <Grid item xs={3}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
        </ListItem>
      </Grid>
    </Grid>
  </div>
);*/
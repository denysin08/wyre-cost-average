import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './OnBoard.css';

class ChooseDirection extends React.Component {
  render() {
    const { handleBuy, handleSell, ...other } = this.props;
    let open = true;
    let fullWidth = true;
    return (
      <Dialog open={open} fullWidth={fullWidth}>
        <DialogTitle id="form-dialog-title">Buy or sell?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to buy or sell crypto assets?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBuy} color="primary">
            Buy
            </Button>
          <Button onClick={handleSell} color="primary">
            Sell
            </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
ChooseDirection.propTypes = {
  handleBuy: PropTypes.func,
  handleSell: PropTypes.func
};
export default ChooseDirection;
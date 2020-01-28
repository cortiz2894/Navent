import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          openModal : false
      };
    }

    componentDidMount() {
    }

    render() {
      return (
            <div className="modal-content">
                <Typography>Para ser contactado por favor ingrese su direccion de correo electronico.</Typography>
                <form className="form-modal">
                    <TextField
                        id="filled-error-helper-text"
                        label="Error"
                        type="mail"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    />
                    <Button type="submit">ENVIAR</Button>
                </form>
            </div>
      );
    }
 
  }

  
  export default Modal;

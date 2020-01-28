import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          openModal : false,
          formData: {
            email: '',
        },
        submitted: false,
      };
      
    }

    componentDidMount() {
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ 
            submitted: true 
        });
        this.props.showModal(this.state.submitted)
    }

    render() {
      const {formData, submitted} = this.state;
      return (
            <div className="modal-content">
                <Typography>Para ser contactado por favor ingrese su direccion de correo electronico.</Typography>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                >
                    <TextValidator
                        label="Email"
                        onChange={this.handleChange}
                        name="email"
                        value={formData.email}
                        validators={['required', 'isEmail']}
                        errorMessages={['El campo es obligatorio', 'Porfavor ingrese un mail valido']}
                    />
                    <div className="footer-modal">
                        <Button
                            type="submit"
                            disabled={submitted}
                        >
                            {
                                (submitted && 'Se envio el mail correctamente')
                                || (!submitted && 'ENVIAR')
                            }
                        </Button>
                    </div>
                </ValidatorForm>
                
            </div>
      );
    }
 
  }

  
  export default Modal;

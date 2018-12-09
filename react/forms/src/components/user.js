import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields';

class User extends Component {
  state = {
    formData: {
      first: {
        el: 'input',
        value: '',
        label: true,
        labelText: 'First Name',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter Your First Name'
        },
        validation: {
          required: true,
          min: 2
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      last: {
        el: 'input',
        value: '',
        label: true,
        labelText: 'Last Name',
        config: {
          name: 'last_input',
          type: 'text',
          placeholder: 'Enter Your Last Name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      country: {
        el: 'input',
        value: '',
        label: true,
        labelText: 'Country',
        config: {
          name: 'country_input',
          type: 'text',
          placeholder: 'Enter Your Country'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      message: {
        el: 'textarea',
        value: '',
        label: true,
        labelText: 'Message',
        config: {
          name: 'message_input',
          rows: 4,
          cols: 43
        },
        validation: {
          required: false
        },
        valid: true
      },
      age: {
        el: 'select',
        value: '',
        label: true,
        labelText: 'Age',
        config: {
          name: 'age_input',
          options: [
            { val: '1', text: '10-20' },
            { val: '2', text: '20-30' },
            { val: '3', text: '30-40' },
            { val: '4', text: '40+' }
          ]
        },
        validation: {
          required: false
        },
        valid: true
      }
    }
  };

  updateForm = newState => {
    this.setState({
      formData: newState
    });
  };

  submitForm = e => {
    e.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }

    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      console.log(dataToSubmit);
    }
  };

  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.submitForm}>
          <FormFields
            formData={this.state.formData}
            onBlur={newState => this.updateForm(newState)}
            change={newState => this.updateForm(newState)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default User;

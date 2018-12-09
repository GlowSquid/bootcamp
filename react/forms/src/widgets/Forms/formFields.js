import React from 'react';

const FormFields = props => {
  const renderFields = () => {
    const formArray = [];

    for (let elName in props.formData) {
      formArray.push({
        id: elName,
        settings: props.formData[elName]
      });
    }

    return formArray.map((item, i) => {
      return (
        <div key={i} className="form_element">
          {renderTemplates(item)}
        </div>
      );
    });
  };

  const showLabel = (show, label) => {
    return show ? <label>{label}</label> : null;
  };

  const changeHandler = (e, id, blur) => {
    const newState = props.formData;
    newState[id].value = e.target.value;

    if (blur) {
      let validData = validate(newState[id]);
      newState[id].valid = validData[0];
      newState[id].validationMessage = validData[1];
    }
    newState[id].touched = blur;

    props.change(newState);
  };

  const validate = el => {
    // console.log(el);
    let error = [true, ''];

    if (el.validation.min) {
      const valid = el.value.length >= el.validation.min;
      const message = `${
        !valid
          ? 'Name needs to be ' + el.validation.min + ' or more digits'
          : ''
      }`;
      error = !valid ? [valid, message] : error;
    }

    if (el.validation.required) {
      const valid = el.value.trim() !== '';
      const message = `${!valid ? 'This field is required' : ''}`;

      error = !valid ? [valid, message] : error;
    }
    return error;
  };

  const showValidation = data => {
    let errorMessage = null;

    if (data.validation && !data.valid) {
      errorMessage = (
        <div className="label_error">{data.validationMessage}</div>
      );
    }
    return errorMessage;
  };

  const renderTemplates = data => {
    let formTemplate = '';
    let values = data.settings;

    switch (values.el) {
      case 'input':
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <input
              {...values.config}
              value={values.value}
              onBlur={e => changeHandler(e, data.id, true)}
              onChange={e => changeHandler(e, data.id, false)}
            />
            {showValidation(values)}
          </div>
        );
        break;
      case 'textarea':
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <textarea
              {...values.config}
              value={values.value}
              onChange={e => changeHandler(e, data.id)}
            />
          </div>
        );
        break;
      case 'select':
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <select
              // {...values.config.[options]}
              value={values.value}
              name={values.config.name}
              onChange={e => changeHandler(e, data.id)}
            >
              {values.config.options.map((item, i) => (
                <option key={i} value={item.val}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        );
        break;

      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderFields()}</div>;
};

export default FormFields;

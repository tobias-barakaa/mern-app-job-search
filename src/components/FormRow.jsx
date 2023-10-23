import React from 'react'

const FormRow = ({type, name, labelText, defaultValue}) => {
  return (
    <div className="form-row">
          <label htmlFor={name} className="form-label">
            {labelText || name}
          </label>
          <input
            defaultValue={defaultValue || ''}
            className="form-input"
            type={type}
            id={name}
            name="name"
          />
        </div>
  )
}

export default FormRow

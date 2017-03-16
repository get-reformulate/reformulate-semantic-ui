import React from 'react'
import { Field } from '../reformulate'
import { Form } from 'semantic-ui-react'

export default class InputField extends Field {
  render () {
    const { label, control, type, name, required, placeholder } = this.props

    console.log( 'value', this.getValue() )

    return (
      <Form.Field
        label={label}
        control={control || 'input'}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        error={!! this.getError()}
        value={this.getValue() || ''}
        disabled={this.shouldBeDisabled()}
        onChange={this.onChange}
      />
    )
  }
}

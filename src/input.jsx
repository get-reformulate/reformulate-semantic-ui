import React, { Component } from 'react'
import Field from '.reform/field'

import Message from './components/form/message'
import Label from './components/form/label'
import Input from './components/form/input'
import FormGroup from './components/form/group'

import FaInfoCircle from '.hicons/lib/info'
import FaClose from '.hicons/lib/cross'

import ErrorMessage from './error-message'

export default class InputField extends Field {
  render () {
    const { name, color, label, info, size, required, ...props } = this.props
    const error = this.getError()
    const value = this.getValue()

    return (
      <FormGroup>
        {label && <Label required={required} name={name}>{label}</Label>}
        <Input
          {...props}
          name={name}
          disabled={this.shouldBeDisabled()}
          value={value}
          color={error ? 'red' : color || 'transparent'}
          onChange={this.onChange}
        >
          {
            error &&(
              <ErrorMessage error={error} />
            ) ||
            info && (
              <Message size={size} color="blue">
                <FaInfoCircle /> {info}
              </Message>
            )
          }
        </Input>
      </FormGroup>
    )
  }
}

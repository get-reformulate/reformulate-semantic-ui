import React, { Component } from 'react'
import Field from '.reform/field'

import Switch from './components/form/switch'
import Message from './components/form/message'
import Label from './components/form/label'
import Input from './components/form/input'
import FormGroup from './components/form/group'


import FaInfoCircle from '.hicons/lib/info'
import FaClose from '.hicons/lib/cross'

import ErrorMessage from './error-message'

export default class InputField extends Field {
  render () {
    const { name, label, info, size, intl, style, required, ...props } = this.props
    const error = this.getError()

    return (
      <FormGroup>
        <Switch
          {...props}
          disabled={this.shouldBeDisabled()}
          checked={this.getValue()}
          onChange={this.onChange}
          style={{ float: 'right' }}
        />
        {label && <Label required={required}>{label}</Label>}
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
      </FormGroup>
    )
  }
}

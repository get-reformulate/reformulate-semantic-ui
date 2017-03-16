import React, { Component } from 'react'
import Button from '.reform/button'

import UIButton from './components/button/button'

export default class SubmitButtonForm extends Button {
  render () {
    const disabled = this.shouldBeDisabled()

    return (
      <UIButton {...{
        ...this.props, disabled, type: 'submit'
      }}/>
    )
  }
}

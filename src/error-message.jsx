import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import IntlError from 'intl-error'

import FaClose from '.hicons/lib/cross'
import { Message } from './components/form'

@injectIntl
export default class ErrorMessage extends Component {
  render () {
    const { error, color, intl, ...passedProps } = this.props

    return (
      <Message color={color || 'red'} {...passedProps}>
        <FaClose /> {(
          error && error instanceof IntlError && error.formatMessage( intl ) ||
          error && error.message ||
          error
        )}
      </Message>
    )
  }
}

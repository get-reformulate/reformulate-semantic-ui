import React from 'react'
import { Form as ReformulateForm } from '../reformulate'
import { Message, Form as SemanticUIForm } from 'semantic-ui-react'

export default class Form extends ReformulateForm {
  render () {
    const { props: { className, children, inverted, size, widths }, state: { loading } } = this

    return (
      <SemanticUIForm
        onSubmit={this.onSubmit}
        error={!!this.hasErrors()}
        {...{ loading, className, inverted, size, widths, children }}
      />
    )
  }
}

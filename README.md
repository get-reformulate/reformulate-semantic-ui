<img width="100%" alt="reformulate logo" src="https://cloud.githubusercontent.com/assets/3604053/24004385/22eea1c4-0a5e-11e7-989c-fdf3757bda2a.png" />

<center><h3>Reformulate meets Semantic UI React Edit</h3></center>

<img width="100%" alt="reformulate error" src="http://g.recordit.co/q5eUzJS4KH.gif" />


# reformulate-semantic-ui

React Forms with batteries loaded:
- Field/Form Validation
- State management
- React Intl
- **Semantic UI**

## Installation
```bash
yarn add reformulate reformulate-semantic-ui
```


## Usage

### Load up locale messages
```javascript
import ptReformulateLocaleData from 'reformulate/build/locale/pt'
import enReformulateLocaleData from 'reformulate/build/locale/en'

// merge locale messages into yours
// Example:

export default {
  ...enReformulateLocaleData,
  'my.nice.message': 'YOLO'
}
```

### Build up your forms
```javascript
import React, { Component } from 'react'
import { validate } from 'reformulate'
import { Form, InputField, SubmitButton } from 'reformulate-semantic-ui'

export default class LoginComponent extends Component {
  render () {
    const { onSubmit } = this
    return (
      <Form onSubmit={onSubmit}>
        <InputField name='username'
          validate={validate.combine(
            validate.notEmpty(),
            validate.maxLength( 255 )
          )}
        />

        <InputField name='password' type='password'
          validate={validate.combine(
            validate.notEmpty(),
            validate.maxLength( 255 )
          )}
        />

        <SubmitButton />
      </Form>
    )
  }

  onSubmit = async ( values ) => {
    // ...
  }
}

```

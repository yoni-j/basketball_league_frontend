import { useFormikContext } from 'formik'
import { isEmpty } from 'lodash-es'
import React from 'react'

function Errors() {
  const { errors } = useFormikContext()

  return (
    <ul className="error-messages">
      {!isEmpty(errors) && errors }
    </ul>
  )
}

export default Errors
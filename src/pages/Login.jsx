import React from 'react'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Errors } from '../components'
import { useAuth } from '../hooks'
import Button from 'react-bootstrap/Button';

function Login() {
  const { login, isAuth } = useAuth()

  async function handelSubmit({ username, password }, { setErrors }) {
    try {
      const { data } = await axios.post('/api-token-auth/', { username: username, password: password })
      login(data)
      window.location.href= "/"

    } catch (err) {
        console.log(err.response)
      setErrors(err.response.data.detail)
    }
  }

  return (
    <div className="login-page">
        <h1>Sign In</h1>
        <Formik initialValues={{ username: '',  password: '' }} onSubmit={handelSubmit}>
            {({ isSubmitting }) => (
            <>
                <Errors />
                <Form>
                    <fieldset className="form-group" disabled={isSubmitting}>
                    <Field
                        type="text"
                        name="username"
                        className="form-control form-control-lg"
                        placeholder="User Name"
                    />
                    </fieldset>

                    <fieldset className="form-group" disabled={isSubmitting}>
                        <Field
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        />
                    </fieldset>

                    <Button disabled={isSubmitting} type="submit" variant="primary" className="btn btn-lg btn-primary pull-xs-right">
                        Sign In
                    </Button>
                </Form>
            </>
            )}
        </Formik>
    </div>
  )
}

export default Login
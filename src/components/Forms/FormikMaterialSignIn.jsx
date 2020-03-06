import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { loginHandler } from '../utils/axiosWithAuth';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

 function MaterialForm({values, errors, isSubmitting}) {
  const classes = useStyles();

  return (
    <Form className={classes.root} noValidate autoComplete="off">
      <div>
        <Field
          // error
          name='email'
          id="email"
          label="E-mail"
          as={TextField}
          type='email'
          
          variant="outlined"
        />
      </div>
      <div>
        <Field
          // error
          id="username"
          label="Username"
          name='username'
          as={TextField}
          
          variant="outlined"
        />
      </div>
      <div>
        <Field
          // error
          id="password"
          label="Password"
          name='password'
          type='password'
          
          as={TextField}
          variant="outlined"
        />
      </div>
      <div>
          <Field
            type='submit'
            disabled={isSubmitting}
            as={Button}
            variant='contained'>Sign In</Field>
      </div>
    </Form>
  );
}

const FormikMaterialSignIn = withFormik ({
    mapPropsToValues({email, username, password}) {
        return{
            email: email || '',
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
                .email(),
      username: Yup.string()
                   .required(),
      password: Yup.string()
                   .required()         
    }),

    handleSubmit (values, {resetForm, setSubmitting}) {
      loginHandler(values);
      setSubmitting();
      resetForm();
    }
})(MaterialForm)

export default FormikMaterialSignIn;
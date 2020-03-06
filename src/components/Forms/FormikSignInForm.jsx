import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';



const SignInForm = ({touched, errors, isSubmitting}) => {
    
    const [user, setUser] = useState({username: '', password: ''})
    
    return (
        <Form>
            <label htmlFor='username'>Username: </label>
            <Field type='text' id='username' name='username' placeholder='Username'/>
            {errors.username && touched.username && <span>{errors.username}</span>}
            <label htmlFor='password'>Password: </label>
            <Field type='password' id='password' name='password' placeholder='Password'/>
            {errors.password && touched.password && <span>{errors.password}</span>}
            <button type='submit' disabled={isSubmitting}>Submit</button>
        </Form>
    );
};

const FormikSignInForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
                     .required('You must enter a valid username'),
        password: Yup.string()
                    //  .min(6, 'You must enter a valid password that is at least 6 characters in length')
                     .required('You must enter a valid password')  
    }),

    handleSubmit(values, {resetForm, setSubmitting}) {
        console.log(values);
        axios.post('https://build-week-04-med-cabinet.herokuapp.com/api/auth/login', values)
             .then(res => {
                 console.log(res)
                 resetForm();
                 setSubmitting(false);
             })
             .catch(err => {
                 console.log(err);
                 setSubmitting(false);
             });
    }

})(SignInForm)

export default FormikSignInForm;
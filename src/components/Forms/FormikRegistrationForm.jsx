import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const NewForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const NewField = styled(Field)`
    
`;

const NewSpan = styled.span`
    color: red;
`;



const RegistrationForm = ({values, errors, touched, isSubmitting}) => {
    
    // const [user, setUser] = useState({username: '', password: '', email: '', medicinalUse: '', tolerance: '', medicalConditions: '', desiredEffect: ''})

    // const handleChange = e => {
    //     setUser({...user, [e.target.name]: e.target.value});
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();
    // }
    
    return (
        <div>
            <NewForm>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <NewField type='text' id='username' name='username' placeholder='Username'/>
                    {touched.username && errors.username && <NewSpan>{errors.username}</NewSpan>}
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <NewField type='password' id='password' name='password' placeholder='Password'/>
                    {touched.password && errors.password && <NewSpan>{errors.password}</NewSpan>}
                </div>
                <div>
                    <label htmlFor='email'>E-mail: </label>
                    <NewField type='email' id='email' name='email' placeholder='E-mail' />
                    {touched.email && errors.email && <NewSpan>{errors.email}</NewSpan>}
                </div>
                <div>
                    <label htmlFor='medicinalUse'>Medicinal Use: </label>
                    <Field type='checkbox' id='medicinalUse' name='medicinalUse'/>
                </div>
                <div>
                <label htmlFor ='tolerance'>Tolerance Level: </label>
                    <NewField component='select' id='tolerance' name='tolerance' placeholder='Tolerance Level 0 - 4' checked={values.tolerance}>
                        <option value='0'>No Tolerance</option>
                        <option value='1'>Beginner Tolerance</option>
                        <option value='2'>Intermediate Tolerance</option>
                        <option value='3'>Regular Tolerance</option>
                        <option value='4'>High Tolerance</option>
                    </NewField>
                </div>
                <div>
                    <label htmlFor='medicalConditions'>Medical Conditions: </label>
                    <NewField type='text' id='medicalConditions' name='medicalConditions' placeholder='Medical Conditions'/>
                </div>
                <div>
                    <label htmlFor='desiredEffect'>Desired Effect: </label>
                    <NewField type='text' id='desiredEffect' name='desiredEffect' placeholder='Desired Effect' />
                </div>
                <div>
                    <label htmlFor='ageGate'>I hereby certify that I am 21 years old or older: </label>
                    <Field type='checkbox' id='ageGate' name='ageGate'/>
                </div>
                <div>
                    <button type='submit' disabled={isSubmitting}>Submit</button>
                </div>
            </NewForm>
            
        </div>
    );
};

const FormikRegistrationForm = withFormik({
    mapPropsToValues({username, password, email, medicinalUse, tolerance, medicalConditions, desiredEffect, ageGate}){
        return{
            username: username || '',
            password: password || '',
            email: email || '',
            medicinalUse: medicinalUse || false,
            tolerance: tolerance || '0',
            medicalConditions: medicalConditions || '',
            desiredEffect: desiredEffect || '',
            ageGate: ageGate || false

        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
                     .required('You must enter a username'),
        password: Yup.string()
                     .min(6, 'Password must be 6 characters or longer')
                     .required('You must enter a password'),
        email: Yup.string()
                  .email('E-mail is not valdid')

            
    }),

    handleSubmit(values, { resetForm, setSubmitting }){
        console.log(values)
        axios.post('https://build-week-04-med-cabinet.herokuapp.com/api/auth/register', values)
             .then(res => {
                 console.log(res);
                 resetForm();
                 setSubmitting(false);
             })
             .catch(err => {
                 console.log(err);
                 setSubmitting(false);
             });
    
        
    }

})(RegistrationForm);

export default FormikRegistrationForm;
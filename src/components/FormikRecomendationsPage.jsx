import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';


const RecommendationsPage = () => {
    
   
    
    return (
        <Form>
            <Field id='medicalConditons' name='medicalConditions' type='text' placeholder='Medical Conditions'/> 
            <button type='submit'>Submit</button>
        </Form>
    );
};

const FormikRecommendationsPage = withFormik({
    mapPropsToValues({medicalConditions}) {
        return{
            medicalConditions: medicalConditions || ''
        }
    },

    handleSubmit(values, { setSubmitting }){
        console.log(values);
        const stringValues = JSON.stringify(values);
        console.log(stringValues);
        axios.post('https://cors-anywhere.herokuapp.com/https://med-cab-app.herokuapp.com/test', stringValues)
             .then(res => {
                 console.log(res);
                 setSubmitting();
             })
             .catch(err => {
                 console.log(err);
                 setSubmitting();
             })
    }
})(RecommendationsPage)

export default FormikRecommendationsPage;
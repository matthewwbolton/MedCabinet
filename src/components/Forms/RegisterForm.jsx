import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';


const NewForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewInput = styled.input`
    width: 20%;
    margin: 1%;
`;

const NewLabel = styled.label`
    margin: 1%;
    color: #2F5973;
`;

const Submit = styled.input`
    width: 20%;
    margin: 1%;
    color: white;
    background-color: #70BCCF
`;

const NewSpan = styled.span`
    color: red;
`;

const RegisterForm = () => {
    
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        
        <NewForm onSubmit={handleSubmit(onSubmit)}>
            <NewLabel>Username:</NewLabel>
            <NewInput name='userName' ref={register({required: true})} />
            {errors.userName && <NewSpan>This field is required</NewSpan>}
            <NewLabel>Password:</NewLabel>
            <NewInput name='password' ref={register({required: true})} />
            {errors.password && <NewSpan>This field is required</NewSpan>}
            <NewLabel>Medicinal Use:</NewLabel>
            <NewInput name='medicinalUse' ref={register} />
            <NewLabel>Tolerance:</NewLabel>
            <NewInput name='tolerance' ref={register} />
            <NewLabel>Desired Effect:</NewLabel>
            <NewInput name='desiredEffect' ref={register} />
            <Submit type='submit' />
        </NewForm>
    );
};

export default RegisterForm;
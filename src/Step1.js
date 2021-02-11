import { Typography } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Form } from "./component/Form";
import { Input } from './component/Input';
import { MainContainer } from './component/MainContainer'
import { PrimaryButton } from "./component/PrimaryButton";



export const Step1 = () => {
    // const { register, handelSubmit, error } = useForm({
    //     mode: 'onBlur'
    // })

    const { register, handleSubmit } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <MainContainer>
            <Typography variant="h5" component="h5">Step 1</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id='firstName'
                    type='text'
                    label='First Name'
                    name='firstName' />
                <Input
                    ref={register}
                    id='lastName'
                    type='text'
                    label='Last Name'
                    name='lastName' />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
}

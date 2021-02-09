import Typography from 'material-ui/styles/typography'
import React from 'react'
import { MainContainer } from './component/MainContainer'
import { Form } from "./component/Form";

export const Step1 = () => {
    return (
        <MainContainer>
            <Typography variant="h5" component="h5">Step 1</Typography>
            <Form>
                <input type="text" />
                {/* 20min */}
            </Form>
        </MainContainer>
    );
}

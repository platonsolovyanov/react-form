import React from 'react'
import { TextField } from '@material-ui/core';

export const Input = React.forwardRef((props, ref) => {
    return (
        <TextField
            margin='normal'
            inputRef={ref}
            variant='outlined'
            fullWidth
            {...props}>asd</TextField>)
})
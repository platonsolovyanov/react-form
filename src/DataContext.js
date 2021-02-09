/** @format */

import React, { createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = React.useState({});

    const setValues = values => {
        setData(prevData => ({
            ...prevData,
            ...values,
        }));

        setData(() => ({}));
    };

    return <DataContext.Provider value={{ data, setValues }}>{children}</DataContext.Provider>;
};

export const useDate = () => useContext(DataContext)
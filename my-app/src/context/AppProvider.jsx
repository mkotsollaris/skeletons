import React from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {

    const [state, setState] = React.useState('check');

    return <AppContext.Provider value={{
        state, setState
    }} >
        {children}
    </AppContext.Provider>
}

export default AppProvider;
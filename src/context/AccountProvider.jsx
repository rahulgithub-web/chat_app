import {createContext, useState} from 'react';

export const AccountContext = createContext(null); 

const AccountProvider = ({children}) => {
    const [account, setAccount] = useState();

    return (
        <AccountProvider value={{
            account,
            setAccount
        }}>
        {children}
        </AccountProvider>
    )
};

export default AccountProvider;
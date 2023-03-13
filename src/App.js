// IMPORT
// DEPENDENCIES
import { useState } from 'react';
import Toolbar from './components/Toolbar';
// ROUTES
import { Login } from './routes/login';
import { NoLogin } from './routes/nologin';
// END IMPORT

export default function App() {
    // CONST
    const [authenticated] = useState(true);
    if (authenticated === true) {
        return (

            <Login />
        );
    } else {
        return (
            <NoLogin />
        );
    }
}
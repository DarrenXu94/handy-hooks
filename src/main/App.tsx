import * as React from 'react'
import FormValidationExample from "~/main/components/FormValidationExample";
import FetchRequestExample from "~/main/components/FetchRequestExample";
import LoginExample from './components/LoginExample';
import UserStoreExample from './components/UserStoreExample';
import { UserProvider } from './stores/UserStore';
import ComplexUserStoreExample from './components/ComplexUserStoreExample';
import ComplexSweetExample from './components/ComplexSweetExample';
import MultipleRequests from './components/MultipleRequests';

export default function App() {


    return (
        <div>

            {/* <FormValidationExample />
            <FetchRequestExample />
        <LoginExample /> */}
            {/* <UserStoreExample /> */}

            {/* <UserProvider>
                <ComplexUserStoreExample />
            </UserProvider> */}

            {/* <ComplexSweetExample /> */}

            <MultipleRequests />

        </div>
    )
}

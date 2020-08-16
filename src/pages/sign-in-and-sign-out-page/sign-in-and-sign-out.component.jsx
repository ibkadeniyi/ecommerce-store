import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-out.styles.scss';

const SignInSignOutPage = () => (
    
    <div className= 'sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignOutPage;
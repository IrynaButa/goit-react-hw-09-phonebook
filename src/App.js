
import React, {Suspense, lazy, useEffect } from 'react';
import { Switch} from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';

import PrivateRoute from './Components/Routes/PrivateRoute';
import PublicRoute from './Components/Routes/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import {  useDispatch } from 'react-redux';
import Loader from './Components/Loader/Loader';


const HomeView = lazy(() => import('./Pages/HomePage/HomePage'));
const RegisterView = lazy(() => import('./Pages/RegPage/RegisterPage'));
const LoginView = lazy(() => import('./Pages/LoginPage/LoginPage'));
const PhoneBook = lazy(() => import('./Pages/PhoneBook/PhoneBook'));


export default function App() {
  const dispatch = useDispatch();
 useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
     <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          
          <Switch>
          <PublicRoute exact path="/">
                        <HomeView />
            </PublicRoute>
            <PublicRoute
                        path="/register"
                        restricted
                        redirectTo="/contacts"
                    >
                        <RegisterView />
                    </PublicRoute>

                    <PublicRoute path="/login" restricted redirectTo="/contacts">
                        <LoginView />
                    </PublicRoute>

                    <PrivateRoute path="/contacts" redirectTo="/login">
                        <PhoneBook />
                    </PrivateRoute>
        </Switch>
       </Suspense>
     </>
    );
  }


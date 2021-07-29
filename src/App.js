
import React, { Component,  Suspense, lazy, useEffect } from 'react';
import { Switch} from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';

import PrivateRoute from './Components/Routes/PrivateRoute';
import PublicRoute from './Components/Routes/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Components/Loader/Loader';


const HomeView = lazy(() => import('./Pages/HomePage/HomePage'));
const RegisterView = lazy(() => import('./Pages/RegPage/RegisterPage'));
const LoginView = lazy(() => import('./Pages/LoginPage/LoginPage'));
const PhoneBook = lazy(() => import('./Pages/PhoneBook/PhoneBook'));


export default function App () {
  useEffect(() => dispatch(authOperations.onGetCurretnUser()), [dispatch]);



 
  
// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurretnUser();
//   }

//   render() {
    return (
     <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          
          <Switch>
          <PublicRoute exact path="/"  component={HomeView} />
          <PublicRoute path="/register"  restricted redirectTo="/contacts" component={RegisterView} />
          <PublicRoute path="/login"  restricted redirectTo="/contacts" component={LoginView} />
          <PrivateRoute path="/contacts" redirectTo="/login" component={PhoneBook} />
        </Switch>
       </Suspense>
     </>
    );
  }


// const mapDispatchToProps = {
//   onGetCurretnUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);


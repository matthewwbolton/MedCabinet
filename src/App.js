import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import FormikMaterialSignIn from './components/Forms/FormikMaterialSignIn';
import FormikRegistrationForm from './components/Forms/FormikRegistrationForm';
import FormikContactForm from './components/Forms/FormikContactForm';
import Strains from './components/Strains/Strains';
import FormikRecommendationsPage from './components/FormikRecomendationsPage';
import IndividualStrainPage from './components/IndividualStrainPage';
import StrainDetails from './components/Strains/StrainDetails';







function App() {
  return (
    <div className="App">
      <Route path='/'>
        <NavigationBar />
      </Route>
      <Route exact path ='/'>
        <FormikMaterialSignIn />
      </Route>
      <Route path='/register'>
        <FormikRegistrationForm />
      </Route>
      <Route path='/contact'>
        <FormikContactForm />
      </Route>
      <Route exact path='/strains'>
        <Strains />
        <FormikRecommendationsPage />
      </Route>
      <Route  exact path='/strains/:id'>
        <IndividualStrainPage />
      </Route>
      <Route path='/database'>
        <StrainDetails />
      </Route>
     
     
    </div>
  );
}

export default App;

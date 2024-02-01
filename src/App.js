import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/dashboard";


const App = () => {  
 return (
           <Provider store={store}>
           <PersistGate loading={null} persistor={persistor}>
           <Routes>
              <Route path='/' element={<Dashboard/>}/>
           </Routes> 
           </PersistGate>
           </Provider> 
  );
};

export default App;

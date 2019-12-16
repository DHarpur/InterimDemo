import React, { Component } from 'react';
import LoginComponent from './UserComponents/LoginComponent';
import CardComponent from './Cards/CardComponent';
import RegisterComponent from './UserComponents/RegisterComponent';
import TitleHeader from './TitleHeader';

class AppComponent extends Component {
    render() {
        return (
          <div style={{backgroundColor: 'cyan', height: '100%'}}>
            <TitleHeader />
            <div style={{display: 'block', margin: 'auto', textAlign: 'center'}}>
              <LoginComponent />
              <RegisterComponent />
            </div>
            <div style={{display: 'block', margin: 'auto', textAlign: 'center'}}>
              <CardComponent title="BladeRunner 2049"/>  
            </div>  
          </div>
        );
    }
}

export default AppComponent;
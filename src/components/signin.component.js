import React, { Component } from 'react';



export default class SignIn extends Component {

  componentDidMount() {
    console.log('Loading')

    window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
            client_id: '293901008493-duqun9t52bo7dtjbo4n1900nite8sube.apps.googleusercontent.com'
        })
    })
    console.log('Api inited')

  }



//Adding button
    render() {
        return (
            <div>
                <h3>SignIn Page</h3>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
          
                
            </div>
        )

       
        <script>
            function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            }
        </script>
        
    
        
    }

    
      
    
}

import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {LOAD_USER} from '../actions/types';
import {loadUser} from '../actions/auth';


const App = (props) => {

    const {user, loadUser, userLoaded} = props;

    const [state, setState] = useState({
       spinner: true 
    });

    const {spinner} = state;
    useEffect(() => {
              
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                loadUser({user:result});

            }
        });

        setState({...state, spinner: false});
        console.log("here2");


    }, [])


    if(spinner)
        {
            console.log("here1");
            return(
                <View> 
                    <Text>spinner</Text>
                </View>
            );
        }

    else if(userLoaded){
        return props.navigation.navigate('SalmooniDashboard');
    }
    
    else {
        return(
            <View>
                <Text>Home</Text>
                <Button
                    title="Login"
                    onPress={() => props.navigation.push('Login')}
                />
                <Button
                    title="Register salmooni"
                    onPress={() => props.navigation.navigate('SalmooniRegister')}
                />
            </View>
        );
    }
}


const mapStateToProps = state => ({
    user: state.auth.user,
    userLoaded: state.auth.loaded
});

export default connect(mapStateToProps, {loadUser})(App);
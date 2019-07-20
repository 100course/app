import React from 'react';
import {Text, View, Button} from 'react-native';


const App = (props) => {

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


export default App;
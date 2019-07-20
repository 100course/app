import React, {useState, useEffect} from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, View } from 'native-base';
import MapView, {Marker} from 'react-native-maps';



const SalmooniRegister = () => {

    const [state, setState] = useState({
       latitude : 0,
       longitude: 0,
       mobile: '', 
       name: '' 
    });

    const {latitude, longitude, mobile, name} = state;
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(positon => {
            setState({
                ...state, 
                latitude: positon.coords.latitude,
                longitude: positon.coords.longitude
            }, error => console.log('got error in map')); 
        })
   },[])

   const onChangeMobile = e => {
       setState({...state, mobile:e});
   }

   const onChangeName = e => {
       setState({...state, name: e});
   }

   const onSubmit = () => {
        console.log("submit");
   };

    return(
        <View>
        {/* <Container>
        <Header />
        <Content>
          <Form>
            <Item>
                <Input placeholder="mobile" onChangeText={e => onChangeMobile(e)}/>
            </Item>
            <Item>
                <Input placeholder="name" onChangeText={e => onChangeName(e)}/>
            </Item>
          </Form>
          <Button rounded light onPress={onSubmit}>
            <Text>Register</Text>
          </Button>
        </Content>
      </Container> */}
      <MapView>

      </MapView>
      </View>

    );
}

export default SalmooniRegister;
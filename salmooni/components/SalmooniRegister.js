import React, {useState, useEffect} from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, View } from 'native-base';
import {register, loadUser} from '../actions/auth';
import {connect} from 'react-redux';
import {AsyncStorage} from '@react-native-community/async-storage';



const SalmooniRegister = ({user, register, loadUser}) => {

  useEffect(() => {
    //console.log("here i am");
    let _user = '';
    async function getUser() { 

      _user = await AsyncStorage.getItem('user');
      console.log("user loaded:");

    }
    getUser();
    if(_user !== '')
      loadUser(_user);
  },[]);

    const [formData, setFormData] = useState({
       mobile: '', 
       name: '' 
    });

    const {mobile, name} = formData;


   const onChangeMobile = e => {
       setFormData({...formData, mobile:e});
   }

   const onChangeName = e => {
       setFormData({...formData, name:e});
   }

   const onSubmit = () => {
        register(formData);
   };

    return(

        <Container>
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
      </Container>
   
    );

}


const mapSateToProps = state => ({
  user: state.auth.user
}); 


export default connect(mapSateToProps, {register, loadUser})(SalmooniRegister);
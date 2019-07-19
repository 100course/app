import React, { Component, useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, View } from 'native-base';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import {Card} from 'react-native-material-ui';



const Login = ({user, login}) => {

    const [formData, setFormData] = useState({
        mobile: ''

    });
    
    const {mobile} = formData;

    const onChangeMobile = e => {
        setFormData({...formData, mobile:e});
    }


    const onSubmit = () => {
      console.log('here');
        login({mobile});
    }

    useEffect(() => {
        console.log("user: ", user);
    },[user]);


    if(user === '') {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="mobile" onChangeText={e => onChangeMobile(e)}/>
            </Item>
          </Form>
          <Button rounded light onPress={onSubmit}>
            <Text>sign in</Text>
          </Button>
        </Content>
      </Container>
    );
    }
    else {
      return(
        <View>
          <Card>
            <Text>{user.name}</Text>
          </Card>
        </View>
      );
    }
};

const mapStateToProps = state => ({
    user:state.auth.user
});

export default connect(mapStateToProps, {login})(Login);
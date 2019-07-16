import React, { Component, useState, useEffect } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import {connect} from 'react-redux';
import {login} from '../actions/auth';



const Login = () => {

    const [formData, setFormData] = useState({
        mobile: ''

    });
    
    const {mobile} = formData;

    const onChangeMobile = e => {
        setFormData({...formData, mobile:e});
    }


    const onSubmit = () => {
        login({mobile});
    }

    useEffect(() => {
        console.log(user);
    },[user]);

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

};

const mapStateToProps = state => {
    user:state.auth.user
};

export default connect(mapStateToProps, {login})(Login);
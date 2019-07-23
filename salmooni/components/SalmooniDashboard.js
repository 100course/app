import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Button, Text, Card, CardItem, Body, View } from 'native-base';
import { ScrollView } from 'react-native';
import { logOut } from '../actions/auth';
import SalmooniTimeCard from '../components/SalmooniTimeCard';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';




const SalmooniDashboard = ({ navigation, logOut }) => {

  const [state, setState] = useState({
    times: [],
    adding: false,
    isDateTimePickerVisible: false,
    whichTime: '',
    start: '', 
    end: ''
  });

  const { times, adding, isDateTimePickerVisible, whichTime, start, end } = state;
  const logout = () => {
    logOut();
    navigation.navigate('Home');

  }

  const addTime = () => {
    setState({ ...state, adding: true })
  };

  const setStartTime = () => {
      setState({...state, isDateTimePickerVisible: true, whichTime:'start'})
  };

  const setEndTime = () => {
    setState({...state, isDateTimePickerVisible: true, whichTime:'end'})

  };

  const setTime = e => {
    let a = moment(e).format('MMMM, Do YYYY HH:mm').split(" ");
    setState({...state, isDateTimePickerVisible: false, [whichTime]: a[3]});

  };

  const submitNewTime = () => {
    setState({...state,
      times: [...state.times, {start, end}],
      adding: false
    });
  
  };

  if (!adding) {
    return (
      <ScrollView>
        {times.map(time => <SalmooniTimeCard time={time} />)}
        <Button rounded dark onPress={() => addTime()}>
          <Text>add</Text>
        </Button>
        <Button rounded danger onPress={() => logout()}>
          <Text>logout</Text>
        </Button>
      </ScrollView>
    );
  }
  else {
    return (
      <View>
      <Card>
        <CardItem>
          <Body>
            <Text>
              start
            </Text>
            <Button rounded light onPress={() => setStartTime()}>
              <Text>edit</Text>
            </Button>
            <Text>
              {start}
            </Text>
            <Text>
              end
            </Text>
            <Button rounded light onPress={() => setEndTime()}>
              <Text>edit</Text>
            </Button>
            <Text>
              {end}
            </Text>
          </Body>
        </CardItem>
      </Card>
      <DateTimePicker
        isVisible = {isDateTimePickerVisible}
        onConfirm = {(e) =>  setTime(e)}
        mode = {'time'}
        />

      <Button rounded light onPress={() => submitNewTime()}>
        <Text>submit</Text>
      </Button>
      </View>
    )
  }

};



export default connect(null, { logOut })(SalmooniDashboard);
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, { Fragment } from 'react';

// type Props = {};

const safeConspect = () => {
  return (
    <Fragment>
    <SafeAreaView style={{backgroundColor:'yellow',flex: 0,}}/>
    <SafeAreaView style={{backgroundColor:'red', flex:1}}>
          <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'dark-content'}
      
        hidden={false} /> 
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <Text>safeConspect</Text>
    </View>
    </SafeAreaView>
    </Fragment>
  );
};

export default safeConspect;

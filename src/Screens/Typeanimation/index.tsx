import {View, Text, SafeAreaView, Image, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AnimatedTyping from '../../../AnimatedTyping';

// type Props = {}

const Typeanimation = () => {
  let [firstPressed, setFirstPressed] = useState(true);
  let [secPressed, setSecPressed] = useState(false);
  let [thirdPressed, setThirdPressed] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          delay: 500,
          useNativeDriver: true, // <-- Add this
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1500,
          // delay:1000,
          useNativeDriver: true, // <-- Add this
        }),
      ]),
      // {
      //   iterations: 4,
      // },
    ).start();
  }, [fadeAnim]);

  const first = () => {
    setSecPressed(true);
    setFirstPressed(false);
  };
  const second = () => {
    setSecPressed(false);
    setThirdPressed(true);
  };
  const third = () => {
    setFirstPressed(true);
    setThirdPressed(false);
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Animated.View style={{flex: 0.4, opacity: fadeAnim}}>
          <View style={{flex: 0.6}} />

          <Image
            style={{width: 80, height: 80}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </Animated.View>
        {firstPressed ? (
          <AnimatedTyping text={['Hello :)']} onComplete={first} />
        ) : undefined}
        {secPressed ? (
          <AnimatedTyping text={['Good Morning :)']} onComplete={second} />
        ) : undefined}
        {thirdPressed ? (
          <AnimatedTyping text={['Have a Nice Day ...']} onComplete={third} />
        ) : undefined}
        <Text style={{color: '#777777'}}> loading ...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Typeanimation;

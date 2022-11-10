import React, {useEffect, useState} from 'react';
import {Keyboard, Animated} from 'react-native';
import {IS_ANDROID} from '../constants/LAYOUT';
import Box from './Box';

const KeyboardSpacer = ({
  androidOnly,
  iosOnly,
  keyboardOffset,
  duration,
  keyboardHeightPercentage,
}) => {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [heightLevel] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(heightLevel, {
      useNativeDriver: false,
      toValue: isKeyboard,
      duration: duration || 200,
    }).start();
  }, [isKeyboard]);

  const height = heightLevel.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handleOpenKeyboard = e => {
    setIsKeyboard(
      e.endCoordinates.height * (keyboardHeightPercentage || 1) +
        (keyboardOffset || 0) || 0,
    );
  };
  const handleDismissKeyboard = () => {
    setIsKeyboard(0);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleOpenKeyboard);
    Keyboard.addListener('keyboardDidHide', handleDismissKeyboard);
    return () => {
      Keyboard.removeListener('keyboardDidShow', handleOpenKeyboard);
      Keyboard.removeListener('keyboardDidHide', handleDismissKeyboard);
    };
  }, []);

  if (androidOnly && !IS_ANDROID) {
    return null;
  }
  if (iosOnly && IS_ANDROID) {
    return null;
  }

  return <Box animated height={height} />;
};

export default KeyboardSpacer;

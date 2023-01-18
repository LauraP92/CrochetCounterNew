import React from 'react';
import {StyleSheet} from 'react-native';
import {GREY, LIGHT_GREY, YARN_ORANGE} from '../constants/COLOUR';
import {SPACE_SMALL} from '../constants/LAYOUT';
import {hp} from '../utils/getResponsiveSize';
import Box from './Box';
import TemplateText from './TemplateText';

const QuantityCircle = ({item, onPress, isActive, color}) => (
  <Box
    width={hp(40)}
    aspectRatio={1}
    radius={hp(20)}
    mr={SPACE_SMALL}
    center
    borderWidth={hp(2)}
    borderColor={color || YARN_ORANGE}
    backgroundColor={isActive ? color || YARN_ORANGE : LIGHT_GREY}
    onPress={onPress}>
    <TemplateText medium color={isActive ? LIGHT_GREY : GREY}>
      {`x${item}`}
    </TemplateText>
  </Box>
);

export default QuantityCircle;

const styles = StyleSheet.create({});

import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {LIGHT_GREY, PRIMARY} from '../constants/COLOUR';
import {RADIUS_SMALL, SPACE_MEDIUM} from '../constants/LAYOUT';
import Box from './Box';
import TemplateIcon from './icons/TemplateIcon';

export default ({
  refField,
  children,
  style,
  italic,
  light,
  lightItalic,
  medium,
  mediumItalic,
  semibold,
  semiboldItalic,
  bold,
  boldItalic,
  heavy,
  heavyItalic,
  regularG,
  showWarning,
  heigth,
  ...restProps
}) => {
  // let fontFamily = 'Montserrat-Regular';

  // if (italic) {
  //   fontFamily = 'Montserrat-RegularItalic';
  // }
  // if (light) {
  //   fontFamily = 'Montserrat-Light';
  // }
  // if (lightItalic) {
  //   fontFamily = 'Montserrat-LightItalic';
  // }
  // if (medium) {
  //   fontFamily = 'Montserrat-Medium';
  // }
  // if (mediumItalic) {
  //   fontFamily = 'Montserrat-MediumItalic';
  // }
  // if (semibold) {
  //   fontFamily = 'Montserrat-Semibold';
  // }
  // if (semiboldItalic) {
  //   fontFamily = 'Montserrat-SemiboldItalic';
  // }
  // if (bold) {
  //   fontFamily = 'Montserrat-Bold';
  // }
  // if (boldItalic) {
  //   fontFamily = 'Montserrat-BoldItalic';
  // }
  // if (heavy) {
  //   fontFamily = 'Montserrat-Heavy';
  // }
  // if (heavyItalic) {
  //   fontFamily = 'Montserrat-HeavyItalic';
  // }
  // if (regularG) {
  //   fontFamily = 'Gluten-Regular';
  // }

  return (
    <Box
      borderWidth={1}
      borderColor={PRIMARY}
      height={heigth || 46}
      radius={RADIUS_SMALL}
      backgroundColor={LIGHT_GREY}
      row>
      <TextInput
        ref={refField}
        autoCorrect={false}
        autoComplete="off"
        style={[{flex: 1, paddingHorizontal: SPACE_MEDIUM}, style]}
        returnKeyType={'done'}
        {...restProps}
      />
      {!!showWarning && (
        <Box center mh={SPACE_MEDIUM}>
          <TemplateIcon
            name="error-outline"
            family="MaterialIcons"
            size={18}
            color={PRIMARY}
          />
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({});

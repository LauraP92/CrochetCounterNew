import React from 'react';
import {Text} from 'react-native';
import {LIGHT_GREY} from '../constants/COLOUR';

const TemplateText = ({
  mAll,
  mt,
  mb,
  mh,
  mv,
  ml,
  mr,
  pAll,
  pv,
  ph,
  pl,
  pt,
  pr,
  pb,
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
  mediumG,
  blackG,
  boldG,
  extraboldG,
  extralightG,
  lightG,
  semiboldG,
  thinG,
  center,
  size,
  capitalize,
  uppercase,
  lowercase,
  underline,
  color,
  strikethrough,
  style = {},
  children,
  ...restProps
}) => {
  const defaults = {
    fontSize: 14,
    color: LIGHT_GREY,
  };

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
  // if (mediumG) {
  //   fontFamily = 'Gluten-Medium';
  // }
  // if (blackG) {
  //   fontFamily = 'Gluten-Black';
  // }
  // if (boldG) {
  //   fontFamily = 'Gluten-Bold';
  // }
  // if (extraboldG) {
  //   fontFamily = 'Gluten-ExtraBold';
  // }
  // if (extralightG) {
  //   fontFamily = 'Gluten-ExtraLight';
  // }
  // if (lightG) {
  //   fontFamily = 'Gluten-Light';
  // }
  // if (semiboldG) {
  //   fontFamily = 'Gluten-SemiBold';
  // }
  // if (thinG) {
  //   fontFamily = 'Gluten-Thin';
  // }

  return (
    <Text
      style={[
        {...defaults},
        // {fontFamily},
        !!mAll && {margin: mAll},
        !!mt && {marginTop: mt},
        !!mb && {marginBottom: mb},
        !!ml && {marginLeft: ml},
        !!mr && {marginRight: mr},
        !!mh && {marginHorizontal: mh},
        !!mv && {marginVertical: mv},
        !!pAll && {padding: pAll},
        !!ph && {paddingHorizontal: ph},
        !!pv && {paddingVertical: pv},
        !!pl && {paddingLeft: pl},
        !!pt && {paddingTop: pt},
        !!pr && {paddingRight: pr},
        !!pb && {paddingBottom: pb},
        !!size && {fontSize: size},
        center && {textAlign: 'center'},
        capitalize && {textTransform: 'capitalize'},
        uppercase && {textTransform: 'uppercase'},
        lowercase && {textTransform: 'lowercase'},
        underline && {textDecorationLine: 'underline'},
        strikethrough && {textDecorationLine: 'line-through'},
        !!color && {color},
        style,
      ]}
      {...restProps}>
      {children}
    </Text>
  );
};

export default TemplateText;

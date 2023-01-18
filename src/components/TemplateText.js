import React from 'react';
import {Text} from 'react-native';
import {LIGHT_GREY} from '../constants/COLOUR';
import {hp} from '../utils/getResponsiveSize';

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
    fontSize: hp(14),
    color: LIGHT_GREY,
  };

  return (
    <Text
      style={[
        {...defaults},
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

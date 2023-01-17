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

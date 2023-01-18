import React from 'react';
import {PRIMARY} from '../constants/COLOUR';
import {RADIUS_SMALL} from '../constants/LAYOUT';
import {hp} from '../utils/getResponsiveSize';
import Box from './Box';
import TemplateText from './TemplateText';

const TemplateActionButton = ({onPress, children, disabled, ...restProps}) => (
  <Box
    onPress={onPress}
    backgroundColor={PRIMARY}
    height={hp(50)}
    radius={RADIUS_SMALL}
    center
    disabled={disabled}
    {...restProps}>
    <TemplateText size={hp(20)}>{children}</TemplateText>
  </Box>
);

export default TemplateActionButton;

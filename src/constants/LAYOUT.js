import {Dimensions, Platform} from 'react-native';
import {hp} from '../utils/getResponsiveSize';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const isSmallDevice = SCREEN_WIDTH < 375;
export const IS_ANDROID = Platform.OS === 'android';

export const RADIUS_XSMALL = hp(5);
export const RADIUS_SMALL = hp(10);
export const RADIUS_MEDIUM = hp(15);
export const RADIUS_LARGE = hp(20);
export const RADIUS_XLARGE = hp(25);
export const RADIUS_XXLARGE = hp(30);

export const SPACE_XSMALL = hp(5);
export const SPACE_SMALL = hp(10);
export const SPACE_MEDIUM = hp(15);
export const SPACE_LARGE = hp(20);
export const SPACE_XLARGE = hp(25);
export const SPACE_XXLARGE = hp(30);

export const BORDER_XSMALL = hp(1);
export const BORDER_SMALL = hp(2);
export const BORDER_MEDIUM = hp(3);
export const BORDER_LARGE = hp(4);

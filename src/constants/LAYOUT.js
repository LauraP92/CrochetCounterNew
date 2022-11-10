import {Dimensions, Platform} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const isSmallDevice = SCREEN_WIDTH < 375;
export const IS_ANDROID = Platform.OS === 'android';

export const RADIUS_XSMALL = 5;
export const RADIUS_SMALL = 10;
export const RADIUS_MEDIUM = 15;
export const RADIUS_LARGE = 20;
export const RADIUS_XLARGE = 25;
export const RADIUS_XXLARGE = 30;

export const SPACE_XSMALL = 5;
export const SPACE_SMALL = 10;
export const SPACE_MEDIUM = 15;
export const SPACE_LARGE = 20;
export const SPACE_XLARGE = 25;
export const SPACE_XXLARGE = 30;

export const BORDER_XSMALL = 1;
export const BORDER_SMALL = 2;
export const BORDER_MEDIUM = 3;
export const BORDER_LARGE = 4;

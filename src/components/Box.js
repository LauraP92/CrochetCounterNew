import React from 'react';
import {TouchableOpacity, View, StyleSheet, Animated} from 'react-native';
import {PRIMARY} from '../constants/COLOUR';
import {IS_ANDROID} from '../constants/LAYOUT';
// import LinearGradient from 'react-native-linear-gradient';
// import {GRADIENT_END, GRADIENT_START, PRIMARY} from '../constants/COLOUR';
import SHADOW from '../constants/SHADOW';

const Box = ({
  animated,
  shadow,
  lightShadow,
  darkShadow,
  children,
  center,
  vCenter,
  hCenter,
  selfCenter,
  spaceBetween,
  flex,
  flexGrow,
  row,
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
  width,
  minWidth,
  minHeight,
  height,
  radius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  justifyContent,
  alignItems,
  backgroundColor,
  aspectRatio,
  borderWidth,
  borderColor,
  absolute,
  top,
  bottom,
  left,
  right,
  opacity,
  zIndex,
  style,
  onPress,
  activeOpacity,
  hGradient,
  vGradient,
  gradientStartColor,
  gradientEndColor,
  gradientStartBalance,
  gradientEndBalance,
  disabled,
  overflow,
  ...restProps
}) => {
  // eslint-disable-next-line no-nested-ternary
  const Component = onPress
    ? TouchableOpacity
    : animated
    ? Animated.View
    : View;
  return (
    <Component
      style={[
        !!flex && {flex: flex === true ? 1 : flex},
        !!flexGrow && {flexGrow: flexGrow === true ? 1 : flexGrow},
        center && {justifyContent: 'center', alignItems: 'center'},
        hCenter && {justifyContent: 'center'},
        vCenter && {alignItems: 'center'},
        selfCenter && {alignSelf: 'center'},
        spaceBetween && {justifyContent: 'space-between'},
        row && {flexDirection: 'row'},
        !!mAll && {margin: mAll},
        !!mt && {marginTop: mt},
        !!mb && {marginBottom: mb},
        !!ml && {marginLeft: ml},
        !!mr && {marginRight: mr},
        !!mh && {marginHorizontal: mh},
        !!mv && {marginVertical: mv},
        !!width && {width},
        !!minWidth && {minWidth},
        !!minHeight && {minHeight},
        !!height && {height},
        !!pAll && {padding: pAll},
        !!ph && {paddingHorizontal: ph},
        !!pv && {paddingVertical: pv},
        !!pl && {paddingLeft: pl},
        !!pt && {paddingTop: pt},
        !!pr && {paddingRight: pr},
        !!pb && {paddingBottom: pb},
        !!justifyContent && {justifyContent},
        !!alignItems && {alignItems},
        !!backgroundColor && {backgroundColor},
        !!aspectRatio && {aspectRatio},
        !!overflow && {overflow},
        !!borderWidth && {borderWidth},
        !!borderColor && {borderColor},
        !!radius && {borderRadius: radius},
        (!!borderBottomLeftRadius || borderBottomLeftRadius === 0) && {
          borderBottomLeftRadius,
        },
        (!!borderBottomRightRadius || borderBottomRightRadius === 0) && {
          borderBottomRightRadius,
        },
        (!!borderTopLeftRadius || borderTopLeftRadius === 0) && {
          borderTopLeftRadius,
        },
        (!!borderTopRightRadius || borderTopRightRadius === 0) && {
          borderTopRightRadius,
        },
        (!!opacity || opacity === 0) && {opacity},
        (!!zIndex || zIndex === 0) && {zIndex},
        !!absolute && {position: 'absolute'},
        (!!top || top === 0) && {top: top === true ? 0 : top},
        (!!bottom || bottom === 0) && {bottom: bottom === true ? 0 : bottom},
        (!!left || left === 0) && {left: left === true ? 0 : left},
        (!!right || right === 0) && {right: right === true ? 0 : right},
        !!disabled && {opacity: 0.5},
        IS_ANDROID &&
          (shadow || lightShadow) &&
          SHADOW({
            type: 'android',
            backgroundColor: backgroundColor || PRIMARY,
          }),
        style,
      ]}
      onPress={onPress}
      activeOpacity={activeOpacity || 1}
      disabled={disabled}
      {...restProps}>
      {/* {!IS_ANDROID && (shadow || lightShadow) && (
                <View
                    style={[styles.overlay, SHADOW({ type: 'lightCard', backgroundColor: backgroundColor || PRIMARY }),
                        !!radius && { borderRadius: radius },
                        !!borderBottomLeftRadius && { borderBottomLeftRadius },
                        !!borderBottomRightRadius && { borderBottomRightRadius },
                        !!borderTopLeftRadius && { borderTopLeftRadius },
                        !!borderTopRightRadius && { borderTopRightRadius },
                    ]}
                />
            )} */}
      {!IS_ANDROID && (shadow || darkShadow) && (
        <View
          style={[
            styles.overlay,
            SHADOW({type: 'card', backgroundColor: backgroundColor || PRIMARY}),
            !!radius && {borderRadius: radius},
            !!borderBottomLeftRadius && {borderBottomLeftRadius},
            !!borderBottomRightRadius && {borderBottomRightRadius},
            !!borderTopLeftRadius && {borderTopLeftRadius},
            !!borderTopRightRadius && {borderTopRightRadius},
          ]}
        />
      )}
      {/* {(hGradient || vGradient) && (
                <LinearGradient
                    start={{ x: gradientStartBalance || 0, y: gradientStartBalance || 0 }}
                    end={hGradient ? { x: gradientEndBalance || 1, y: 0 } : { x: 0, y: gradientEndBalance || 1 }}
                    style={[
                        styles.overlay,
                        !!radius && { borderRadius: radius },
                        !!borderBottomLeftRadius && { borderBottomLeftRadius },
                        !!borderBottomRightRadius && { borderBottomRightRadius },
                        !!borderTopLeftRadius && { borderTopLeftRadius },
                        !!borderTopRightRadius && { borderTopRightRadius },
                    ]}
                    colors={[gradientStartColor || GRADIENT_START, gradientEndColor || GRADIENT_END]}
                />
            )} */}
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Box;

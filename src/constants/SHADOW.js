import {StyleSheet} from 'react-native';
import {PRIMARY, LIGHT_GREY, BLACK} from './COLOUR';

const SHADOW = ({type, ...restProps}) => ({
  ...styles[type || 'card'],
  ...restProps,
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: PRIMARY,
    shadowColor: `${BLACK}70`,
    shadowOffset: {
      width: 6,
      height: 8,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  lightCard: {
    backgroundColor: PRIMARY,
    shadowColor: `${LIGHT_GREY}26`,
    shadowOffset: {
      width: -6,
      height: -8,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  android: {
    elevation: 8,
  },
});

export default SHADOW;

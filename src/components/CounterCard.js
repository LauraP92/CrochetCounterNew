/* eslint-disable operator-assignment */
import {StyleSheet} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Box from './Box';
import TemplateText from './TemplateText';
import TemplateIcon from './icons/TemplateIcon';
import {TRANSPARENT, WHITE, YARN_LIGHT_GREEN} from '../constants/COLOUR';
import CircleButton from './CircleButton';
import {
  BORDER_LARGE,
  RADIUS_LARGE,
  SPACE_MEDIUM,
  SPACE_SMALL,
  SPACE_XSMALL,
} from '../constants/LAYOUT';
import EditCounterModal from './EditCounterModal';

const CounterCard = ({
  countersData,
  setCountersData,
  index,
  navigation,
  id,
}) => {
  const [showEditCounterModal, setShowEditCounterModal] = useState(false);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const incrementStitch = () => {
    const newCountersData = {...countersData, dateModified: Date.now()};
    const {activeRow} = countersData.counters[index];
    newCountersData.counters[index].rows[activeRow] =
      newCountersData?.counters[index].rows[activeRow] + 1;
    setCountersData(newCountersData);
    storeData('countersData', newCountersData);
  };

  const decrementStitch = () => {
    const newCountersData = {...countersData, dateModified: Date.now()};
    const {activeRow} = countersData.counters[index];
    if (newCountersData?.counters[index].rows[activeRow] > 0) {
      newCountersData.counters[index].rows[activeRow] =
        newCountersData?.counters[index].rows[activeRow] - 1;
      setCountersData(newCountersData);
      storeData('countersData', newCountersData);
    }
  };

  const incrementRow = () => {
    const newCountersData = {...countersData, dateModified: Date.now()};
    if (
      newCountersData?.counters[index].activeRow <
      countersData?.counters[index].rows.length - 1
    ) {
      newCountersData.counters[index].activeRow =
        newCountersData?.counters[index].activeRow + 1;
    } else if (countersData.counters[index].rowsNumber === -1) {
      newCountersData.counters[index].activeRow =
        newCountersData?.counters[index].activeRow + 1;
      newCountersData.counters[index].rows = [
        ...newCountersData.counters[index].rows,
        0,
      ];
    }
    setCountersData(newCountersData);
    storeData('countersData', newCountersData);
  };

  const decrementRow = () => {
    const newCountersData = {...countersData, dateModified: Date.now()};
    if (newCountersData?.counters[index].activeRow > 0) {
      newCountersData.counters[index].activeRow =
        newCountersData?.counters[index].activeRow - 1;
    }
    setCountersData(newCountersData);
    storeData('countersData', newCountersData);
  };

  return (
    <Box pAll={SPACE_MEDIUM} pb={SPACE_XSMALL}>
      <Box
        pAll={SPACE_MEDIUM}
        backgroundColor={YARN_LIGHT_GREEN}
        aspectRatio={1.5}
        borderRadius={RADIUS_LARGE}>
        <Box center row mb={SPACE_SMALL}>
          <TemplateText color={WHITE} size={28}>
            {countersData?.counters[index].name}
          </TemplateText>
          <Box
            style={styles.icon}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => {
              setShowEditCounterModal(true);
            }}>
            <TemplateIcon name="MenuIcon" size={20} color={WHITE} />
          </Box>
        </Box>
        <Box row center mb={SPACE_SMALL} style={styles.cardCenter}>
          <TemplateText color={WHITE} size={28}>
            Row:
          </TemplateText>
          <Box
            onPress={() => {
              decrementRow();
            }}>
            <CircleButton
              size={43}
              backgroundColor={TRANSPARENT}
              borderWidth={4}
              borderColor={WHITE}
              iconName="MinusIcon"
            />
          </Box>
          <TemplateText color={WHITE} size={28}>
            {countersData?.counters[index]?.rowsNumber === -1
              ? countersData?.counters[index]?.activeRow + 1
              : `${countersData?.counters[index]?.activeRow + 1}/${
                  countersData?.counters[index]?.rows.length
                }`}
          </TemplateText>
          <Box
            onPress={() => {
              incrementRow();
            }}>
            <CircleButton
              size={43}
              backgroundColor={TRANSPARENT}
              borderWidth={4}
              borderColor={WHITE}
            />
          </Box>
        </Box>
        <TemplateText color={WHITE} size={28} mb={SPACE_XSMALL}>
          Stitch:
        </TemplateText>
        <Box row center style={styles.cardFooter}>
          <Box
            onPress={() => {
              decrementStitch();
            }}>
            <CircleButton
              size={70}
              backgroundColor={TRANSPARENT}
              borderWidth={4}
              borderColor={WHITE}
              iconName="MinusIcon"
            />
          </Box>
          <TemplateText color={WHITE} size={36}>
            {
              countersData?.counters[index]?.rows[
                countersData?.counters[index]?.activeRow
              ]
            }
          </TemplateText>
          <Box
            onPress={() => {
              incrementStitch();
            }}>
            <CircleButton
              size={70}
              backgroundColor={TRANSPARENT}
              borderWidth={BORDER_LARGE}
              borderColor={WHITE}
            />
          </Box>
        </Box>
        <EditCounterModal
          showEditCounterModal={showEditCounterModal}
          setShowEditCounterModal={setShowEditCounterModal}
          countersData={countersData}
          setCountersData={setCountersData}
          index={index}
          navigation={navigation}
          id={id}
          showExpandButton={true}
        />
      </Box>
    </Box>
  );
};

export default CounterCard;

const styles = StyleSheet.create({
  contentContainer: {
    padding: SPACE_MEDIUM,
    paddingBottom: 100,
    borderWidth: 1,
  },
  icon: {
    position: 'absolute',
    right: 5,
    zIndex: 2,
  },
  cardCenter: {
    justifyContent: 'space-between',
  },
  cardFooter: {
    justifyContent: 'space-between',
  },
});

import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Box from '../components/Box';
import TemplateText from '../components/TemplateText';
import {TRANSPARENT, WHITE, YARN_LIGHT_GREEN} from '../constants/COLOUR';
import {
  BORDER_LARGE,
  RADIUS_LARGE,
  SPACE_MEDIUM,
  SPACE_SMALL,
  SPACE_XSMALL,
} from '../constants/LAYOUT';
import TemplateIcon from '../components/icons/TemplateIcon';
import CircleButton from '../components/CircleButton';
import EditCounterModal from '../components/EditCounterModal';

const CounterSelected = ({navigation, route}) => {
  const {id, index} = route?.params;
  const [showEditCounterModal, setShowEditCounterModal] = useState(false);
  const [countersData, setCountersData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const newCounter =
    !!countersData?.counters?.length &&
    countersData.counters.find(item => {
      return item.id === id;
    });

  const getAsyncStorageData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {}
  };

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    (async () => {
      const storedCountersData = await getAsyncStorageData('countersData');
      if (storedCountersData) {
        setCountersData(storedCountersData);
      }
    })();
  }, []);

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
      newCountersData.counters[index].activeRow <
      countersData.counters[index].rows.length - 1
    ) {
      newCountersData.counters[index].activeRow =
        newCountersData.counters[index].activeRow + 1;
    } else if (countersData.counters[index].rowsNumber === -1) {
      newCountersData.counters[index].activeRow =
        newCountersData.counters[index].activeRow + 1;
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
    <Box
      backgroundColor={YARN_LIGHT_GREEN}
      pAll={SPACE_MEDIUM}
      mt={SPACE_MEDIUM}
      mAll={SPACE_SMALL}
      borderRadius={RADIUS_LARGE}>
      <Box center row mb={SPACE_SMALL}>
        <TemplateText size={28}>{newCounter?.name}</TemplateText>
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
          {newCounter?.rowsNumber === -1
            ? newCounter?.activeRow + 1
            : `${newCounter?.activeRow + 1}/${newCounter?.rows?.length}`}
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
          {/* {newCounter?.rows[newCounter?.activeRow]} */}
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
        id={id}
        navigation={navigation}
        showExpandButton={false}
      />
    </Box>
  );
};

export default CounterSelected;

const styles = StyleSheet.create({
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

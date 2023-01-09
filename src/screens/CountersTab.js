// import {useIsFocused} from '@react-navigation/native';
// import firestore from '@react-native-firebase/firestore';
import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, RefreshControl} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Box from '../components/Box';
import CircleButton from '../components/CircleButton';
import CounterCard from '../components/CounterCard';
import CreateCounterModal from '../components/CreateCounterModal';
import TemplateText from '../components/TemplateText';
import {GREY} from '../constants/COLOUR';
import {SPACE_LARGE} from '../constants/LAYOUT';
import AuthContext from '../context/AuthContext';
import {useIsFocused} from '@react-navigation/native';

const CountersTab = ({navigation}) => {
  const [showCreateCounterModal, setShowCreateCounterModal] = useState(false);
  const [countersData, setCountersData] = useState({
    dateModified: Date.now(),
    counters: [],
  });
  const context = useContext(AuthContext);
  const isFocused = useIsFocused();

  // const {userId} = context;
  // const isFocused = useIsFocused();

  //   const getFirebaseData = async () => {
  //     const userCounters = await firestore()
  //       .collection('users')
  //       .doc(userId)
  //       .collection('counters')
  //       .get();
  //     return userCounters;
  //   };

  const getAsyncStorageData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  //   const saveFirebaseCounters = () => {
  //     if (countersData?.id) {
  //       firestore()
  //         .collection('users')
  //         .doc(userId)
  //         .collection('counters')
  //         .doc(countersData.id)
  //         .update(countersData)
  //         .then(() => {});
  //       return;
  //     }
  //     firestore()
  //       .collection('users')
  //       .doc(userId)
  //       .collection('counters')
  //       .add(countersData)
  //       .then(() => {});
  //   };

  useEffect(() => {
    (async () => {
      const asyncStorageCounters = await getAsyncStorageData('countersData');
      if (asyncStorageCounters) {
        setCountersData(asyncStorageCounters);
      }
    })();
  }, [isFocused]);

  // useEffect(() => {
  //   (async () => {
  //     const asyncStorageCounters = await getAsyncStorageData('countersData');
  // const latestFirebaseDate = await getAsyncStorageData(
  //   'latestFirebaseDate',
  // );
  // if (latestFirebaseDate !== asyncStorageCounters && countersData) {
  //   saveFirebaseCounters();
  // }
  //   })();
  // }, []);

  return (
    <Box flex>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        keyExtractor={item => item?.name}
        data={countersData?.counters || []}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Box center>
            <TemplateText
              color={GREY}
              mt={SPACE_LARGE}
              mb={SPACE_LARGE}
              size={20}>
              You currently have no counters
            </TemplateText>
            <TemplateText color={GREY} size={20} center mb={SPACE_LARGE}>
              Press the plus button to
              {'\n'}
              create one
            </TemplateText>
            <CircleButton
              onPress={() => {
                setShowCreateCounterModal(true);
              }}
            />
          </Box>
        )}
        renderItem={({item, index}) => (
          <CounterCard
            name={item?.name}
            activeRow={item?.activeRow}
            rows={item?.rows}
            index={index}
            id={item?.id}
            timestamp={item?.timestamp}
            countersData={countersData}
            setCountersData={setCountersData}
            navigation={navigation}
          />
        )}
      />

      {!!countersData?.counters?.length && (
        <Box absolute right={SPACE_LARGE} bottom={SPACE_LARGE}>
          <CircleButton
            shadow
            onPress={() => {
              setShowCreateCounterModal(true);
            }}
          />
        </Box>
      )}

      <CreateCounterModal
        showCreateCounterModal={showCreateCounterModal}
        setShowCreateCounterModal={setShowCreateCounterModal}
        setCountersData={setCountersData}
        countersData={countersData}
      />
    </Box>
  );
};

export default CountersTab;

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 75,
  },
});

import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Box from './Box';
import ModalBody from './ModalBody';
import {GREY, LIGHT_GREY, PRIMARY} from '../constants/COLOUR';
import TemplateText from './TemplateText';
import {RADIUS_SMALL, SPACE_MEDIUM, SPACE_SMALL} from '../constants/LAYOUT';
import TemplateActionButton from './TemplateActionButton';
import TemplateTextInput from './TemplateTextInput';
import QuantityCircle from './QuantityCircle';
import {hp} from '../utils/getResponsiveSize';

const quantities = Array.from(Array(500).keys()).map(item => item + 1);

const CreateCounterModal = ({
  showCreateCounterModal,
  setShowCreateCounterModal,
  setCountersData,
  countersData,
}) => {
  const [dataCounter, setDataCounter] = useState({
    name: '',
    rowsNumber: -1,
    id: Date.now(),
  });

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const createCounter = () => {
    const newCountersData = {
      ...countersData,
      dateModified: Date.now(),
      counters: [
        ...countersData.counters,
        {
          ...dataCounter,
          id: Date.now(),
          rows:
            dataCounter.rowsNumber === -1
              ? [0]
              : Array.from(Array(dataCounter.rowsNumber).keys()).map(() => 0),
          activeRow: 0,
          name:
            dataCounter.name || `Counter ${countersData.counters.length + 1}`,
        },
      ],
    };
    setCountersData(newCountersData);
    storeData('countersData', newCountersData);

    setDataCounter({
      name: '',
      rowsNumber: -1,
    });
  };

  return (
    <ModalBody
      showModal={showCreateCounterModal}
      setShowModal={setShowCreateCounterModal}
      containerStyle={styles.modalContent}
      keyboardOffset={-100}>
      <Box>
        <Box ph={SPACE_MEDIUM}>
          <TemplateText color={PRIMARY} center size={hp(22)} mb={SPACE_MEDIUM}>
            Create counter
          </TemplateText>
          <TemplateTextInput
            placeholder="How should we call this counter?"
            onChangeText={text => {
              setDataCounter({
                ...dataCounter,
                name: text,
              });
            }}
          />
          <TemplateText color={PRIMARY} size={hp(22)} mt={SPACE_MEDIUM}>
            Number of rows:
          </TemplateText>
        </Box>
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[-1, ...quantities]}
          keyExtractor={item => item}
          renderItem={({item}) => {
            if (item === -1) {
              return (
                <Box
                  mb={SPACE_SMALL}
                  center
                  ph={SPACE_SMALL}
                  radius={RADIUS_SMALL}
                  borderColor={PRIMARY}
                  backgroundColor={
                    dataCounter.rowsNumber < 0 ? PRIMARY : LIGHT_GREY
                  }
                  borderWidth={hp(2)}
                  height={hp(40)}
                  row
                  mr={SPACE_SMALL}
                  onPress={() => {
                    setDataCounter({
                      ...dataCounter,
                      rowsNumber: -1,
                    });
                  }}>
                  <TemplateText
                    medium
                    color={dataCounter.rowsNumber < 0 ? LIGHT_GREY : GREY}>
                    I'm not sure
                  </TemplateText>
                </Box>
              );
            }
            return (
              <QuantityCircle
                isActive={dataCounter.rowsNumber === item}
                key={item}
                item={item}
                color={PRIMARY}
                onPress={() => {
                  setDataCounter({
                    ...dataCounter,
                    rowsNumber: item,
                  });
                }}
              />
            );
          }}
        />
        <Box ph={SPACE_MEDIUM}>
          <TemplateActionButton
            onPress={() => {
              createCounter();
              setShowCreateCounterModal(false);
            }}>
            Create
          </TemplateActionButton>
        </Box>
      </Box>
    </ModalBody>
  );
};

export default CreateCounterModal;

const styles = StyleSheet.create({
  modalContent: {
    paddingHorizontal: 0,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: SPACE_MEDIUM,
    paddingHorizontal: SPACE_MEDIUM,
  },
});

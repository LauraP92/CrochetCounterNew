import {StyleSheet, Alert} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useState} from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalBody from './ModalBody';
import Box from './Box';
import {
  RADIUS_SMALL,
  SPACE_MEDIUM,
  SPACE_SMALL,
  SPACE_XSMALL,
} from '../constants/LAYOUT';
import TemplateText from './TemplateText';
import {BLACK, GREY, LIGHT_GREY, PRIMARY} from '../constants/COLOUR';
import TemplateTextInput from './TemplateTextInput';
import TemplateActionButton from './TemplateActionButton';
import QuantityCircle from './QuantityCircle';

const quantities = Array.from(Array(200).keys()).map(item => item + 1);

const EditCounterModal = ({
  showExpandButton,
  showEditCounterModal,
  setShowEditCounterModal,
  countersData,
  setCountersData,
  index,
  navigation,
  id,
}) => {
  const [dataCounter, setDataCounter] = useState({
    name: countersData?.counters[index]?.name,
    rowsNumber: countersData?.counters[index]?.rowsNumber,
  });

  const deleteCounter = () =>
    Alert.alert('Delete counter?', '', [
      {
        text: 'Cancel',
        onPress: () => setShowEditCounterModal(false),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const newCountersData = {...countersData};
          newCountersData.counters.splice(index, 1);
          setCountersData(newCountersData);
          storeData('countersData', newCountersData);
          if (!showExpandButton) {
            navigation.goBack();
          }
        },
      },
    ]);

  const resetCounter = () =>
    Alert.alert('Reset counter?', '', [
      {
        text: 'Cancel',
        onPress: () => setShowEditCounterModal(false),
        style: 'cancel',
      },
      {
        text: 'Reset',
        onPress: () => {
          const newCountersData = {...countersData};
          newCountersData.counters[index].rows =
            dataCounter.rowsNumber === -1
              ? [0]
              : Array.from(Array(dataCounter.rowsNumber).keys()).map(() => 0);
          newCountersData.counters[index].activeRow = 0;
          setCountersData(newCountersData);
          storeData('countersData', newCountersData);
          setShowEditCounterModal(false);
        },
      },
    ]);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const editCounter = () => {
    const editCountersData = {...countersData, dateModified: Date.now()};
    editCountersData.counters[index].name =
      dataCounter?.name || `Counter ${dataCounter?.name?.length + 1}`;
    const currentRowNumber = countersData.counters[index].rowsNumber;
    const currentRow = countersData.counters[index].rows;

    if (currentRowNumber < dataCounter.rowsNumber) {
      if (currentRowNumber === -1) {
        if (currentRow.length < dataCounter.rowsNumber) {
          const newElements = Array.from(
            Array(dataCounter.rowsNumber - currentRow.length).keys(),
          ).map(() => 0);
          const updatedRow = [...currentRow, ...newElements];
          editCountersData.counters[index].rows = updatedRow;
        } else if (currentRow.length >= dataCounter.rowsNumber) {
          const updatedRow = [...currentRow].splice(0, dataCounter.rowsNumber);
          editCountersData.counters[index].rows = updatedRow;
          if (
            editCountersData.counters[index].activeRow >
            updatedRow.length - 1
          ) {
            // Decrease activeRow if activeRow is larger than the updated rowsNumber
            editCountersData.counters[index].activeRow = updatedRow.length - 1;
          }
        }
      } else {
        // Increase number of rows
        const newElements = Array.from(
          Array(dataCounter.rowsNumber - currentRowNumber).keys(),
        ).map(() => 0);
        const updatedRow = [...currentRow, ...newElements];
        editCountersData.counters[index].rows = updatedRow;
      }
    } else if (currentRowNumber > dataCounter.rowsNumber) {
      if (dataCounter.rowsNumber === -1) {
        // if new rowsNumber is "I'm not sure"
        editCountersData.counters[index].rowsNumber = dataCounter.rowsNumber;
        setCountersData(editCountersData);
        storeData('countersData', editCountersData);
        return;
      }
      // Decrease number of rows
      const updatedRow = [...currentRow].splice(0, dataCounter.rowsNumber);
      editCountersData.counters[index].rows = updatedRow;
      if (editCountersData.counters[index].activeRow > updatedRow.length - 1) {
        // Decrease activeRow if activeRow is larger than the updated rowsNumber
        editCountersData.counters[index].activeRow = updatedRow.length - 1;
      }
    }

    editCountersData.counters[index].rowsNumber = dataCounter.rowsNumber;
    setCountersData(editCountersData);
    storeData('countersData', editCountersData);
  };

  return (
    <ModalBody
      showModal={showEditCounterModal}
      setShowModal={setShowEditCounterModal}
      containerStyle={styles.modalContent}
      onClose={() => {
        setDataCounter({
          name: countersData?.counters[index].name,
          rowsNumber: countersData?.counters[index].rowsNumber,
        });
      }}>
      <Box>
        <Box ph={SPACE_MEDIUM}>
          <TemplateText color={PRIMARY} center size={22} mb={SPACE_SMALL}>
            Edit counter
          </TemplateText>
          <TemplateTextInput
            color={BLACK}
            value={dataCounter.name}
            onChangeText={text => {
              setDataCounter({
                ...dataCounter,
                name: text,
              });
            }}
          />
          <TemplateText
            color={PRIMARY}
            size={22}
            mt={SPACE_MEDIUM}
            mb={SPACE_XSMALL}>
            Number of rows:
          </TemplateText>
        </Box>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <Box
            mb={SPACE_SMALL}
            center
            ph={SPACE_SMALL}
            radius={RADIUS_SMALL}
            borderColor={PRIMARY}
            backgroundColor={dataCounter.rowsNumber < 0 ? PRIMARY : LIGHT_GREY}
            borderWidth={2}
            height={40}
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
          {quantities.map(item => (
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
          ))}
        </ScrollView>
        <Box ph={SPACE_MEDIUM}>
          {showExpandButton ? (
            <TemplateActionButton
              mb={SPACE_MEDIUM}
              onPress={() => {
                navigation.navigate('CounterSelected', {
                  id: id,
                  index: index,
                });
                setShowEditCounterModal(false);
              }}>
              Open separately
            </TemplateActionButton>
          ) : null}
          <TemplateActionButton
            mb={SPACE_MEDIUM}
            onPress={() => {
              deleteCounter();
            }}>
            Delete counter
          </TemplateActionButton>
          <TemplateActionButton
            mb={SPACE_MEDIUM}
            onPress={() => {
              resetCounter();
            }}>
            Reset counter
          </TemplateActionButton>
          <TemplateActionButton
            onPress={() => {
              editCounter();
              setShowEditCounterModal(false);
            }}>
            Save
          </TemplateActionButton>
        </Box>
      </Box>
    </ModalBody>
  );
};

export default EditCounterModal;

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

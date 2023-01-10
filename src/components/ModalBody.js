import React from 'react';
import {StyleSheet, Image, Modal} from 'react-native';
import CloseModal from '../assets/images/CloseModal.png';
import {BLACK, PRIMARY, WHITE} from '../constants/COLOUR';
import {RADIUS_LARGE, SPACE_LARGE, SPACE_MEDIUM} from '../constants/LAYOUT';
import Box from './Box';
import TemplateIcon from './icons/TemplateIcon';

const ModalBody = ({
  showModal,
  setShowModal,
  children,
  modalRef,
  containerStyle,
  keyboardOffset,
  onClose,
  ...restProps
}) => (
  <Modal
    ref={modalRef}
    visible={showModal}
    transparent
    animationType="fade"
    {...restProps}>
    <Box flex backgroundColor={`${BLACK}88`} hCenter pAll={SPACE_LARGE}>
      <Box
        backgroundColor={WHITE}
        radius={RADIUS_LARGE}
        pAll={SPACE_MEDIUM}
        borderTopRightRadius={0}
        style={containerStyle}>
        <Box
          absolute
          right
          top={-26}
          onPress={() => {
            setShowModal(false);
            if (onClose) {
              onClose();
            }
          }}
          center>
          <Image source={CloseModal} style={styles.close} />
          <Box absolute right={14} top={5}>
            <TemplateIcon size={26} name="CloseIcon" color={PRIMARY} />
          </Box>
        </Box>
        <Box>{children}</Box>
      </Box>
      {/* <KeyboardSpacer keyboardOffset={keyboardOffset} iosOnly /> */}
    </Box>
  </Modal>
);

export default ModalBody;

const styles = StyleSheet.create({
  close: {
    height: 26,
    aspectRatio: 2.423,
  },
});

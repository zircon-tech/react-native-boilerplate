import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import colors from 'configs/colors';
import Button from '../button';

const CustomModal = props => {
  // Props
  const {title, message, type, visible, modalClose} = props;

  // Var
  const backgroundColor = colors.modal.background[ type ];

  // Render
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      presentationStyle="overFullScreen"
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>

          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{message}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title={'Close'}
              action={() => modalClose()}
              customBackground={backgroundColor}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  modal: {
    backgroundColor: '#fff',
    padding: 30,
    paddingBottom: 70,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  titleText: {
    justifyContent: 'center',
    color: '#333',
    fontSize: 26,
  },
  messageContainer: {
    marginBottom: 35,
  },
  messageText: {
    color: '#333',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
});

export default CustomModal;

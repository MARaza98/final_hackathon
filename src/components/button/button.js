import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Buttonn = ({title, width, height, press}) => {
  return (
    <TouchableOpacity
      onPress={press}
      style={[styles.btn, {width: width, height: height}]}>
      <Text style={styles.btntxt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#61B846',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 170,
  },
  btntxt: {
    fontSize: 30,
    fontWeight: '700',
  },
});

export default Buttonn;
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function MedicinePreview() {

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    .remedioContainer {
  display: flex;
  
  flex-direction: row;
  font-weight:bold;
  
  justify-content: space-between;
  align-items: flex-start;
  
  padding: 0;
  margin: 0;
  list-style: none;
  background: aliceblue;
}

.remedioContainer > * {
  padding: 10px;
  flex: 1 100%
}

.remedioInfo {
  background: aliceblue;
}

.remedioBotao {
  background: aliceblue;
  text-align: right;
}

  }
});

import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import styles from './style';

export default function Main({route}) {
  var gtin = '';
  if (route.params == undefined) {
    gtin = '1234567890';
  } else {
    gtin = route.params.gtin;
  }
  const navigation = useNavigation();
  const [barcode, setBarcode] = useState('');

  const handlePress = useCallback(() => {
    Linking.openURL(`https://cosmos.bluesoft.com.br/produtos/${barcode}/`);
  }, [barcode]);
  const loadDates = useCallback(() => {
    setBarcode(gtin);
  }, [gtin]);

  const openCam = useCallback(() => {
    navigation.navigate('Camera');
  }, [navigation]);

  useEffect(() => {
    loadDates();
  }, [loadDates]);

  return (
    <View style={styles.component}>
      <TouchableOpacity onPress={() => handlePress()}>
        <TextInput
          onChangeText={(text) => setBarcode(text)}
          value={barcode}
          editable={false}
        />
      </TouchableOpacity>
      <Text style={styles.textInformation}>Leitura do Código</Text>
      <TouchableOpacity style={styles.buttonRead} onPress={() => openCam()}>
        <Icon name="barcode" size={71} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}

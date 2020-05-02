import React from 'react';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import BarcodeMask from 'react-native-barcode-mask';

export default function Camera() {
  const navigation = useNavigation();

  return (
    <View style={styles.component}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Uso da Camera',
          message: 'Conceda a permissão para a utilização da camera',
          buttonPositive: 'ok',
          buttonNegative: 'Cancelar',
        }}
        onGoogleVisionBarcodesDetected={({barcodes: [{data, type}]}) => {
          navigation.navigate('Main', {gtin: data, type: type});
        }}
        googleVisionBarcodeMode={
          RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE
        }
        captureAudio={false}>
        <BarcodeMask
          width={300}
          height={100}
          edgeBorderWidth={1}
          showAnimatedLine={true}
        />
      </RNCamera>
    </View>
  );
}

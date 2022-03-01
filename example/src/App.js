import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ImageChakra from 'react-native-image-chakra';

export default function App() {
  return (
    <View style={{felx:1}}>
      <ImageChakra 
      data={{
        centerImage:{uri:`https://services.selectastro.in/content/App/assets/images/spinner/Hand.png`},
        chakraImage:{uri:`https://services.selectastro.in/Content/Chakra/m2tkbjnvx2g.png`},
        fingerImage:{uri:`https://services.selectastro.in/content/App/assets/images/spinner/Spin-wheel-04.png`}
      }}
      onSpinnCompleted={(deg)=> alert(deg)}/>
    </View>
  );
}
import { View, Text,} from 'react-native';
import React from 'react';
import Logo from './components/Logo';
import styles from './components/stySheet';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.warnning]}>Hello React Native</Text>
      {/* <Logo /> */}
    </View>
  );
};

export default App;

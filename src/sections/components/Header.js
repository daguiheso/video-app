import React from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';

const Header = (props) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
          <View>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;

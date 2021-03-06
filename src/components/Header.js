import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{ props.headerText }</Text>
      </View>
  );
};

  const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  }
};


export default Header;

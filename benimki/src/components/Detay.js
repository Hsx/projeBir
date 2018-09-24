import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Buton from './Buton';
//Image, Button
const Detay = ({ data }) => {
  const { containerStyle, subContainerStyle, ImageStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={subContainerStyle}>
          <Text>{data.title}</Text>
      </View>

      <View style={subContainerStyle}>
        <Image style={ImageStyle} source={{ uri: data.image }} />
      </View>

      <View style={subContainerStyle}>
        <Buton onPres={() => Linking.openUrl(data.url)}>Satın Al</Buton>
      </View>

    </View>

  );
};

  const styles = {
      containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderButtonWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
      },
      subContainerStyle: {
        borderButtomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
      },
      ImageStyle: {
        height: 300,
        flex: 1,
      }
  };


export default Detay;

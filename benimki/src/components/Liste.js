
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Detay from './Detay';

class Liste extends Component {
  state = { data: [] };
  //ne zaman çalısır?
  componentWillMount() {
  //  console.log('componentWillMount');
  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({ data: response.data }));
  }

//ne zaman çalısır: uygulama açıldığında.
  componentDidMount() {
    console.log('componentDidMount');
  }

renderData() {
    return this.state.data.map((responseData, Id) =>
    <Detay key={Id} data={responseData} />
  );
}

  render() {
//    console.log('render');
  //  console.log('gelen data ' + this.state);
    return (
    <ScrollView style={{ marginTop: 10 }}>
       {this.renderData()}
    </ScrollView>
    );
  }
}


export default Liste;

import *as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const bgImage = require("../assets/home.png")
const img1 = require("../assets/think.png")

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImg} />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Score full Marks
          </Text>
          <Image source={img1}
            style={styles.img1}
          />
        </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    height: 1000,
    width: 500,
    marginTop: -100
  },
  headerText: {
    fontSize: 35,
    backgroundColor: "#ff8000",
    height: 70,
    marginTop: -890,
    marginLeft: 170,
    fontWeight: "bold",
    textAlign: 'center',
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 3,
    color: "#ffffff",
  },
  header: {
    marginLeft: -79,
    width: 490,

  },
  img1: {
    marginLeft: 80,
    width: 400,
    height: 600,
    marginTop: -20
  },
  Text2: {
    fontSize: 20
  }
})
import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>      
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>this.goToBuzzerScreen("red")}>
            <Text style={styles.buttonText}>Equipo 1</Text>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})
------------------------------------------------------------------------------------------------------------------------------
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>App de timbre inalámbrico</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;
---------------------------------------------------------------------------------------------------------

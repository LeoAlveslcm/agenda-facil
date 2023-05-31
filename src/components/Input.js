import React from "react"
import { 
  View, 
  Text, 
  TextInput,
  StyleSheet,
} from 'react-native'

const Input = (props) => {
  
  return (
    <View style={styles.inputBox}>
        <Text>{props.label}</Text>
        <TextInput
          placeholder={props.place}
          value= {props.name}
          style={styles.input}
          secureTextEntry={props.secure}
        />
    </View>
  );
}
  
    const styles = StyleSheet.create({  
        input:{
            height: 40,
            width: 350,
            borderBottomWidth: 0.5,
        },
    })

    export default Input;
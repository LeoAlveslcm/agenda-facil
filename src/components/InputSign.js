import React from "react"
import { 
  TextInput,
  StyleSheet,
} from 'react-native'

const InputSign = (props) => {
  
  return (
    <TextInput
        placeholder={props.place}
        style={styles.input}
        secureTextEntry={props.secure}
    />
  );
}
  
    const styles = StyleSheet.create({  
        input:{
          height: 40,
          width: 300,
          borderBottomWidth: 0.5,
        },
    })

    export default InputSign;
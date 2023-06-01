import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const SaveButton = (props) => {
  
  return (
    <TouchableOpacity style={styles.btnSave}>
        <Text style={styles.btnText}>{props.txt}</Text>
    </TouchableOpacity>
  );
}
  
    const styles = StyleSheet.create({  
        btnSave:{
            top: 10,
            paddingHorizontal: 30,
            paddingVertical: 5,
            backgroundColor: '#00275b',
            borderRadius: 5,
        },
    
        btnText:{
            color: '#ffffff',
        },
  
    })

    export default SaveButton;
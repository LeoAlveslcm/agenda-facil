import React, {useState} from "react"
import { 
  View, 
  Text, 
  StyleSheet,
} from 'react-native'

import Severino from './teste/severino';
import Adriana from './teste/adriana';
import HeaderBar from '../../components/HeaderBar';

import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'

export default function Contacts() {
  const navigation = useNavigation();
  const [name, setName] = useState("Severino")

    return (
      <View style={styles.container}>

        <HeaderBar />

        <View style={styles.body}>
          <Text style={styles.title}>Selecione o profissional:</Text>
          <Picker 
          style={styles.selectBox}
          selectedValue={name}
          onValueChange={(item, indexItem) =>{ setName(item)}}>
              <Picker.Item key={0} value={"Severino"} label="Severino (Barbeiro)" />    
              <Picker.Item key={1} value={"Adriana"} label="Adriana (Manicure)" />           
          </Picker>
          {name=="Severino"? <Severino />: <Adriana />}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#fff',
    },

    body:{
      height: '100%',
      paddingTop: 50,

      gap: 30,
    },

    title:{
      paddingBottom: 5,
      alignSelf: 'center',
      fontSize: 20,

      color: '#00275b',
      borderBottomWidth: 1,
      borderBottomColor: '#00275b',
    },

    selectBox:{
      backgroundColor: '#00275b',
      color: '#ffffff',
    },
  })
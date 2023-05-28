import React, {useState} from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

import Severino from './teste/severino';
import Adriana from './teste/adriana';

import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function Contacts() {
  const navigation = useNavigation();
  const [name, setName] = useState("Severino")

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.bemVindo}>Bem-vindo Fulano</Text>
            
            <TouchableOpacity 
            onPress={ () => navigation.navigate('Profile')}>
                <Ionicons name="person-circle-outline" size={50} color='#ffffff'/>
            </TouchableOpacity>
        </View>

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
    header:{
      width: '100%',
      height: 60,
      
      backgroundColor: '#00275b',
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,

      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
  },

  bemVindo:{
      color: '#ffffff',
      fontSize: 18,
  },

  body:{
    height: '100%',
    paddingTop: 50,

    display: 'flex',
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

  contacts:{
    display: 'flex',
    gap: 20,
  },

  contactsBox:{
    paddingLeft: 20,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  })
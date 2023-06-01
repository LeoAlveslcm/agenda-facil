import React, {useState} from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import Input from '../../components/Input'

import { useNavigation } from '@react-navigation/native'

export default function CreateSchedules() {
  const navigation = useNavigation();
  const [name, setName] = useState();

    return (
      <View style={styles.container}>
        <Text style={styles.titleContainer}>Preencha os campos a seguir:</Text>

        <Input label= "Qual a data do agendamento: " place= "Insira a data"/>
        <Input label= "Qual a hora do agendamento: " place= "Insira a hora"/>

        <TouchableOpacity style={[styles.btn]}>
          <Text style={{fontSize: 18, color: '#fff'}}>Disponibilizar Agendamento</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      width: '100%',
      height: '100%',
      marginTop: 50,
      backgroundColor: '#fff',

      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 25,
    },

    titleContainer:{
      width: '100%',
      height: 50,
      fontSize: 18,

      color: '#fff',
      backgroundColor: '#0097b2',
      textAlign: 'center',
      textAlignVertical: 'center',
      elevation: 15,
    },

    btn:{
      width: 350,
      height: 40,
      backgroundColor: '#0097b2',
      borderRadius: 10,

      alignItems: 'center',
      justifyContent: 'center',
    },
  })
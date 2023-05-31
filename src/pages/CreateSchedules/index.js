import React, {useState} from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'

export default function CreateSchedules() {
  const navigation = useNavigation();
  const [name, setName] = useState();

    return (
      <View style={styles.container}>

        <Text style={styles.titleContainer}>Preencha os campos a seguir:</Text>

        <View style={styles.pickerBox}>
          <Text style={styles.pickerTitle}>Selecione o profissional:</Text>

          <Picker 
          style={styles.selectBox}
          selectedValue={name}
          onValueChange={(item, indexItem) =>{ setName(item)}}>
              <Picker.Item key={0} value={"Severino"} label="Severino (Barbeiro)" />    
              <Picker.Item key={1} value={"Adriana"} label="Adriana (Manicure)" />           
          </Picker>
        </View>

        <TextInput
          placeholder="Digite seu nome"
          style={styles.input}
        />

        <TextInput
          placeholder="Digite seu sobrenome"
          style={styles.input}
        />

        <View style={styles.pickerBox}>
          <Text style={styles.pickerTitle}>Selecione a data:</Text>

          <Picker 
          style={styles.selectBox}
          selectedValue={name}
          onValueChange={(item, indexItem) =>{ setName(item)}}>
              <Picker.Item key={0} value={"date1"} label="12/06" />    
              <Picker.Item key={1} value={"date2"} label="13/06" />   
              <Picker.Item key={2} value={"date3"} label="14/06" />  
              <Picker.Item key={3} value={"date4"} label="15/06" />  
              <Picker.Item key={4} value={"date5"} label="16/06" />          
          </Picker>
        </View>

        <View style={styles.pickerBox}>
          <Text style={styles.pickerTitle}>Selecione o horario:</Text>

          <Picker 
          style={styles.selectBox}
          selectedValue={name}
          onValueChange={(item, indexItem) =>{ setName(item)}}>
              <Picker.Item key={0} value={"hour1"} label="13:00" />    
              <Picker.Item key={1} value={"hour2"} label="14:30" />   
              <Picker.Item key={2} value={"hour3"} label="16:00" />  
              <Picker.Item key={3} value={"hour4"} label="17:30" />  
              <Picker.Item key={4} value={"hour5"} label="19:00" />           
          </Picker>
        </View>

        <TouchableOpacity style={[styles.btn]}>
          <Text style={{fontSize: 18, color: '#fff'}}>Criar Agendamento</Text>
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

    pickerBox:{
      width: 350,
      gap: 5,
    },

    selectBox:{
      backgroundColor: '#eaeaea',
    },

    input:{
      height: 40,
      width: 350,
      borderBottomWidth: 1,
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
import React, { useState } from "react"
import CheckBox from 'expo-checkbox'
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import InputSign from '../../components/InputSign'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignUn() {
  const navigation = useNavigation();
  const [isSelected, setSelected] = useState(false)
  const [isChecked, setChecked] = useState(false)

    return (
      <View style={styles.container}>

        <Animatable.View animation="fadeInUp" style={styles.box}>
          <View style={styles.inputGroup}>
            <View style={styles.inputForm}>
              
              <InputSign place= "Nome"/>
              <InputSign place= "Sobrenome"/>
              <InputSign place= "E-mail"/>
              <InputSign place= "Telefone"/>
              <InputSign place= "Usuário"/>
              <InputSign place= "Senha" secure={true}/>
            </View>

            <View style={styles.checkView}>
              <View style={styles.checkBox}>
                <CheckBox 
                  value={isSelected} 
                  onValueChange={setSelected} 
                  color={isSelected? "#00275b": undefined}
                />
                <Text>Prestador</Text>
              </View>
              <View style={styles.checkBox}>
                <CheckBox 
                  value={isChecked} 
                  onValueChange={setChecked} 
                  color={isChecked? "#00275b": undefined}
                />
                <Text>Cliente</Text>
              </View>
            </View>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('SignIn')}>
              <Text style={{fontSize: 18, color: '#00275b'}}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.btnCadastrar]}   
            onPress={ () => navigation.navigate('Home')}>
              <Text style={{fontSize: 18, color: '#fff'}}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      height: '100%',
      backgroundColor: '#fff',

      justifyContent: 'flex-end',
    },

    box:{
      width: '100%',
      height: '80%',
      top: 20,
      paddingTop: 50,
      paddingHorizontal: 20,

      backgroundColor: '#0097b2',
      borderRadius: 10,
    },

    inputGroup:{
      height: '100%',
      paddingVertical: 20,

      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 15,

      backgroundColor: '#ffffff',
      borderRadius: 10,
    },

    inputForm:{
      gap: 15,
    },

    checkView:{
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },

    checkBox:{
      flexDirection: 'row',
      gap: 10,
    },

    btnCadastrar:{
      width: 300,
      height: 45,
      backgroundColor: '#00275b',
      borderRadius: 10,

      justifyContent: 'center',
      alignItems: 'center', 
    },
  })
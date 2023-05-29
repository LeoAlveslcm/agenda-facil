import React, { useState } from "react"
import CheckBox from 'expo-checkbox'
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'

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
              <TextInput
                placeholder="Nome"
                style={styles.input}
              />

              <TextInput
                placeholder="Sobrenome"
                style={styles.input}
              />

              <TextInput
                placeholder="Email"
                style={styles.input}
              />

              <TextInput
                placeholder="Telefone"
                style={styles.input}
              />

              <TextInput
                placeholder="Usuário"
                style={styles.input}
              />

              <TextInput
                placeholder="Senha"
                style={styles.input}
                secureTextEntry={true}
              />
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

      display: 'flex',
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

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 15,

      backgroundColor: '#ffffff',
      borderRadius: 10,
    },

    inputForm:{
      display: 'flex',
      gap: 15,
    },

    input:{
      height: 40,
      width: 300,
      borderBottomWidth: 0.5,
    },

    checkView:{
      width: 300,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },

    checkBox:{
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
    },

    btnCadastrar:{
      width: 300,
      height: 45,
      backgroundColor: '#00275b',
      borderRadius: 10,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
    },
  })
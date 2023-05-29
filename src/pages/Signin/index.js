import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        
        <View style={styles.imgBox}>
          <Animatable.Image
            animation="flipInY"
            source={require('../../assets/img-signin.png')}
            style={{ width: 200 }}
            resizeMode="contain"
          />
        </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.box}>
          <View style={styles.inputGroup}>
            <View style={styles.inputHeader}>
              <View style={styles.line}></View>
              <Text style={styles.title}>Login</Text>
              <View style={styles.line}></View>
            </View>

            <TextInput
              placeholder="Usuário"
              style={styles.input}
            />

            <TextInput
              placeholder="Senha"
              style={styles.input}
              secureTextEntry={true}
            />

            <View style={styles.inputButtons}>
              <TouchableOpacity 
              style={[styles.btn, styles.btnEntrar]}
              onPress={ () => navigation.navigate('Home')}
              >
                <Text style={styles.txtEntrar}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              style={[styles.btn, styles.btnCadastrar]}
              onPress={ () => navigation.navigate('SignUp')}
              >
                <Text style={styles.txtCadastrar}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#fff',
    },

    imgBox:{
      height: 300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    box:{
      backgroundColor: '#0097b2',
      height: '63%',
      borderRadius: 10,
      paddingTop: 50,
      paddingHorizontal: 20,
    },

    inputGroup:{
      padding: 50,
      backgroundColor: '#ffffff',
      height: '100%',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 10,
    },

    inputHeader:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },

    line:{
      height: 1,
      width: 100,
      backgroundColor: '#000',
    },

    title:{
      fontSize: 25,
      color: '#00275b'
    },

    input:{
      top: 15,
      height: 40,
      width: 300,
      borderBottomWidth: 0.5,
    },

    inputButtons:{
      display: 'flex',
      gap: 15,
      top: 30,
    },

    btn:{
      top: 20,
      width: 300,
      height: 45,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    btnEntrar:{
      backgroundColor: '#00275b',
      elevation: 5,
    },

    btnCadastrar:{
      backgroundColor: '#ffffff',
      elevation: 5,
    },

    txtEntrar:{
      color: '#ffffff',
      fontSize: 18,
    },

    txtCadastrar:{
      fontSize: 18
    }

  })
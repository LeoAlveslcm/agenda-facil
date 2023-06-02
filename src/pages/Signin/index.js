import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import InputSign from '../../components/Inputs/InputSign'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();

    return (
      <View style={{backgroundColor: '#fff'}}>
        
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

            <View style={{top: 15, gap: 10}}>
              <InputSign place= "Usuário"/>
              <InputSign place= "Senha" secure={true}/>
            </View>
            
            <View style={{gap: 15, top: 30}}>
              <TouchableOpacity 
              style={[styles.btn, styles.btnEntrar]}
              onPress={ () => navigation.navigate('Home')}
              >
                <Text style={{fontSize: 18, color: '#fff'}}>Entrar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              style={[styles.btn, styles.btnCadastrar]}
              onPress={ () => navigation.navigate('SignUp')}
              >
                <Text style={{fontSize: 18}}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    imgBox:{
      height: 300,
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
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 10,
    },

    inputHeader:{
      width: '100%',
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

    btn:{
      top: 20,
      width: 300,
      height: 45,
      borderRadius: 10,
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
  })
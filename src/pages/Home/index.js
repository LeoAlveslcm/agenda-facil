import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

import HeaderBar from '../../components/HeaderBar';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();

    return (
      <Animatable.View 
      animation="pulse"
      style={styles.container}>
        
        <HeaderBar />

        <View style={styles.body}>
            <Image
            source={require('../../assets/img-signin.png')}
            style={{width: 120, bottom: -60}}
            resizeMode="contain"
            />

            <TouchableOpacity 
            style={[styles.btnBox, styles.btn1]}
            onPress={ () => navigation.navigate('Schedules')}>
                <Image 
                source={require('../../assets/meus-agendamentos.png')}
                style={{ width: 100, height: 100 }}/>

                <Text style={{color: '#ffffff', fontSize: 20}}>Meus Agendamentos</Text> 
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.btnBox, styles.btn2]}
            onPress={ () => navigation.navigate('CreateSchedules')}>
                <Image 
                source={require('../../assets/criar-agendamento.png')}
                style={{ width: 100, height: 100 }}/>
                <Text style={{color: '#ffffff', fontSize: 20}}>Criar Agendamento</Text>
            </TouchableOpacity>
        </View>
        
      </Animatable.View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: '#fff',

        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    body:{
        height: 600,
        paddingBottom: 50,

        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 20,
    },

    btnBox:{
        height: 180,
        width: 300,
        borderRadius: 10,
        backgroundColor: '#e8e8e8',

        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },

    btn1:{
        backgroundColor: '#00275b',
    },

    btn2:{
        backgroundColor: '#0097b2',
    },
  })
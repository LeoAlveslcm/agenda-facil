import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function Home() {
  const navigation = useNavigation();

    return (
    <Animatable.View 
    animation="pulse"
    style={styles.container}>
        
        <View style={styles.header}>
            <Text style={styles.bemVindo}>Bem-vindo Fulano</Text>
            
            <TouchableOpacity 
            onPress={ () => navigation.navigate('Profile')}>
                <Ionicons name="person-circle-outline" size={50} color='#ffffff'/>
            </TouchableOpacity>
        </View>

        <View style={styles.body}>
            <Image
            source={require('../../assets/img-signin.png')}
            style={styles.logo}
            resizeMode="contain"
            />

            <TouchableOpacity 
            style={[styles.btnBox, styles.btn1]}
            onPress={ () => navigation.navigate('')}>
                <Image 
                source={require('../../assets/consultar-agendamentos.png')}
                style={{ width: 100, height: 100 }}/>

                <Text style={styles.txt}>Consultar Agendamentos</Text> 
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.btnBox, styles.btn2]}
            onPress={ () => navigation.navigate('')}>
                <Image 
                source={require('../../assets/disponibilizar-agendamentos.png')}
                style={{ width: 100, height: 100 }}/>
                <Text style={styles.txt}>Disponibilizar Agendamento</Text>
            </TouchableOpacity>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <Ionicons name="briefcase-outline" size={20} color='#000'/>
            <Text>Conta Profissional</Text>
        </View>
        
    </Animatable.View>
    );
}

  const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: '#fff',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

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
        height: 600,
        paddingBottom: 50,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 20,
    },

    logo:{
        width: 120,
        bottom: -60,
    },

    btnBox:{
        height: 180,
        width: 300,
        borderRadius: 10,
        backgroundColor: '#e8e8e8',

        display: 'flex',
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

    txt:{
        color: '#ffffff',
        fontSize: 20,
    },
  })
import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Schedules() {
  const navigation = useNavigation();

    return (
      <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titleContainer}>Agendamentos por data:</Text>
        <Text>Terça-Feira 13/06</Text>

        <View style={styles.schedulesBox}>
          <View style={styles.schedules}>
            <View style={{gap: 10}}>
              <Text>Cliente: Carlos</Text>
              <Text>Data: 13/06</Text>
              <Text>Horario: 14:30</Text>
            </View>
            
            <View style={styles.optionsBox}>
              <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Entrar em contato</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{color: '#a00824', borderBottomWidth: 0.5}}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.schedules}>
            <View style={{gap: 10}}>
              <Text>Cliente: João</Text>
              <Text>Data: 13/06</Text>
              <Text>Horario: 16:00</Text>
            </View>
            
            <View style={styles.optionsBox}>
              <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Entrar em contato</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{color: '#a00824', borderBottomWidth: 0.5}}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.schedules}>
            <View style={{gap: 10}}>
              <Text>Cliente: Felipe</Text>
              <Text>Data: 13/06</Text>
              <Text>Horario: 17:30</Text>
            </View>
            
            <View style={styles.optionsBox}>
              <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Entrar em contato</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{color: '#a00824', borderBottomWidth: 0.5}}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text>Quarta-Feira 14/06</Text>

        <View style={styles.schedulesBox}>
          <View style={styles.schedules}>
            <View style={{gap: 10}}>
              <Text>Cliente: Lucas</Text>
              <Text>Data: 14/06</Text>
              <Text>Horario: 14:30</Text>
            </View>
            
            <View style={styles.optionsBox}>
              <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Entrar em contato</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{color: '#a00824', borderBottomWidth: 0.5}}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      width: '100%',
      height: '100%',
      marginTop: 50,
      marginBottom: 20,

      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 25,
    },

    titleContainer:{
      width: '100%',
      height: 50,
      fontSize: 18,

      color: '#fff',
      backgroundColor: '#00275b',
      textAlign: 'center',
      textAlignVertical: 'center',
      elevation: 15,
    },

    schedulesBox:{
      width: '100%',
    },

    schedules:{
      padding: 10,
      margin: 20,

      backgroundColor: '#fff',
      borderRadius: 5,

      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      elevation: 5,
    },

    optionsBox:{
      marginTop: 10,
      alignItems: 'center',
      gap: 10,
    },
  })
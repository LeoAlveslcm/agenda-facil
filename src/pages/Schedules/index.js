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

        <Text style={styles.titleContainer}>Agendamentos vigentes:</Text>

        <View style={styles.schedulesBox}>
          <View style={styles.schedules}>
            <Text style={styles.schedulesTitle}>Barbeiro</Text>
            <Text>Profissional: Severino</Text>
            <Text>Data: 13/06</Text>
            <Text>Horario: 14:30</Text>

            <View style={styles.optionsBox}>
              <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Alterar</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{color: '#a00824', borderBottomWidth: 0.5}}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.schedules}>
            <Text style={styles.schedulesTitle}>Manicure</Text>
            <Text>Profissional: Adriana</Text>
            <Text>Data: 13/06</Text>
            <Text>Horario: 16:30</Text>

            <View style={styles.optionsBox}>
              <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Alterar</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={{color: '#a00824', borderBottomWidth: 0.5}}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.schedules}>
            <Text style={styles.schedulesTitle}>Manicure</Text>
            <Text>Profissional: Adriana</Text>
            <Text>Data: 15/06</Text>
            <Text>Horario: 19:00</Text>

            <View style={styles.optionsBox}>
              <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Alterar</Text>
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
      height: '100%',

    },

    schedules:{
      padding: 10,
      margin: 20,

      backgroundColor: '#fff',
      borderRadius: 5,

      alignItems: 'center',
      gap: 10,
      elevation: 5,
    },

    schedulesTitle:{
      color: '#00275b',
      fontSize: 15,
      fontWeight: 'bold',
    },

    optionsBox:{
      width: '100%',
      marginTop: 10,

      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  })
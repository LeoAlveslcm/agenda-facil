import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  ScrollView
} from 'react-native'

import SchedulesBox from '../../components/Schedules/SchedulesBox'

import { useNavigation } from '@react-navigation/native'

export default function Schedules() {
  const navigation = useNavigation();

    return (
      <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titleContainer}>Agendamentos vigentes:</Text>

        <View style={{width: '100%', height: '100%'}}>
          <SchedulesBox professional="Barbeiro" nome="Severino" data="14/06" hora="14:00"/>
          <SchedulesBox professional="Manicure" nome="Adriana" data="13/06" hora="16:30"/>
          <SchedulesBox professional="Manicure" nome="Adriana" data="15/06" hora="19:00"/>
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
  })
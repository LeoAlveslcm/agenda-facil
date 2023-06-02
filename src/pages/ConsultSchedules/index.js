import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  ScrollView
} from 'react-native'

import SchedulesAvaibaleBox from '../../components/Schedules/SchedulesAvaibaleBox'

import { useNavigation } from '@react-navigation/native'

export default function Schedules() {
  const navigation = useNavigation();

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleContainer}>Agendamentos por data:</Text>

          <View style={{width: '100%'}}>
            <Text style={{textAlign: 'center'}}>Terça-Feira 13/06</Text>

            <SchedulesAvaibaleBox nome="Carlos" data="13/06" hora="14:30"/>
            <SchedulesAvaibaleBox nome="Lucas" data="13/06" hora="16:00"/>
            <SchedulesAvaibaleBox nome="João" data="13/06" hora="17:30"/>

            <Text style={{textAlign: 'center'}}>Quarta-Feira 14/06</Text>

            <SchedulesAvaibaleBox nome="Felipe" data="14/06" hora="14:30"/>
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
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

export default function Schedules() {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Text>Lista de Agendamentos:</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({

  })
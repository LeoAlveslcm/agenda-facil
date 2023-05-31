import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

export default function Schedules() {

    return (
        <View style={styles.contacts}>
            <View style={styles.contactsBox}>
            <Ionicons name="mail" size={22} color='#0097b2'/>
            <Text style={{ fontSize: 18 }}>E-mail: Adrianamani@gmail.com</Text>
            </View>
            <View style={styles.contactsBox}>
            <Ionicons name="call" size={22} color='#0097b2'/>
            <Text style={{ fontSize: 18 }}>Telefone: (81) 96655-1144</Text>
            </View>
            <View style={styles.contactsBox}>
            <Ionicons name="location" size={22} color='#0097b2'/>
            <Text style={{ fontSize: 18 }}>Endereço: Rua Sá e Souza, 886</Text>
            </View>
        </View> 
    );
  }

  const styles = StyleSheet.create({
    contacts:{
        gap: 20,
      },
    
      contactsBox:{
        paddingLeft: 20,
    
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
  })
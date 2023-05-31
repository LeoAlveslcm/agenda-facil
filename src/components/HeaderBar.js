import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const HeaderBar = () => {
  const navigation = useNavigation();
  
      return (
        <View style={styles.header}>
            <Text style={styles.bemVindo}>Bem-vindo Fulano</Text>
              
            <TouchableOpacity 
              onPress={ () => navigation.navigate('Profile')}>
                  <Ionicons name="person-circle-outline" size={50} color='#ffffff'/>
            </TouchableOpacity>
        </View>

      );
    }
  
    const styles = StyleSheet.create({
        header:{
          width: '100%',
          height: 60,
          
          backgroundColor: '#00275b',
          borderBottomEndRadius: 10,
          borderBottomStartRadius: 10,
  
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
      },
  
      bemVindo:{
          color: '#ffffff',
          fontSize: 18,
      },
    })

    export default HeaderBar;
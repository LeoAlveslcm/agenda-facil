import React from "react"
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const SchedulesAvaibaleBox = (props) => {
  nome = props.nome
  data = props.data
  hora = props.hora

  return (
    <View style={styles.schedules}>
            <View style={{gap: 10}}>
              <Text>Cliente: {nome}</Text>
              <Text>Data: {data}</Text>
              <Text>Horario: {hora}</Text>
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
  );
}
  
    const styles = StyleSheet.create({  
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

    export default SchedulesAvaibaleBox;
import React from "react"
import { 
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const SchedulesBox = (props) => {
  nome = props.nome
  data = props.data
  hora = props.hora
  professional = props.professional

  return (
    <View style={styles.schedules}>
        <Text style={styles.schedulesTitle}>{professional}</Text>
        <Text>Profissional: {nome}</Text>
        <Text>Data: {data}</Text>
        <Text>Horario: {hora}</Text>

        <View style={styles.optionsBox}>
            <TouchableOpacity>
                <Text style={{color: '#00275b', borderBottomWidth: 0.5}}>Alterar</Text>
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

    export default SchedulesBox;
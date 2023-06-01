import React from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import Input from "../../components/Input"
import SaveButton from "../../components/SaveButton"

import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function Profile() {
  const navigation = useNavigation();

    return (
      <ScrollView>
      <View style={styles.container}>

        <View style={styles.header}>
          <Ionicons name="person-circle-outline" size={100} color='#ffffff'/>
        </View>

        
        <View style={styles.changeBox}>
          <Text style={styles.title}>Dados Pessoais</Text>

          <Input label= "Nome: " name= "Fulano" />
          <Input label= "Sobrenome: " name= "Sabino Silva" />
          <Input label= "Usuário: " name= "fulsab97" />
          <Input label= "E-mail: " name= "fulanosabsilva@gmail.com" />
          <Input label= "Telefone: " name= "81999887766" />

          <SaveButton txt= "Salvar Dados" />
        </View>

        <View style={styles.changeBox}>
          <Text style={styles.title}>Alterar senha</Text>

          <Input label= "Senha atual: " place= "Senha atual" secure={true}/>
          <Input label= "Nova senha: " place= "Nova senha" secure={true}/>
          <Input label= "Confirme sua nova senha: " place= "Repita a nova senha" secure={true}/>

          <SaveButton txt= "Alterar Senha" />
        </View>

        <View style={styles.changeBox}>
          <Text style={styles.title}>Perfil Prrofissional</Text>

          <Input label= "Prestador: " place= "Nome do prestador" />
          <Input label= "Serviço: " place= "Serviço prestado" />
          <Input label= "Endereço: " place= "Endereço comercial" />

          <SaveButton txt= "Salvar Dados" />
        </View>

        <TouchableOpacity 
        onPress={() => navigation.navigate('ProfessionalHome')}>
        <Text style={[styles.changeProfile, styles.change1]}>Perfil Profissional</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.changeProfile}>Perfil Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={ () => navigation.navigate('SignIn')}>
        <Text style={styles.exit}>Sair</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>

      
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#fff',
      
      alignItems: 'center',
      gap: 20,
    },

    header:{
      width: '100%',
      height: 150,
      backgroundColor: '#00275b',

      alignItems: 'center',
      justifyContent: 'center',
    },

    changeBox:{
      top: 20,
      marginBottom: 20,

      alignItems: 'flex-start',
      gap: 20,
    },

    input:{
      height: 40,
      width: 350,
      borderBottomWidth: 0.5,
    },

    title:{
      width: 350,
      padding: 20,
      textAlign: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#00275b',
      alignSelf: 'center',
    },

    changeProfile:{
      width: 350,
      color: '#00275b',
    },

    change1:{
      marginTop: 30,
    },

    exit:{
      width: 350,
      marginBottom: 50,
      color: '#a00824',
    }

  })
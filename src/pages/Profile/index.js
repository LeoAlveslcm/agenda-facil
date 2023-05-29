import React, {useState} from "react"
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native'

import * as Animatable from 'react-native-animatable'

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

        
          <View style={styles.inputGroup}>
            <Text style={styles.title}>Dados Pessoais</Text>

            <View style={styles.inputBox}>
              <Text>Nome: </Text>
              <TextInput
                value="Fulano"
                style={styles.input}
              />
            </View>
            
            <View style={styles.inputBox}>
              <Text>Sobrenome: </Text>
              <TextInput
                value="Sabino Silva"
                style={styles.input}
              />
            </View>

            <View style={styles.inputBox}>
              <Text>Usuário: </Text>
              <TextInput
                value="fulsab97"
                style={styles.input}
              />
            </View>

            <View style={styles.inputBox}>
              <Text>E-mail: </Text>
              <TextInput
                value="fulanosabsilva@gmail.com"
                style={styles.input}
              />
            </View>

            <View style={styles.inputBox}>
              <Text>Telefone: </Text>
              <TextInput
                value="81999887766"
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.btnSave}>
            <Text style={styles.btnText}>Salvar dados</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.changeBox}>
            <Text style={styles.title}>Alterar senha</Text>

            <View style={styles.inputBox}>
              <Text>Senha atual: </Text>
              <TextInput
                placeholder="Senha atual"
                style={styles.input}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.inputBox}>
              <Text>Nova senha: </Text>
              <TextInput
                placeholder="Nova senha"
                style={styles.input}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.inputBox}>
              <Text>Confirme a nova senha: </Text>
              <TextInput
                placeholder="Repita a nova senha"
                style={styles.input}
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity style={styles.btnSave}>
            <Text style={styles.btnText}>Alterar Senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
          onPress={() => navigation.navigate('ProfessionalHome')}>
          <Text style={styles.changeProfile}>Perfil Profissional</Text>
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
      
      display: 'flex',
      alignItems: 'center',
      gap: 20,
    },

    header:{
      width: '100%',
      height: 150,
      backgroundColor: '#00275b',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputGroup:{
      display: 'flex',
      gap: 20,
      alignItems: 'flex-start',
    },

    input:{
      height: 40,
      width: 350,
      borderBottomWidth: 0.5,
    },

    btnSave:{
      top: 10,
      paddingHorizontal: 30,
      paddingVertical: 5,
      backgroundColor: '#00275b',
      borderRadius: 5,
    },

    btnText:{
      color: '#ffffff',
    },

    changeBox:{
      top: 20,
      paddingBottom: 50,

      display: 'flex',
      alignItems: 'flex-start',
      gap: 20,
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

    exit:{
      width: 350,
      marginBottom: 50,
      color: '#a00824',
    }

  })
import React, { useState } from "react"
import CheckBox from 'expo-checkbox'
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import * as yup from 'yup'
import * as Animatable from 'react-native-animatable'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'

const schema = yup.object({
  name: yup.string().required("Informe seu nome"),
  lastName: yup.string().required("Informe seu sobrenome"),
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  number: yup.string().required("Informe seu telefone"),
  user: yup.string().required("Informe seu usuário"),
  password: yup.string().min(6, "Asenha deve ter pelo menos 6 digitos").required("Informe sua senha"),
})

export default function SignUn() {
  const navigation = useNavigation();
  const [isSelected, setSelected] = useState(false)
  const [isChecked, setChecked] = useState(false)

  const { control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  })

  function handleSignIn(data) {
    console.log(data);
  }
  
    return (
      <View style={styles.container}>

        <Animatable.View animation="fadeInUp" style={styles.box}>
          <View style={styles.inputGroup}>
            <View style={{gap: 15}}>
              
              <Controller 
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    style={styles.input}
                    placeholder= "Nome"
                    onChangeText={onChange}
                    value={value}
                    />
                )}
              />
              {errors.name && <Text style={styles.error}>{errors.name?.message}</Text>}
              
              <Controller 
                control={control}
                name="lastName"
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    style={styles.input}
                    placeholder= "Sobrenome"
                    onChangeText={onChange}
                    value={value}
                    />
                )}
              />
              {errors.lastName && <Text style={[styles.error, styles.error2]}>{errors.lastName?.message}</Text>}

              <Controller 
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    style={styles.input}
                    placeholder= "E-mail"
                    onChangeText={onChange}
                    value={value}
                    />
                )}
              />
              {errors.email && <Text style={[styles.error, styles.error3]}>{errors.email?.message}</Text>}

              <Controller 
                control={control}
                name="number"
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    style={styles.input}
                    placeholder= "Telefone"
                    onChangeText={onChange}
                    value={value}
                    />
                )}
              />
              {errors.number && <Text style={[styles.error, styles.error4]}>{errors.number?.message}</Text>}

              <Controller 
                control={control}
                name="user"
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    style={styles.input}
                    placeholder= "Usuário"
                    onChangeText={onChange}
                    value={value}
                    />
                )}
              />
              {errors.user && <Text style={[styles.error, styles.error5]}>{errors.user?.message}</Text>}

              <Controller 
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <TextInput 
                    style={styles.input}
                    placeholder= "Senha"
                    secureTextEntry={true}
                    onChangeText={onChange}
                    value={value}
                    />
                )}
              />
              {errors.password && <Text style={[styles.error, styles.error6]}>{errors.password?.message}</Text>}

            </View>

            <View style={styles.checkView}>
              <View style={styles.checkBox}>
                <CheckBox 
                  value={isSelected} 
                  onValueChange={setSelected} 
                  color={isSelected? "#00275b": undefined}
                />
                <Text>Prestador</Text>
              </View>
              <View style={styles.checkBox}>
                <CheckBox 
                  value={isChecked} 
                  onValueChange={setChecked} 
                  color={isChecked? "#00275b": undefined}
                />
                <Text>Cliente</Text>
              </View>
            </View>

            <TouchableOpacity 
            onPress={ () => navigation.navigate('SignIn')}>
              <Text style={{fontSize: 18, color: '#00275b'}}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={[styles.btnCadastrar]}   
            onPress={handleSubmit(handleSignIn)}>
              <Text style={{fontSize: 18, color: '#fff'}}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      height: '100%',
      backgroundColor: '#fff',

      justifyContent: 'flex-end',
    },

    box:{
      width: '100%',
      height: '80%',
      top: 20,
      paddingTop: 50,
      paddingHorizontal: 20,

      backgroundColor: '#0097b2',
      borderRadius: 10,
    },

    inputGroup:{
      height: '100%',
      paddingVertical: 20,

      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 20,

      backgroundColor: '#ffffff',
      borderRadius: 10,
    },

    checkView:{
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },

    checkBox:{
      flexDirection: 'row',
      gap: 10,
    },

    btnCadastrar:{
      bottom: 10,
      width: 300,
      height: 45,
      backgroundColor: '#00275b',
      borderRadius: 10,

      justifyContent: 'center',
      alignItems: 'center', 
    },

    input:{
      height: 40,
      width: 300,
      borderBottomWidth: 0.5,
    },

    error:{
      color: 'red',
      fontSize: 12,
      position: 'absolute',
      top: 40
    },

    error2:{
      top: 95
    },

    error3:{
      top: 150
    },

    error4:{
      top: 205
    },
    
    error5:{
      top: 260
    },
    
    error6:{
      top: 315
    },
  })
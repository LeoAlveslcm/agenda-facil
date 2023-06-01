import React from 'react'

import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Schedules from '../pages/Schedules'
import CreateSchedules from '../pages/CreateSchedules'
import Profile from '../pages/Profile'
import ProfessionalHome from '../pages/ProfessionalHome'
import ConsultSchedules from '../pages/ConsultSchedules'
import MakeSchedulesAvaibale from '../pages/MakeSchedulesAvaibale'

import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#00275b',
                    borderTopEndRadius: 10,
                    borderTopStartRadius: 10,
                }
            }} >
            <Tab.Screen 
            name="tabHome" 
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Ionicons name="home" size={25} color='#ffffff'/>
                    }
                    return <Ionicons name="home-outline" size={25} color='#ffffff'/>
                }
            }} />
            <Tab.Screen 
            name="Contacts" 
            component={Contacts}
            options={{
                headerShown: false,
                tabBarIcon: ({focused}) => {
                    if(focused){
                        return <Ionicons name="call" size={25} color='#ffffff'/>
                    }
                    return <Ionicons name="call-outline" size={25} color='#ffffff'/>
                }
            }} />
        </Tab.Navigator>
    );
}

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
                
            <Stack.Screen
                name="SignUp" 
                component={SignUp}
                options={{ headerShown: false }}
            />    

            <Stack.Screen
                name="Home"
                component={Tabs}
                options={{ headerShown: false }}
            />   

            <Stack.Screen
                name="ProfessionalHome"
                component={ProfessionalHome}
                options={{ headerShown: false }}
            />  

            <Stack.Screen
                name="Contacts"
                component={Tabs}
                options={{ headerShown: false }}
            /> 

            <Stack.Screen
                name="Schedules"
                component={Schedules}
                options={{
                    title: 'Meus Agendamentos',
                    headerStyle: {
                        backgroundColor: "#00275b",
                    },
                    headerTintColor: '#ffffff',
                    headerTitleAlign: 'center',
                }}
            /> 

            <Stack.Screen
                name="CreateSchedules"
                component={CreateSchedules}
                options={{
                    title: 'Criar Agendamento',
                    headerStyle: {
                        backgroundColor: "#00275b",
                    },
                    headerTintColor: '#ffffff',
                    headerTitleAlign: 'center',
                }}
            /> 

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Perfil',
                    headerStyle: {
                        backgroundColor: "#00275b",
                    },
                    headerTintColor: '#ffffff',
                    headerTitleAlign: 'center',
                }}
            /> 

            <Stack.Screen
                name="ConsultSchedules"
                component={ConsultSchedules}
                options={{
                    title: 'Agendamentos Vigentes',
                    headerStyle: {
                        backgroundColor: "#00275b",
                    },
                    headerTintColor: '#ffffff',
                    headerTitleAlign: 'center',
                }}
            /> 

            <Stack.Screen
                name="MakeSchedulesAvaibale"
                component={MakeSchedulesAvaibale}
                options={{
                    title: 'Disponibilizar Agendamento',
                    headerStyle: {
                        backgroundColor: "#00275b",
                    },
                    headerTintColor: '#ffffff',
                    headerTitleAlign: 'center',
                }}
            /> 
        </Stack.Navigator>
    );
}
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ColorSchemeContext } from '../../../context/ColorSchemeContext'
import { lightProps, darkProps } from './navigationProps/navigationProps'
import HeaderStyle from './headerComponents/HeaderStyle'

import Login from '../../../scenes/login'
import Registration from '../../../scenes/registration'
import Onboarding from '../../../scenes/splash'

const Stack = createStackNavigator()

export const LoginNavigator = () => {
  const { scheme } = useContext(ColorSchemeContext)
  const navigationProps = scheme === 'dark' ? darkProps:lightProps
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={({ navigation }) => ({
          headerBackground: scheme === 'dark' ? null: () => <HeaderStyle />,
        })}
      />
    </Stack.Navigator>
  )
}

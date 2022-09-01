import { View, Text, Image, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext, useState } from 'react'
import ScreenTemplate from '../../components/ScreenTemplate'
import { colors, fontSize } from 'theme'
import Ionicons from "react-native-vector-icons/Ionicons"
import { ColorSchemeContext } from '../../context/ColorSchemeContext'
import { UserDataContext } from '../../context/UserDataContext'
import Font, { fonts } from '../../theme/fonts'
import { useNavigation } from '@react-navigation/native'
import PaperOnboarding, { PageContentProps, PaperOnboardingItemType } from "@gorhom/paper-onboarding";

export default function onboarding() {
  const navigation = useNavigation()
  const { userData } = useContext(UserDataContext)
  const { scheme } = useContext(ColorSchemeContext)
  const isDark = scheme === 'dark'
  const colorScheme = {
    text: isDark ? colors.white : colors.primaryText
  }


  const data = [
    {
      title: <Text style={styles.title}>Over the sky</Text>,
      description: <Text style={styles.subtitle}>The shy is not the limit anymore.</Text>,
      backgroundColor: '#F7C663',
      image: <Image source={require('../../../assets/images/illustration_1.png')}
        style={{
          top: 15,
          height: 350,
          width: 350,
          resizeMode: 'cover',

        }}
      />,
    },

    {

      title: <Text style={styles.title}>Jump'N</Text>,
      description: <Text style={styles.subtitle}>Achieve your goals on a day-to-day basis</Text>,
      backgroundColor: '#3E8AE5',
      image: <Image source={require('../../../assets/images/illustration_2.png')}
        style={{
          top: 15,
          height: 350,
          width: 350,
          resizeMode: 'cover',

        }}
      />,
    },

    {

      title: 'Be dreamy',
      description: 'The greater your ambition, the greater your reward',
      backgroundColor: '#FCB1D0',
      image: <Image source={require('../../../assets/images/illustration_3.png')}
        style={{
          top: 15,
          height: 350,
          width: 350,
          resizeMode: 'cover',

        }}
      />,
    },

  ];

  const handleOnClosePress = () => navigation.navigate('Login')

  useEffect(() => {

    console.log('OnBoarding')
    const loadAssetsAsync = async () => {
      await Font.loadAsync({
        fonts,
      })
    }

  }, [])

  return (
    <ScreenTemplate>


      {/* This a text template */}
      {/* <Text style={[styles.field, {color: colorScheme.text}]}>onboarding testttt</Text> */}
      <PaperOnboarding
        data={data}
        onCloseButtonPress={handleOnClosePress}
        closeButtonText="Let's start"

      />


    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  title : {
    padding : 0,
    fontSize : 29.5,
  },

  subtitle : {
  },
})

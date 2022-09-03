import React, { useState, useContext, useEffect } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ScreenTemplate from '../../components/ScreenTemplate';
import Button from '../../components/Button'
import TextInputBox from '../../components/TextInputBox';
import { SocialIcon } from 'react-native-elements'
import Logo from '../../components/Logo';
import { firestore } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore';
import Spinner from 'react-native-loading-spinner-overlay'
import { useNavigation } from '@react-navigation/native'
import { colors, fontSize, fonts } from '../../theme';
import { ColorSchemeContext } from '../../context/ColorSchemeContext'
import { LogBox } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'


// To ignore a useless warning in terminal.
// https://stackoverflow.com/questions/44603362/setting-a-timer-for-a-long-period-of-time-i-e-multiple-minutes
LogBox.ignoreLogs(['Setting a timer']);



export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [spinner, setSpinner] = useState(false)
  const navigation = useNavigation()
  const { scheme } = useContext(ColorSchemeContext)
  const isDark = scheme === 'dark'
  const colorScheme = {
    text: colors.white
  }

  const onFooterLinkPress = () => {
    navigation.navigate('Registration')
  }

  useEffect(() => {
    console.log('Login screen, welcome')
  }, [])

  const onLoginPress = async () => {
    try {
      setSpinner(true)
      const response = await signInWithEmailAndPassword(auth, email, password)
      const uid = response.user.uid
      const usersRef = doc(firestore, 'users', uid)
      const firestoreDocument = await getDoc(usersRef)
      if (!firestoreDocument.exists) {
        setSpinner(false)
        alert("User does not exist anymore.")
        return;
      }
    } catch (error) {
      setSpinner(false)
      alert(error)
    }
  }

  const image = { url: "https://img.freepik.com/psd-gratuit/illustration-homme-affaires_1150-58988.jpg?w=740&t=st=1662223215~exp=1662223815~hmac=93c916294ce6173f54c544a0c2c809bb6107662e05045f1b620227e9130c88f6" };
 const image1 = {url : "https://img.freepik.com/photos-gratuite/toile-fond-texture-mur-beton-solide_53876-129493.jpg?w=740&t=st=1662224008~exp=1662224608~hmac=8a8ddce5f2a04e65a169ca4ca6002070377c389c8875f037e9d0c1283cb92f95"}

 return (
    <ScreenTemplate>
      <View style={styles.main}>
        <ImageBackground source={image} style={ styles.image}>

        <KeyboardAwareScrollView
            style={styles.keyboard}
            keyboardShouldPersistTaps="always"
          >
            <ImageBackground source={image1} style={ styles.keyboardImage}>
            <Text style={[styles.headerText, { color: colorScheme.text }]} >WELCOME</Text>
            <Text style={[styles.headerTextSubstitle, { color: colorScheme.text }]}> let's begin where we left off 😜 </Text>

            <TextInputBox
              placeholder='E-mail'
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              value={email}
              keyboardType={'email-address'}
              style={styles.TextInputBox}
            />
            <TextInputBox
              secureTextEntry={true}
              placeholder='Password'
              onChangeText={(text) => setPassword(text)}
              value={password}
              autoCapitalize="none"
            />
            <Text style={[styles.forgot, { color: colorScheme.text }]}> Forgot Password ?</Text>

            <Button
              label="Let's go"
              color={'#3E8AE5'}
              onPress={() => onLoginPress()}
            />
            <View style={styles.footerView}>
              <Text style={[styles.footerText, { color: colorScheme.text }]}>Don't have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
            </View>

            <View>
              <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
              />
            </View>

            <View >
              <Text style={[styles.socialText, { color: colorScheme.text }]}>Continue with </Text>
              <View style={styles.socials}>
                <SocialIcon
                  type='twitter'
                />
                <SocialIcon
                  type='facebook'
                />
                <SocialIcon
                  type='apple'
                />
                <SocialIcon
                  type='google'
                />
              </View>

            </View>
            </ImageBackground>
          </KeyboardAwareScrollView>
        </ImageBackground>
        </View>

        <Spinner
          visible={spinner}
          textStyle={{ color: colors.white }}
          overlayColor="rgba(0,0,0,0.5)"
        />



    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main : {
    height: '100%',
    marginTop: 10,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 300,
    top: -55,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  keyboardImage : {
    opacity : 1,
    height: 615,
    paddingTop : 30,
    bottom: 39
  },
  socials: {
    top: -45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    flexDirection: 'row'
  },
  socialText: {
    padding: 10,
    bottom: 50,
    textAlign: 'center'
  },
  keyboard: {
    flex: 1,
    backgroundColor: '#292929',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 40,
    top: 200,
    width: '100%',
  },

  footerView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    fontSize: fontSize.small
  },
  footerText: {
    fontSize: fontSize.large,
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 29,
  },

  headerTextSubstitle: {
    fontSize: 15,
    padding: 10,
    bottom: 15,
    paddingLeft: 29,
  },
  forgot: {
    fontSize: fontSize.small,
    textAlign: 'right',
    paddingRight: 30,
    padding: 10,
  },
  footerLink: {
    color: colors.blueLight,
    fontWeight: "bold",
    fontSize: fontSize.large
  },
})

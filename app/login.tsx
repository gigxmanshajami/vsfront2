import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingViewBase, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';
import { useAppColorScheme } from '@/utils/ColorScheme';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { Link, router } from 'expo-router';
import axios from 'axios';
export default function login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [passsword, setPassword] = useState();
  let schema = useAppColorScheme();
  // useEffect(() => {
  //   router.replace("home");
  // }, [])
  const [isChecked, setChecked] = useState(false);
  return (

    <KeyboardAvoidingView style={{
      backgroundColor: schema === 'dark' ? "#010a12" : '#fff',
      flex: 1,
      padding: 20,
    }}>
      <StatusBar style='auto' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingTop: 80,
        }}>
        <View style={{
          alignItems: 'center',
        }}>
          <Image
            source={
              Platform.OS === 'ios'
                ? require('@/assets/images/splash.png')
                : require('@/assets/images/splash.png')
            }
            style={{
              width: 150,
              height: 150,
            }}
          />
        </View>
        <View>
          <Text style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: schema === 'dark' ? 'white' : 'black',
            marginBottom: 30,
          }}>
            Hi, Welcome <HelloWave />
          </Text>
          <TextInput
            style={styles.input(schema)}
            placeholderTextColor={schema === 'dark' ? 'white' : 'black'}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
          />
          <TextInput
            style={styles.input(schema)}
            placeholderTextColor={schema === 'dark' ? 'white' : 'black'}
            placeholder='Password'
            secureTextEntry={true}
            value={passsword}
            onChangeText={setPassword}
            keyboardType='visible-password'
          />
        </View>
        <View style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View style={{
            flexDirection: 'row',
          }}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#0466C8' : undefined}
            />
            <Text
              style={{
                color: schema === 'dark' ? 'white' : 'black',
                fontWeight: '400',
                fontSize: 14,
              }}
            >
              Remember Me
            </Text>
          </View>
          <View>
            <Text style={{
              color: "#0466C8",
              fontWeight: '500',
            }}>
              Forgot Password
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => loginuser()} style={{
            backgroundColor: '#0466C8',
            // #0466C8
            padding: 20,
            borderRadius: 10,
            marginTop: 60,
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: "90%",
            alignSelf: "center",
            shadowColor: '#000',
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,
            // elevation: 5,
          }}>
            <Text style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
              Log in
            </Text>
          </TouchableOpacity>
          <Text style={{
            color: schema === 'dark' ? 'white' : 'black',
            fontWeight: '400',
            fontSize: 18,
            marginTop: 20,
            marginBottom: 10,
            textAlign: 'center',
          }}>
            Don't have an account
          </Text>
          <Pressable onPress={() => {
            router.navigate('signup');
          }}>
            <Text style={{
              color: "#0466C8",
              fontWeight: '400',
              fontSize: 18,
              marginTop: 2,
              marginBottom: 20,
              textAlign: 'center',

            }}>
              Create Account
            </Text>
          </Pressable>
        </View>
      </ScrollView>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    margin: 0,
    borderRadius: 10,
    marginRight: 10,
  },
  input: (schema) => ({
    borderColor: schema === 'dark' ? '#1a222a' : '#000000',
    borderWidth: 0.9,
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: schema === 'dark' ? 'black' : 'white',
    color: schema === 'dark' ? 'white' : 'black',
    fontSize: 16,
    fontWeight: '500',
  }),
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingViewBase, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';
import { useAppColorScheme } from '@/utils/ColorScheme';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { StatusBar } from 'expo-status-bar';
import { ThemedView } from '@/components/ThemedView';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-input';
import { Link, router } from 'expo-router';
import { Eye, EyeOff } from "lucide-react-native";
import axios from 'axios';
type Props = {}

const signup = (props: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const secureTextEntryCheck = () => {
        setSecureTextEntry(!secureTextEntry);
    }
    //signup the user
    const signupUser = () => {
        let data = JSON.stringify({
            name: name,
            email: email,
            password: password,
            mobileNo: phone,
        })
        fetch('http://172.212.91.177:3000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        }).then(response => console.log(response.status, response.body)).catch(err => console.log(err));
    }
    function getCircularReplacer() {
        const ancestors = [];
        return function (key, value) {
            if (typeof value !== "object" || value === null) {
                return value;
            }
            // `this` is the object that value is contained in,
            // i.e., its direct parent.
            while (ancestors.length > 0 && ancestors.at(-1) !== this) {
                ancestors.pop();
            }
            if (ancestors.includes(value)) {
                return "[Circular]";
            }
            ancestors.push(value);
            return value;
        };
    }
    let schema = useAppColorScheme();
    const navigation = useNavigation();
    return (
        <ScrollView
            style={{
                backgroundColor: schema === 'dark' ? "#010a12" : '#f7f7f7',
                flex: 1,
                padding: 20,
            }}
            contentContainerStyle={{
                paddingBottom: 90,
                paddingTop: 80,

            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
        >
            <StatusBar style='auto' />

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
                    Create Account
                </Text>
                <TextInput
                    style={styles.input(schema)}
                    placeholderTextColor={schema === 'dark' ? 'white' : 'black'}
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input(schema)}
                    placeholderTextColor={schema === 'dark' ? 'white' : 'black'}
                    placeholder='email'
                    value={email}
                    onChangeText={setEmail}
                />

                <PhoneInput
                    ref={(ref) => { this.phone = ref; }}
                    onPressFlag={this.onPressFlag}
                    initialCountry={'us'}
                    initialValue="13178675309"
                    style={styles.input(schema)}
                    textProps={{
                        placeholder: 'Enter a phone number...'
                    }}
                />
                <View style={{
                    position: "relative",
                }}>

                    <TextInput
                        style={styles.input(schema)}
                        secureTextEntry={secureTextEntry}
                        placeholderTextColor={schema === 'dark' ? 'white' : 'black'}
                        placeholder='Password'
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={secureTextEntryCheck} >
                        {secureTextEntry === false ? (
                            <EyeOff color='black' size={24} style={{
                                position: "absolute",
                                right: 15,
                                bottom: 30,
                            }} />
                        ) : (
                            <Eye color='black' size={24} style={{
                                position: "absolute",
                                right: 15,
                                bottom: 30,
                            }} />
                        )
                        }
                    </TouchableOpacity>

                </View>

                <View style={{
                    position: "relative",
                }}>
                    <TextInput
                        style={styles.input(schema)}
                        secureTextEntry={secureTextEntry}
                        placeholderTextColor={schema === 'dark' ? 'white' : 'black'}
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />

                    <TouchableOpacity onPress={secureTextEntryCheck}>

                        {secureTextEntry === false ? (
                            <EyeOff color='black' size={24} style={{
                                position: "absolute",
                                right: 15,
                                bottom: 30,
                            }} />
                        ) : (
                            <Eye color='black' size={24} style={{
                                position: "absolute",
                                right: 15,
                                bottom: 30,
                            }} />
                        )
                        }

                    </TouchableOpacity>

                </View>

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
                            color: "#0466C8",
                            fontWeight: '400',
                            fontSize: 14,
                        }}
                    >
                        I  accept the terms and and privacy policy
                    </Text>
                </View>
                {/* <View>
                        <Text style={{
                            color: "#0466C8",
                            fontWeight: '500',
                        }}>
                            Forgot Password
                        </Text>
                    </View> */}
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        signupUser();
                    }}
                    style={{
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
                        Continue
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
                    Already have an account
                </Text>
                <Pressable onPress={() => {
                    router.navigate("login");
                }}>
                    <Text style={{
                        color: "#0466C8",
                        fontWeight: '400',
                        fontSize: 18,
                        marginTop: 2,
                        marginBottom: 20,
                        textAlign: 'center',

                    }}>
                        Log in
                    </Text>
                </Pressable>
            </View>
        </ScrollView>

    )
}

export default signup

const styles = StyleSheet.create({
    checkbox: {
        margin: 0,
        borderRadius: 10,
        marginRight: 10,
    },
    input: (schema) => ({
        borderColor: schema === 'dark' ? '#1a222a' : '#000000',
        borderWidth: 0.5,
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

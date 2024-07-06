import { Image, StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router';
type Props = {}

const Index = (props: Props) => {
    // useEffect(() => {
    //     router.replace("home");
    // }, [])
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-evenly",
        }}>
            <View style={{
                alignItems: 'center',
                paddingTop: 80,
            }}>
                <Image
                    source={
                        Platform.OS === 'ios'
                            ? require('@/assets/images/splash.png')
                            : require('@/assets/images/splash.png')
                    }
                    style={{
                        width: 130,
                        height: 130,
                    }}
                />
                <View style={{
                    alignItems: 'center',
                    justifyContent: "center",
                    width: 228,
                    height: 88,
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 28,
                        fontWeight: "bold",
                    }}>
                        Explore The App
                    </Text>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 16,
                        marginTop: 20,
                    }}>
                        Recharge Your Way, Anytime, Anywhere
                    </Text>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    router.push("login");
                }} style={{
                    backgroundColor: "#0466C8",
                    width: 228,
                    // height: 44,
                    alignItems: "center",
                    borderRadius: 8,
                    marginTop: 20,
                    // paddingHorizontal: 50,
                    // paddingVertical: 12,
                    // padding:20,
                    padding: 15,
                    marginBottom: 10,
                }}>
                    <Text style={{
                        color: "#fff",
                        fontWeight: "semibold",
                        fontSize: 16,
                    }}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    router.push("signup")
                }} style={{
                    width: 228,
                    // height: 44,
                    alignItems: "center",
                    borderRadius: 8,
                    marginTop: 5,
                    // paddingHorizontal: 50,
                    // paddingVertical: 12,
                    // padding:20,
                    borderWidth: 1.2,
                    borderColor: "#747474",
                    padding: 15,
                    marginBottom: 20,
                }}>
                    <Text style={{
                        color: "#000",
                        fontWeight: "semibold",
                        fontSize: 16,
                    }}>
                        Create account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Platform, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Bell, ShieldCheck, Smartphone, FileVideo, Percent, GlassWater, CircleDollarSign, Phone, Router, Shell, Cylinder, CreditCard, SatelliteDish, UsersRound, Home, Lightbulb, Construction, GraduationCap, SmartphoneCharging } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
type Props = {}

const home = (props: Props) => {
    const navigation = useNavigation()
    // useEffect(() => {
    //     navigation.navigate("signup");
    // }, [true])

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 100,
            }}
            showsHorizontalScrollIndicator={false}
            style={{
                flex: 1,
                paddingTop: 30,
            }}>
            <StatusBar style='dark' backgroundColor='#fff' />
            {/* header */}

            {/* containers */}
            <View style={{
                alignItems: "center",
                marginTop: 10,
                alignContent: "center",
            }}>
                <View style={{
                    width: 330,
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    height: 140,
                    elevation: 2,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                    <Text style={{
                        fontWeight: "bold",
                    }}>AD</Text>
                </View>
                <View style={{
                    width: 320,
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    height: 30,
                    backgroundColor: "#fff",
                    flexDirection: "row",
                    borderRadius: 10,
                    marginTop: 10,

                }}>
                    <Text style={{
                        color: "#0466C8",
                        fontWeight: "medium",
                    }}>All Services Are Working Fine</Text>
                    <ShieldCheck color={"#fff"} fill={"#0466C8"} />
                </View>
                {/* popular container */}
                <View style={{
                    width: 330,
                    height: 140,
                    elevation: 2,
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            marginLeft: 6,
                        }}>Popular</Text>
                    </View>
                    {/* container items*/}
                    <View style={{
                        marginTop: 10,
                        flexDirection: "row",
                        paddingRight: 10,
                        paddingLeft: 10,
                        justifyContent: "space-between",
                        width: "100%",
                    }}>
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 53,
                        }}>
                            <SmartphoneCharging color={"#FFCD29"} size={38} absoluteStrokeWidth fill={"#0466C8"} strokeWidth={1.8} />
                            <Text style={{
                                fontSize: 11,
                                fontWeight: "100",
                                textAlign: "center",
                            }}>
                                Mobile Recharge
                            </Text>
                        </View>
                        {/* 2nd */}
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 53,
                        }}>
                            <SatelliteDish color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                            <Text style={{
                                fontSize: 11,
                                fontWeight: "100",
                                textAlign: "center",
                            }}>
                                DTH
                            </Text>
                        </View>
                        {/* 3rd */}
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 53,
                        }}>
                            <CreditCard color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                            <Text style={{
                                fontSize: 11,
                                fontWeight: "100",
                                textAlign: "center",
                            }}>
                                Credit Card Payment
                            </Text>
                        </View>
                        {/* 4th */}
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            width: 53,
                        }}>
                            <Construction color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                            <Text style={{
                                fontSize: 11,
                                fontWeight: "100",
                                textAlign: "center",
                            }}>
                                FASTag Recharge
                            </Text>
                        </View>
                    </View>
                </View>
                {/* utilites container */}
                <View style={{
                    width: 330,
                    height: 200,
                    elevation: 2,
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            marginLeft: 6,
                        }}>Utilites</Text>
                    </View>
                    {/* container items*/}

                    <View style={styles.parentContainer} >
                        <View style={styles.itemContainer}>
                            <View style={
                                styles.items
                            } >
                                <Lightbulb color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Electricty
                                </Text>
                            </View>
                            {/* 2nd */}
                            <View style={
                                styles.items
                            }>
                                <Cylinder color={"#0466C8"} size={30} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Gas Cylinder
                                </Text>
                            </View>
                            {/* 3rd */}
                            <View style={
                                styles.items
                            }>
                                <GlassWater color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Water
                                </Text>
                            </View>
                            {/* 4th */}
                            <View style={
                                styles.items
                            }>
                                <Shell color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Piped Gas
                                </Text>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={
                                styles.items
                            } >
                                <Smartphone color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Postpaid
                                </Text>
                            </View>
                            {/* 2nd */}
                            <View style={
                                styles.items
                            } >
                                <Router color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Broadband
                                </Text>
                            </View>
                            {/* 3rd phone */}
                            <View style={
                                styles.items
                            } >
                                <Phone color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Landline
                                </Text>
                            </View>
                            {/* 4th */}
                            <View style={
                                styles.items
                            } >
                                <GraduationCap color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Education Fees
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Finance container */}
                <View style={{
                    width: 330,
                    height: 200,
                    elevation: 2,
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            marginLeft: 6,
                        }}>Financial Services And Taxes</Text>
                    </View>
                    {/* container items*/}

                    <View style={styles.parentContainer} >
                        <View style={styles.itemContainer}>
                            <View style={
                                styles.items
                            } >
                                <ShieldCheck color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Insurance
                                </Text>
                            </View>
                            {/* 2nd */}
                            <View style={
                                styles.items
                            }>
                                <CircleDollarSign color={"#0466C8"} size={30} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Loan Payment
                                </Text>
                            </View>
                            {/* 3rd */}
                            <View style={
                                styles.items
                            }>
                                <Percent color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Municipal Tax
                                </Text>
                            </View>

                        </View>
                        <Text>&nbsp;</Text>
                    </View>
                </View>
                {/* more services */}
                <View style={{
                    width: 330,
                    height: 200,
                    elevation: 2,
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            marginLeft: 6,
                        }}>More Services</Text>
                    </View>
                    {/* container items*/}

                    <View style={styles.parentContainer} >
                        <View style={styles.itemContainer}>
                            <View style={
                                styles.items
                            } >
                                {/* <Lightbulb color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} /> */}
                                <Image
                                    source={
                                        Platform.OS === 'ios'
                                            ? require('@/assets/images/image 16.png')
                                            : require('@/assets/images/image 16.png')
                                    }
                                    style={{
                                        width: 22,
                                        height: 24,
                                        marginBottom: 10,
                                    }}
                                />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Google Play
                                </Text>
                            </View>
                            {/* 2nd */}
                            <View style={
                                styles.items
                            }>
                                <FileVideo color={"#0466C8"} size={30} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Subscription Fees
                                </Text>
                            </View>
                            {/* 3rd */}
                            <View style={
                                styles.items
                            }>
                                <Home color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Housing & Society
                                </Text>
                            </View>
                            {/* 4th */}
                            <View style={
                                styles.items
                            }>
                                <Shell color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={2} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Piped Gas
                                </Text>
                            </View>
                        </View>
                        <View style={styles.itemContainer}>
                            <View style={
                                styles.items
                            } >
                                <UsersRound color={"#0466C8"} size={38} absoluteStrokeWidth strokeWidth={1.8} />
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: "100",
                                    textAlign: "center",
                                }}>
                                    Clubs & Associations
                                </Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default home

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height: "auto",
        justifyContent: "space-evenly",
    },
    itemContainer: {
        marginTop: 10,
        flexDirection: "row",
        height: "auto",
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: "space-between",

    },
    items: {
        justifyContent: "center",
        alignItems: "center",
        width: 53,
    }
})
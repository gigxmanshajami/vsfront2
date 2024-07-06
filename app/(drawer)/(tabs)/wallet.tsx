import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NotebookText, Wallet } from 'lucide-react-native';

type Props = {}

const wallet = (props: Props) => {
    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
                padding: 20,
                alignContent: "center",
                gap: 20,
            }}>
                <View style={{
                    // justifyContent: "space-evenly",
                    alignItems: "center",
                    justifyContent: "center",
                    alignContent: "center",
                    width: "100%",
                    height: 140,
                    elevation: 2,
                    backgroundColor: "#fff",
                    // padding:20,
                    gap: 10,
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                    <Image
                        source={
                            require('@/assets/images/Group.png')
                        }
                        style={{
                            width: 27,
                            height: 30,
                        }} />
                    <Text>
                        Current Balance
                    </Text>
                    <Text style={{
                        marginBottom: 20,
                        fontSize: 24,
                        fontWeight: "medium",
                        color: "red",
                    }}>
                        $0
                    </Text>
                </View>
                <View style={{
                    width: "100%",
                    elevation: 2,
                    backgroundColor: "#fff",
                    padding: 20,
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "medium",
                            fontSize: 16,
                        }}>Enter Amount</Text>
                    </View>
                    <View>
                        <TextInput placeholder='$0' keyboardType='number-pad' style={{
                            borderBottomColor: "#000000",
                            borderBottomWidth: 0.9,
                            fontSize: 20,
                            marginTop: 20,
                        }} />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: "regular",
                            color: "#000000",
                        }}>
                            Min ₹10 & Max ₹5,000
                        </Text>
                    </View>
                    <View >
                        <Text style={{
                            marginTop: 20,
                            marginBottom: 10,
                        }}>Recommended</Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                            <View style={{
                                borderWidth: 0.9,
                                borderColor: "#0466C8",
                                width: "auto",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 8,
                                padding: 10,
                            }}>
                                <Text style={{
                                    color: "#0466C8",
                                    fontWeight: "regular",
                                    fontSize: 16,
                                }}>₹200</Text>
                            </View>
                            <View style={{
                                borderWidth: 0.9,
                                borderColor: "#0466C8",
                                width: "auto",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 8,
                                padding: 10,
                            }}>
                                <Text style={{
                                    color: "#0466C8",
                                    fontWeight: "regular",
                                    fontSize: 16,
                                }}>₹500</Text>
                            </View>
                            <View style={{
                                borderWidth: 0.9,
                                borderColor: "#0466C8",
                                width: "auto",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 8,
                                padding: 10,
                            }}>
                                <Text style={{
                                    color: "#0466C8",
                                    fontWeight: "regular",
                                    fontSize: 16,
                                }}>₹1000</Text>
                            </View>
                            <View style={{
                                borderWidth: 0.9,
                                borderColor: "#0466C8",
                                width: "auto",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 8,
                                padding: 10,
                            }}>
                                <Text style={{
                                    color: "#0466C8",
                                    fontWeight: "regular",
                                    fontSize: 16,
                                }}>₹2000</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{
                    // justifyContent: "space-evenly",
                    width: "100%",
                    elevation: 2,
                    backgroundColor: "#fff",
                    // padding:20,
                    gap: 10,
                    borderRadius: 10,
                    shadowColor: "#00000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                }}>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            margin: 12,
                            fontSize: 16,
                        }}>Recents</Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                        }}>
                            <NotebookText color={"#0466C8"} size={24} />
                            <Text style={{
                                fontWeight: "bold",
                                margin: 12,
                                color: "#0466C8",
                                fontSize: 16,
                            }}>
                                All Transaction
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: "#eee",
                            padding: 8,
                        }}>
                            <Text style={{
                                fontSize: 14,
                            }} >May 2024</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            padding: 10,
                            justifyContent: "space-between",
                            gap: 10,
                            borderBottomWidth: 0.9,
                            margin: 10,
                        }}>
                            <View style={{
                                flexDirection: "row",
                                gap: 20,
                            }}>
                                <Wallet size={24} color={"#000"} />

                                <View>
                                    <Text style={{
                                        fontSize: 15,
                                    }}>
                                        Wallet Top Up
                                    </Text>
                                    <View>
                                        <Text style={{
                                            color: "#eee",
                                        }}>
                                            14 May 2024 at 10:20
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "green",

                                }}>+$450</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            padding: 10,
                            justifyContent: "space-between",

                            gap: 10,
                            borderBottomWidth: 0.9,
                            margin: 10,
                        }}>
                            <View style={{
                                flexDirection: "row",
                                gap: 20,
                            }}>
                                <Wallet size={24} color={"#000"} />

                                <View >
                                    <Text style={{
                                        fontSize: 15,
                                    }}>
                                        Airtel Digital Tv
                                    </Text>
                                    <View>
                                        <Text style={{
                                            color: "#eee",
                                        }}>
                                            14 May 2024 at 10:20
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "green",

                                }}>-$150</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: "#eee",
                            padding: 8,
                        }}>
                            <Text style={{
                                fontSize: 14,
                            }} >April 2024</Text>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            padding: 10,
                            justifyContent: "space-between",
                            gap: 10,
                            borderBottomWidth: 0.9,
                            margin: 10,
                        }}>
                            <View style={{
                                flexDirection: "row",
                                gap: 20,
                            }}>
                                <Wallet size={24} color={"#000"} />

                                <View>
                                    <Text style={{
                                        fontSize: 15,
                                    }}>
                                        Wallet Top Up
                                    </Text>
                                    <View>
                                        <Text style={{
                                            color: "#eee",
                                        }}>
                                            14 May 2024 at 10:20
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "green",

                                }}>+$450</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            padding: 10,
                            justifyContent: "space-between",

                            gap: 10,
                            borderBottomWidth: 0.9,
                            margin: 10,
                        }}>
                            <View style={{
                                flexDirection: "row",
                                gap: 20,
                            }}>
                                <Wallet size={24} color={"#000"} />

                                <View >
                                    <Text style={{
                                        fontSize: 15,
                                    }}>
                                        Airtel Digital Tv
                                    </Text>
                                    <View>
                                        <Text style={{
                                            color: "#eee",
                                        }}>
                                            14 May 2024 at 10:20
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "green",

                                }}>-$150</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{
                    width: "100%",
                    backgroundColor: "#0466C8",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 18,
                        alignSelf: "center",
                        textTransform: "uppercase",

                    }}>Add Amount</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

export default wallet

const styles = StyleSheet.create({})
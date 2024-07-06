import { Image, SafeAreaView, StyleSheet, Platform, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { ChevronRight, Info, Undo2, NotepadTextDashed, LogOut, NotebookText, Languages, BellRing, Tag, Eclipse, MessageSquarePlus } from 'lucide-react-native';
import { DrawerItemList } from '@react-navigation/drawer';
type Props = {}

const _layout = (props: Props) => {
    return (
        <GestureHandlerRootView style={{ flex: 1, }}>
            <Drawer
                screenOptions={{
                    drawerStyle: {
                        // display: "flex",
                        backgroundColor: "#eaeaea",
                        // backgroundColor:"red",
                    },
                    drawerPosition: "left",
                }}
                drawerContent={(props) => {
                    return (
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                padding: 10,
                                paddingTop: 50,
                            }}>
                            <View style={
                                styles.containerMain
                            }>
                                {/* here */}
                                <View>
                                    <Image
                                        source={
                                            Platform.OS === 'ios'
                                                ? require('@/assets/images/image 4.png')
                                                : require('@/assets/images/image 4.png')
                                        }
                                        style={{
                                            width: 54,
                                            height: 54,
                                            borderRadius: 50,
                                        }}
                                    />
                                </View>
                                <View>
                                    <View>
                                        <Text>
                                            Candice Zboncak
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                            706-203-9590
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <ChevronRight size={24} color="#000" />
                                </View>
                            </View>
                            <View style={styles.containerPr}>
                                <View>
                                    <Text style={styles.heading}>Settings & Preferences</Text>
                                </View>
                                <View>
                                    <View style={styles.flexCon}>
                                        <View>
                                            <Languages strokeWidth={2.5} size={28} color="black" />
                                        </View>
                                        <View>
                                            <Text style={styles.xltext}>
                                                Languages
                                            </Text>
                                            <Text style={styles.semiText}>Chosen Language: English</Text>
                                        </View>
                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <BellRing strokeWidth={2.5} size={28} color="black" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    Notification
                                                </Text>
                                                <Text style={styles.semiText}>Manage All Notification</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <Eclipse strokeWidth={2.5} size={28} color="black" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    Theme
                                                </Text>
                                                <Text style={styles.semiText}>Choose b/w light & dark mode</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* refer box */}
                            <View style={styles.containerPr}>
                                <View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <Undo2 strokeWidth={2.5} size={28} color="black" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    Refer
                                                </Text>
                                                {/* <Text style={styles.semiText}>Chosen Language: English</Text> */}
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <MessageSquarePlus strokeWidth={1.2} size={30} fill="#000" color="white" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    Rate & Review
                                                </Text>
                                                {/* <Text style={styles.semiText}>Manage All Notification</Text> */}
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <Tag strokeWidth={2.5} size={28} color="black" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    Cashback & offers
                                                </Text>
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* other box */}
                            <View style={styles.containerPr}>
                                <View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <NotebookText strokeWidth={2.5} size={28} color="black" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    Privacy Policy
                                                </Text>
                                                {/* <Text style={styles.semiText}>Chosen Language: English</Text> */}
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <NotepadTextDashed sstrokeWidth={2.5} size={24} color="black" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    Terms & Conditions
                                                </Text>
                                                {/* <Text style={styles.semiText}>Manage All Notification</Text> */}
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                    <View style={styles.flexCon}>
                                        <View style={{
                                            alignItems: "center",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <Info strokeWidth={2.5} size={28} color="black" />
                                            <View>
                                                <Text style={styles.xltext}>
                                                    About Recharge App
                                                </Text>
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="black" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* log out */}
                            <View style={styles.containerPr}>
                                <View>
                                    <View style={
                                        {
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            paddingTop: 2,
                                            paddingBottom: 2,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }
                                    }>
                                        <View style={{
                                            alignItems: "center",
                                            color: "red",
                                            gap: 20,
                                            flexDirection: "row",
                                        }}>
                                            <LogOut strokeWidth={2.5} size={28} color="red" />
                                            <View>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontWeight: "regular",
                                                    color: "red",
                                                }}>
                                                    Log Out
                                                </Text>
                                                {/* <Text style={styles.semiText}>Chosen Language: English</Text> */}
                                            </View>
                                        </View>

                                        <View>
                                            <ChevronRight strokeWidth={2.5} size={24} color="red" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* <DrawerItemList  {...props} /> */}
                        </ScrollView>
                    )
                }}
            >

                <Drawer.Screen
                    name="(tabs)" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: 'User',
                        title: 'overview',
                        headerShown: false,
                    }}

                />
            </Drawer>
        </GestureHandlerRootView>
    )
}

export default _layout

const styles = StyleSheet.create({
    containerMain: {
        height: 80, padding: 10, width: "100%", backgroundColor: "#fff", elevation: 0.1, borderRadius: 8, flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10, alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 16,
    },
    containerPr: {
        backgroundColor: "#fff", elevation: 0.1, borderRadius: 8, marginBottom: 10,
        padding: 10,
        width: "100%",
        justifyContent: "space-between",
        gap: 20,
    },
    flexCon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,

        paddingBottom: 10,
        marginTop: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 0.9,
        marginBottom: 10,
    },
    xltext: {
        fontSize: 16,
        fontWeight: "regular",
    },
    semiText: {
        fontSize: 12,
        overflow: "hidden",
        width: "100%",
        textTransform: "capitalize",
        fontWeight: "regular",
    }
})
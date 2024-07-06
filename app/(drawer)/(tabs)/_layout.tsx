import { Tabs, useSegments } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View, Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { CloudOff, Bell } from 'lucide-react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
export default function TabLayout() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const [networkstate, setNetworkstate] = useState(true);
  console.log(segments);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if (state.isConnected === false) {
        setNetworkstate(false);
      }
    });
    // To unsubscribe to these update, just use:
    unsubscribe();
  }, [])
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    // setIsOpen(true);
    // navigation.dispatch(isOpen ? DrawerActions.closeDrawer() : DrawerActions.openDrawer());
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const hide = segments.includes("signup");
  return (
    <>
      {
        networkstate === false && (
          <View style={{

            backgroundColor: "white",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            flex: 1,
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            zIndex: 20,
          }}>
            <CloudOff size={40} color="black" />
            <Text style={{
              fontSize: 20,
              margin: 10,
              fontWeight: "regular",
            }}>You’re Offline!</Text>
            <Text style={{
              fontSize: 16,
              fontWeight: "regular",
            }}>Check your internet connectivity</Text>
          </View>
        )
      }
      <View style={{
        width: '100%',
        marginTop: 30,
        backgroundColor: "#0466C8",
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View>
          <TouchableOpacity onPress={toggleDrawer}>
            <Image
              source={
                Platform.OS === 'ios'
                  ? require('@/assets/images/image 4.png')
                  : require('@/assets/images/image 4.png')
              }
              style={{
                width: 28,
                height: 28,
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Bell color="#fff" size={24} fill={"#fff"} />
        </View>
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#0466C8',
          headerShown: false,

          tabBarStyle: {
            display: hide ? "none" : "flex",
            height: 60,
          },
        }}

      >
        <Tabs.Screen
          name="home"
          options={{
            headerTitle: "Home",
            tabBarLabel: "Home",
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            headerTitle: "Wallet",
            tabBarLabel: "wallet",
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="transaction"
          options={{
            headerTitle: "Transaction",
            tabBarLabel: "Transaction",
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'swap-horizontal' : 'swap-horizontal'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="support"
          options={{
            headerTitle: "Support",
            tabBarLabel: "Support",
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name='customerservice' color={color} size={28} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

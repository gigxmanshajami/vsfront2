import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PhoneOutgoing, ChevronRight, MessageSquareMore, Receipt, Ticket } from 'lucide-react-native';

type Props = {}

const support = (props: Props) => {
  return (
    <View style={{
      padding: 20,
    }}>
      <View style={{
        flexDirection: "row",
        padding: 20,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-between",
        elevation: 2,
      }}>
        <View style={
          {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }
        } >
          <PhoneOutgoing size={24} color="black" />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: "medium",
              color: "black",

            }}>Call Support</Text>
          </View>
        </View>
        <View>
          <ChevronRight size={24} color="black" />
        </View>
      </View>
      <View style={{
        flexDirection: "row",
        padding: 20,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-between",
        elevation: 2,
      }}>
        <View style={
          {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }
        } >
          <MessageSquareMore size={24} color="black" />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: "medium",
              color: "black",

            }}>Chat Support</Text>
          </View>
        </View>
        <View>
          <ChevronRight size={24} color="black" />
        </View>
      </View>
      <View style={{
        flexDirection: "row",
        padding: 20,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-between",
        elevation: 2,
      }}>
        <View style={
          {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }
        } >
          <Receipt size={24} color="black" />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: "medium",
              color: "black",

            }}>Recharge & Bill Payments</Text>
          </View>
        </View>
        <View>
          <ChevronRight size={24} color="black" />
        </View>
      </View>
      <View style={{
        flexDirection: "row",
        padding: 20,
        backgroundColor: "white",
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-between",
        elevation: 2,
      }}>
        <View style={
          {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }
        } >
          <Ticket size={24} color="black" />
          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: "medium",
              color: "black",

            }}>View Tickets</Text>
          </View>
        </View>
        <View>
          <ChevronRight size={24} color="black" />
        </View>
      </View>
      <Image
        source={require('../../../assets/images/help.png')}
        style={{
          alignSelf: "center",
          marginTop:80,
          width:200,
          height:200,
        }}
      />
    </View>
  )
}

export default support

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NotebookText, Wallet } from 'lucide-react-native';

type Props = {}

const transaction = (props: Props) => {
  return (
    <View style={{
      padding:10,
    }}>
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
    </View>
  )
}

export default transaction

const styles = StyleSheet.create({})
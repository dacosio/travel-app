import { View, Text, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES, TEXT } from "../constants/theme";
import NetworkImage from "../components/Reusable/NetworkImage";
import AppBar from "../components/Reusable/AppBar";
import styles from "./topTab.style";
import HeightSpacer from "../components/Reusable/HeightSpacer";
import ReusableText from "../components/Reusable/ReusableText";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png"
            }
            width={"100%"}
            height={300}
            borderRadius={0}
          />
          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            bgColorOne={COLORS.white}
            onPressOne={() => {}}
            onPress={() => navigation.goBack()}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Daisy",
              }}
              style={styles.image}
            />
            <HeightSpacer height={5} />

            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"Pikachu"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>
            <HeightSpacer height={5} />
            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"pikachu@gmail.com"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

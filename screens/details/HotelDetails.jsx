import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import NetworkImage from "../../components/Reusable/NetworkImage";
import styles from "./HotelDetails.styles";
import ReusableText from "../../components/Reusable/ReusableText";
import HeightSpacer from "../../components/Reusable/HeightSpacer";
import reusable from "../../components/Reusable/reusable.style";
import { Rating } from "react-native-stock-star-rating";
import DescriptionText from "../../components/Reusable/DescriptionText";
import HotelMap from "../../components/Hotel/HotelMap";
import { Feather } from "@expo/vector-icons";
import ReviewsList from "../../components/Hotel/ReviewsList";
import ReusableBtn from "../../components/Buttons/ReusableBtn";

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    rating: 4.8,
    review: "2312 Reviews",
    reviews: [
      {
        _id: "1a2b3c4d-5e6f-4g8h-i9j0-klmnopqrstuv",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        user: {
          _id: "a1b2c3d4-e5f6-4g8h-i9j0-klmnopqrstuv",
          username: "john_doe",
          profile:
            "https://gravatar.com/avatar/36ed7d1a0d926ef50217bddc6ef8b96b?s=400&d=robohash&r=x",
        },
        updatedAt: "2023-11-19",
      },
      {
        _id: "5g6h7i8j-9k0l-4mno-pqrs-tuvwxyza987b",
        review:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        rating: 5,
        user: {
          _id: "b1c2d3e4-f5g6-4hij-klmn-opqrstuvwxyz",
          username: "jane_smith",
          profile:
            "https://gravatar.com/avatar/52065aec20d27d1a82191abc6442d72d?s=400&d=robohash&r=x",
        },
        updatedAt: "2023-11-20",
      },
    ],
    location: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
  };

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          bgColor={COLORS.white}
          bgColorOne={COLORS.white}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPressOne={() => {}}
        />
      </View>
      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            borderRadius={25}
          />
          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                family={"medium"}
                size={SIZES.large}
                color={COLORS.black}
              />
              <HeightSpacer height={10} />
              <ReusableText
                text={hotel.location}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <HeightSpacer height={15} />
              <View style={reusable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#FD9942"}
                />

                <ReusableText
                  text={`(${hotel.review})`}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <DescriptionText text={hotel.description} />
          <HeightSpacer height={10} />
          <ReusableText
            text={"Location"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={15} />
          <ReusableText
            text={hotel.location}
            family={"medium"}
            size={SIZES.small + 2}
            color={COLORS.gray}
          />
          <HotelMap coordinates={coordinates} />
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Reviews"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <TouchableOpacity>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10} />

          <ReviewsList reviews={hotel.reviews} />
        </View>
        <View style={[reusable.rowWithSpace("space-between"), styles.bottom]}>
          <View>
            <ReusableText
              text={`\$ ${hotel.price}`}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <HeightSpacer height={5} />
            <ReusableText
              text={"Jan 01 - Dec 25"}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.green}
            />
          </View>
          <ReusableBtn
            onPress={() => navigation.navigate("SelectRoom")}
            btnText={"Select Room"}
            width={(SIZES.width - 50) / 2.2}
            bgColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetails;

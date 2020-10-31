import React from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";

const locationData = [
  {
    id: 1,
    title: "Shipsterns Bluff",
    distance: "60km",
    weather: "Mostly Sunny",
    temp: "22",
    swell: "41m @ 13.7s S",
  },
  {
    id: 2,
    title: "Clifton Beach",
    distance: "40km",
    weather: "Sunny",
    temp: "26",
    swell: "2.1m @ 13.7s WSW",
  },
  {
    id: 3,
    title: "South Arm",
    distance: "100km",
    weather: "CLoudy",
    temp: "13",
    swell: "3.1m @ 13.7s SE",
  },
  {
    id: 4,
    title: "Oatlands",
    distance: "200km",
    weather: "Storming",
    temp: "-4",
    swell: "1.1m @ 13.7s NE",
  },
  {
    id: 5,
    title: "South Arm",
    distance: "100km",
    weather: "CLoudy",
    temp: "13",
    swell: "3.1m @ 13.7s SE",
  },
];

function LocationsScreen(props) {
  return (
    <FlatList
      data={locationData}
      keyExtractor={(data) => locationData.id}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          distance={item.distance}
          weather={item.weather}
          temp={item.temp}
          swell={item.swell}
        />
      )}
    />
  );
}

export default LocationsScreen;

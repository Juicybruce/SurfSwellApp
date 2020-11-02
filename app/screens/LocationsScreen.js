import React, { useState } from "react";
import Axios from "axios";
import { Button, FlatList, View, StyleSheet, Text } from "react-native";

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
    weather: "",
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
  const [weather, setWeather] = useState(locationData);

  async function WeatherFetch() {
    const apiKey = "d505558ba231a6042d34eea4ea623ad5";

    const response = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=Hobart&appid=${apiKey}&units=metric`
    );

    // let foundIndex = weather.findIndex(
    //   (weather) => weather.title == "South Arm"
    // );
    // let weatherData = [...weather];
    // weatherData[foundIndex].weather = response.data.weather[0].description;

    const whateverIWant = {
      id: 5,
      title: "Test Arm",
      distance: "56",
      weather: "Asteroids",
      temp: "45degrees",
      swell: "3.1m @ 13.7s SE",
    };

    setWeather(
      weather.map((wea, index) => {
        wea.title === "South Arm" ? whateverIWant : wea;
      })
    );
  }

  return (
    <View marginTop={100}>
      <Button
        style={styles.Button}
        title={"Get Weather"}
        onPress={WeatherFetch}
      ></Button>
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
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 100,
    backgroundColor: "red",
  },
});

export default LocationsScreen;

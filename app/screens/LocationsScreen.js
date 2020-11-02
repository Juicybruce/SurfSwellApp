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
    wind: "41m @ 13.7s S",
  },
  {
    id: 2,
    title: "Clifton Beach",
    distance: "40km",
    weather: "Sunny",
    temp: "26",
    wind: "2.1m @ 13.7s WSW",
  },
  {
    id: 3,
    title: "South Arm",
    distance: "100km",
    weather: "",
    temp: "13",
    wind: "3.1m @ 13.7s SE",
  },
  {
    id: 4,
    title: "Oatlands",
    distance: "200km",
    weather: "Storming",
    temp: "-4",
    wind: "1.1m @ 13.7s NE",
  },
  {
    id: 5,
    title: "South Arm",
    distance: "100km",
    weather: "CLoudy",
    temp: "13",
    wind: "3.1m @ 13.7s SE",
  },
];

function LocationsScreen(props) {
  const [weather, setWeather] = useState(locationData);

  async function WeatherFetch() {
    const apiKey = "d505558ba231a6042d34eea4ea623ad5";

    const response = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=Hobart&appid=${apiKey}&units=metric`
    );

    let foundIndex = weather.findIndex(
      (weather) => weather.title == "South Arm"
    );
    let weatherData = [...weather];
    weatherData[foundIndex].weather = response.data.weather[0].description;
    weatherData[foundIndex].temp = response.data.main.temp;
    weatherData[
      foundIndex
    ].wind = `${response.data.wind.speed}m/s @ ${response.data.wind.deg}`;

    setWeather(weatherData);
  }

  return (
    <View marginTop={100}>
      <Button
        style={styles.Button}
        title={"Get Weather"}
        onPress={WeatherFetch}
      ></Button>
      <FlatList
        data={weather}
        keyExtractor={(data) => weather.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            distance={item.distance}
            weather={item.weather}
            temp={item.temp}
            wind={item.wind}
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

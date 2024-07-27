import { FlatList, View, ScrollView } from "react-native";
import React from "react";
import RegionCard from "../regionCard/Index";

const Index = () => {
  const DATA = [
    { id: "North", title: "North" },
    { id: "South", title: "South" },
    { id: "East", title: "East" },
    { id: "West", title: "West" },
    { id: "South West", title: "South West" },
    { id: "South East", title: "South East" },
    { id: "North West", title: "North West" },
    { id: "North East", title: "North East" },
    { id: "Central", title: "Central" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <RegionCard region={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Index;

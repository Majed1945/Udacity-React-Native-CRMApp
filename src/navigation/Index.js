import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome/Index";
import ShowCustomer from "../screens/ShowCustomer/Index";
import RegionsList from "../screens/RegionsList/Index";
import NewCustomer from "../screens/NewCustomer/Index";
import EditCustomer from "../screens/EditCustomer/Index";
import CustomersByRegion from "../screens/CustomersByRegion/Index";
import CustomHeader from "./customHeader/Index";
const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <NavigationContainer initialRouteName="Welcome">
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F6F5F5",
          },
          headerTintColor: "#2D0C57",
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Show Customer"
          component={ShowCustomer}
          options={{
            header: () => (
              <CustomHeader
                title="Customer Profile"
                description="Details of the selected customer's profile (View Only)"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Regions List"
          component={RegionsList}
          options={{
            header: () => (
              <CustomHeader
                title="Regions List"
                description="Please select the customer region from the compass."
              />
            ),
          }}
        />
        <Stack.Screen
          name="New Customer"
          component={NewCustomer}
          options={{
            header: () => (
              <CustomHeader
                title="New Customer"
                description="Fill in the details below to add a new customer."
              />
            ),
          }}
        />
        <Stack.Screen
          name="Edit Customer"
          component={EditCustomer}
          options={{
            header: () => (
              <CustomHeader
                title="Edit a Customer"
                description="Edit the details of the selected customer."
              />
            ),
          }}
        />
        <Stack.Screen
          name="Customers By Region"
          component={CustomersByRegion}
          options={{
            header: ({ route }) => {
              const region = route.params?.region;

              return (
                <CustomHeader
                  title={
                    region ? `Customers in ${region}` : "Customers By Region"
                  }
                  description={`Below is the list of all customers in ${region} region`}
                />
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

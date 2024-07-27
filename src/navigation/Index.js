import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome/Index";
import ShowCustomer from "../screens/ShowCustomer/Index";
import RegionsList from "../screens/RegionsList/Index";
import NewCustomer from "../screens/NewCustomer/Index";
import EditCustomer from "../screens/EditCustomer/Index";
import CustomersByRegion from "../screens/CustomersByRegion/Index";

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer initialRouteNam="Welcome">
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
        <Stack.Screen name="Show Customer" component={ShowCustomer} />
        <Stack.Screen name="Regions List" component={RegionsList} />
        <Stack.Screen name="New Customer" component={NewCustomer} />
        <Stack.Screen name="Edit Customer" component={EditCustomer} />
        <Stack.Screen
          name="Customers By Region"
          component={CustomersByRegion}
          options={({ route }) => {
            const region = route.params?.region;
            return {
              title: region ? `Customers in ${region}` : "Customers By Region",
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

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
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ShowCustomer" component={ShowCustomer} />
        <Stack.Screen name="RegionsList" component={RegionsList} />
        <Stack.Screen name="NewCustomer" component={NewCustomer} />
        <Stack.Screen name="EditCustomer" component={EditCustomer} />
        <Stack.Screen name="CustomersByRegion" component={CustomersByRegion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

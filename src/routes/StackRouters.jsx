import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddAcount } from "../screens/AddAcount";
import { TabRouters } from "./BottonTabs";
import { TelaLogin } from "../screens/Login/Index";

const Stack = createNativeStackNavigator();

export const StackRouters = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddAcount"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddAcount" component={AddAcount} />
      <Stack.Screen name="StackLogin" component={TelaLogin} />
      <Stack.Screen name="TabsHome" component={TabRouters} />
    </Stack.Navigator>
  );
};

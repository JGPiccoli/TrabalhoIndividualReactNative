import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { TelaHome } from "../screens/Home";
import { styles } from "./style";

const Tab = createBottomTabNavigator();

export const TabRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: "",
        tabBarStyle: {
          backgroundColor: "#001919",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="TabsHome"
        component={TelaHome}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name="chatbox-ellipses" size={25} color="white" />
              </View>
              <View>
                <Text style={styles.iconLabel}>Conversas</Text>
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider } from "native-base";
import OrderScreen from "./Screens/OrderScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./Navigations/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <NotVerifyScreen /> */}
      {/* <HomeScreen /> */}
      {/* <SingleProductScreen /> */}
      {/* <HomeProducts /> */}
      {/* <CartScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <ShippingScreen /> */}
      {/* <PaymentScreen /> */}
      {/* <PlaceOrderScreen /> */}
      {/* <OrderScreen /> */}

      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

import "./gesture-handler";
import Navigation from "./src/navigation/Index";
import { useEffect, useRef } from "react";
import initializeStore from "./src/store/index";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import { toastConfig } from "./toastConfig";
import * as Notifications from "expo-notifications";
import { useCustomFonts } from "./src/features/customer/hooks";
import { registerForPushNotificationsAsync } from "./src/features/customer/services";

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

// Initialize the Redux store
const store = initializeStore();

// Set up the notification handler to define how notifications should be handled when received
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App = () => {
  // Use the custom hook to load fonts
  const [loaded, error] = useCustomFonts();
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Hide the splash screen once fonts are loaded or if there's an error
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    // Register for push notifications
    registerForPushNotificationsAsync();

    // Set up listeners for notifications
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        // Handle notification received
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((notification) => {
        // Handle notification response
      });

    // Schedule a notification to be sent 10 seconds after the app starts
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Reminder",
        body: "Please do not forget to contact customers",
      },
      trigger: { seconds: 10 },
    });

    // Clean up notification listeners when the component unmounts
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Return null if fonts are not loaded and there's no error
  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigation />
      <Toast
        config={toastConfig}
        topOffset={40}
        position="top"
        visibilityTime={1000}
      />
    </Provider>
  );
};

export default App;

import "./gesture-handler";
import Navigation from "./src/navigation/Index";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import initializeStore from "./src/store/index";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import Toast from "react-native-toast-message";
import { toastConfig } from "./toastConfig";

SplashScreen.preventAutoHideAsync();

const store = initializeStore();

const App = () => {
  const [loaded, error] = useFonts({
    "PTSerif-Bold": require("./assets/fonts/PTSerif-Bold.ttf"),
    "PTSerif-BoldItalic": require("./assets/fonts/PTSerif-BoldItalic.ttf"),
    "PTSerif-Italic": require("./assets/fonts/PTSerif-Italic.ttf"),
    "PTSerif-Regular": require("./assets/fonts/PTSerif-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

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

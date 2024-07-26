import "./gesture-handler";
import Index from "./src/navigation/Index";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    "PTSerif-Bold": require("./assets/fonts/PTSerif-Bold.ttf"),
    "PTSerif-BoldItalic": require("./assets/fonts/PTSerif-BoldItalic.ttf"),
    "PTSerif-Italic": require("./assets/fonts/PTSerif-Italic.ttf"),
    "PTSerif-Regular": require("./assets/fonts/PTSerif-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Index />;
};

export default App;

import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import newCustomerStyles from "./styles";
import CustomizedTextInput from "../../components/TextInput/Index";
import CustomizedRadioGroup from "../../components/RadioButtonGroup/Index";
import CustomizedSelector from "../../components/Selector/Index";
import CustomButton from "../../components/Button/Index";
import { useNavigation } from "@react-navigation/native";

const NewCustomer = () => {
  const styles = newCustomerStyles();
  const { navigate } = useNavigation();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    status: "Active",
    region: "North",
  });

  const radioButtons = useMemo(
    () => [
      {
        id: "Active",
        label: "Active",
        value: "Active",
      },
      {
        id: "InActive",
        label: "InActive",
        value: "InActive",
      },
    ],
    []
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <CustomizedTextInput
        value={data.firstName}
        onChangeText={(e) => setData((prev) => ({ ...prev, firstName: e }))}
        placeholder={"Enter your first name"}
        title={"First Name"}
      />
      <CustomizedTextInput
        value={data.lastName}
        onChangeText={(e) => setData((prev) => ({ ...prev, lastName: e }))}
        placeholder={"Enter your last name"}
        title={"Last Name"}
      />
      <CustomizedRadioGroup
        radioButtons={radioButtons}
        selectedId={data.status}
        setSelectedId={(e) => setData((prev) => ({ ...prev, status: e }))}
        title={"Status"}
      />
      <CustomizedSelector
        title={"Region"}
        selectedValue={data.region}
        onChange={(e) => setData((prev) => ({ ...prev, region: e }))}
      />
      <View style={styles.buttonsBox}>
        <CustomButton
          text={"Create"}
          isFilled={true}
          onPress={() => navigate("Regions List")}
        />
        <CustomButton
          text={"Cancel"}
          isFilled={false}
          onPress={() => navigate("Regions List")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewCustomer;

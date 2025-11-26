import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useContext } from "react";
import Input from "../components/Input";
import MyButton from "../components/MyButton";
import { MyContext } from "../context/MyContext";
import { useFocusEffect } from "@react-navigation/native";
const LoginScreen = () => {
  const state = useContext(MyContext);
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [click, setClick] = useState(false);
  const LogiNav = async () => {
    await setClick(true);
    await state.loginUser(phone, pass);
    await setClick(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      let mount = true;
      setPhone("");
      setPass("");
      setClick(false);
      return () => {
        mount = false;
      };
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/useicon.png")}
        />
        <Text style={styles.stitle}>Өмнөговь аймгийн</Text>
        <Text style={styles.stitle}>Цогтцэций сумын ЗДТГ</Text>
        <Text style={styles.title}>НЭГДСЭН СУДАЛГАА</Text>
      </View>

      <Input
        icon="person-circle"
        placeholder="Нэвтрэх нэр"
        invalue={phone}
        onChangeText={setPhone}
      />
      <Input
        icon="lock-closed"
        placeholder="Нууц үг"
        invalue={pass}
        sec={true}
        onChangeText={setPass}
      />
      <Text style={{ color: "red", marginBottom: 15 }}>{state.msg}</Text>
      <MyButton
        title={click ? "Түр хүлээнэ үү" : "Нэвтрэх"}
        onPress={() => LogiNav()}
        background="#E63108"
        disabled={click}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
    marginVertical: 30,
  },
  head: {
    alignItems: "center",
    marginTop: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E63108",
    marginVertical: 10
  },
  stitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#E63108",
    textTransform: "uppercase",
  },
});

import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState, useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MyContext } from "../context/MyContext";
import { checkConnected } from "../checknet";
const HomeScreen = ({ navigation }) => {
  const state = useContext(MyContext);
  const [connectStatus, setConnectStatus] = useState(false);
  checkConnected().then((res) => {
    setConnectStatus(res);
  });
  const logOut = () => {
    state.setTheUser(null);
    navigation.replace('LoginScreen');
  };
  return connectStatus ? (
    <View style={styles.container}>
      <View style={styles.one}>
        <View style={styles.head}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/useicon.png")}
          />
          <Text style={styles.stitle}>Өвөрхангай аймгийн</Text>
          <Text style={styles.stitle}>Боловсролын газар</Text>
          <Text style={styles.title}>БАГШ АЙЛЧЛАЛ</Text>
        </View>
        <View style={styles.row}>
          <Text>Хичээлийн жил: </Text>
          <Text style={styles.item}>2022-2023</Text>
        </View>
        <View style={styles.row}>
          <Text>Сургууль: </Text>
          <Text style={styles.item}>{state.theUser?.school_name}</Text>
        </View>
        <View style={styles.row}>
          <Text>Нэр: </Text>
          <Text style={styles.item}>
            {state.theUser?.fname} {state.theUser?.lname}
          </Text>
        </View>
        <View style={styles.row}>
          <Text>Даасан анги: </Text>
          {state.theUser?.angiList?.length > 0 ? (
            state.theUser.angiList.map((el, index) => {
              return (
                <Text key={index} style={styles.item}>
                  {el[1]}
                  {el[2]},{" "}
                </Text>
              );
            })
          ) : (
            <Text style={styles.item}>Даасан анги байхгүй</Text>
          )}
        </View>
        <View style={styles.row}>
          <Text>Email: </Text>
          <Text style={styles.item}>{state.theUser.user_email}</Text>
        </View>
        <View style={styles.row}>
          <Text>Утас: </Text>
          <Text style={styles.item}>{state.theUser.user_phone}</Text>
        </View>
        <View>
          <Text style={{ textAlign: "center", marginTop: 15, fontSize: 12 }}>
            Веб апп-р орж бусад нэмэлт үйлдлүүдийг
            хийх боломжтой
          </Text>
        </View>
      </View>
      <View style={styles.two}>
        {state.theUser.angiList.length > 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("AddScreen");
            }}
          >
            <Ionicons
              name={"create-outline"}
              style={{ color: "#555", marginRight: 10 }}
              size={22}
            />
            <Text>Судалгаа бөглөх</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity
          style={[styles.button, { marginTop: 10, backgroundColor: "#fafaac" }]}
          onPress={() => logOut()}
        >
          <Ionicons
            name={"arrow-undo-outline"}
            style={{ color: "#555", marginRight: 10 }}
            size={22}
          />
          <Text>Системээс гарах</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18 }}>Интернэт холболтоо шалгана уу!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E63108",
    marginBottom: 15,
  },
  stitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#E63108",
    textTransform: "uppercase",
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  head: {
    alignItems: "center",
  },
  item: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
  },
  container: {
    flex: 1,
  },
  one: {
    flex: 3,
    paddingTop: 50,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  two: {
    flex: 1,
    backgroundColor: "#E63108",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

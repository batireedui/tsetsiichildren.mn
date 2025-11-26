import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { WebView } from "react-native-webview";
import { MyContext } from "../context/MyContext";
import { serverUrl } from "../Const";
import { checkConnected } from "../checknet";
const AddScreen = () => {
  const state = useContext(MyContext);
  const [connectStatus, setConnectStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  checkConnected().then((res) => {
    setConnectStatus(res);
  });
  console.log(
    `${serverUrl}/apiadd?school_id=${state.theUser.school_id}&user_id=${state.theUser.user_id}`
  );
  return connectStatus ? (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#fff" }}>
      {loading && (
        <View style={{ margnin: 30 }}>
          <ActivityIndicator size="large" />
          <Text style={{ textAlign: "center" }}>Түр хүлээнэ үү</Text>
        </View>
      )}
      <WebView
        source={{
          uri: `${serverUrl}/apiadd?school_id=${state.theUser.school_id}&user_id=${state.theUser.user_id}`,
        }}
        javaScriptEnabled={true}
        originWhitelist={["*"]}
        domStorageEnabled={true}
        mixedContentMode="always"
        renderError={(error) => console.log("error:", error)}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
    </View>
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18 }}>Интернэт холболтоо шалгана уу!</Text>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({});

import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { serverUrl } from "../Const";
import { useNavigation } from "@react-navigation/native";

export const MyContext = React.createContext();

const MyContextProvider = (props) => {
  const navigation = useNavigation();
  const [isAuth, setIsAuth] = useState(false);
  const [theUser, setTheUser] = useState([]);
  const [msg, setMsg] = useState("");

  const loginUser = async (phone, password) => {
    if (phone !== "" && password !== "") {
      axios
        .post(serverUrl + "apilogin", {
          email: phone,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data[0].user_id > 0) {
            setMsg("");
            setTheUser(res.data[0]);
            navigation.navigate("HomeScreen");
          } else {
            setMsg("Таны нэвтрэх нэр эсвэл нууц үг буруу байна");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setMsg("Нэвтрэх нууц үг, нэрээ оруулна уу");
    }
  };

  return (
    <MyContext.Provider value={{ loginUser, msg, theUser, setTheUser }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SetFishResult } from "../redux/fish";
import { AddApi } from "../utils/axios";
import { Button } from "react-native-paper";
import LoadingScreen from "./common/LoadingScreen";
import { useState } from "react";
import colors from "../colors";

export default function ImageScreen({ navigation }: { navigation: any }) {
  const reduxState = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(0);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `data:image/jpeg;base64,${reduxState.fish.fishImage}` }}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          color={colors.dark}
          style={{ marginVertical: 10, padding: 1 }}
          onPress={async () => {
            setIsLoading(1);
            try {
              let result = await AddApi.getAnalysis(reduxState.fish.fishImage);
              //console.log(result);
              dispatch(SetFishResult(result));
              setIsLoading(0);
              navigation.navigate("ShowResultScreen");
            } catch (error) {
              setIsLoading(0);
              console.log("error");
              console.log(error);
            }
          }}
        >
          <Text style={styles.btnText}>분석하기</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  buttonContainer: {
    bottom: 20,
    alignSelf: "center",
    position: "absolute",
    zIndex: 10,
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
});

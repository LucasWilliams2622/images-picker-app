import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImagePickerProps } from "./type";
import { openPicker } from "@baronha/react-native-multiple-image-picker";
// ...
const ImagePicker: React.FC<ImagePickerProps> = React.memo(
  ({ containerStyle }) => {
    const openLibrary = async () => {
      try {
        const response = await openPicker({
          maxSelectedAssets: 10, // Maximum images
          selectedColor: "#00ff00", // Selected border color
        });
        console.log("Selected Images:", response);
      } catch (error) {
        console.log("🚀 ~ openLibrary ~ error:", error);
      }
    };
    return (
      <View>
        <Text>ImagePicker</Text>
        <Button title="Pick Images" onPress={openLibrary} />
      </View>
    );
  }
);

export default ImagePicker;

const styles = StyleSheet.create({});

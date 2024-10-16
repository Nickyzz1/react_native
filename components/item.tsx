import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Item = ({ nome, idade, data }: { nome: string; idade: string; data: string; }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.list, isHovered && styles.hovered]}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <Text style={styles.txt}>{nome}</Text>
      <Text style={styles.txt}>{idade}</Text>
      <Text style={styles.txt}>{data}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    margin: 10,
    height: 100,
    width: "auto",
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  hovered: {
    backgroundColor: "#B40808FF", // Cor ao "hoverar"
    transform: "scale[1.1]"
  },
  txt: {
    color: "#ffffff",
  },
});

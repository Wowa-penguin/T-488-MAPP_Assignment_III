import React from "react";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ScreenContainer from "@/components/screenContainer";
import { CINEMAS } from "@/constants/cinemas";

const CinemaDetailScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const cinema = CINEMAS.find((c) => c.id === id);
  
    if (!cinema) {
      return (
        <ScreenContainer>
          <Text style={styles.title}>Cinema not found</Text>
        </ScreenContainer>
      );
    }
  
    return (
      <ScreenContainer>
        <Text style={styles.title}>{cinema.name}</Text>
  
        <Text style={styles.label}>Website</Text>
        <TouchableOpacity onPress={() => Linking.openURL(cinema.website)}>
          <Text style={styles.link}>{cinema.website}</Text>
        </TouchableOpacity>
  
        // ! desccription, address og símanumer
      </ScreenContainer>
    );
  };
  
  export default CinemaDetailScreen;

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: 'white',
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: '#cbd5e1',
      marginBottom: 4,
    },
    link: {
      fontSize: 16,
      color: '#38bdf8',
    },
  });
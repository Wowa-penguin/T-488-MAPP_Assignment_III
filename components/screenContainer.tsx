import React, { ReactNode } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

type Props = {
  children: ReactNode;
};

const ScreenContainer = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0b1721',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
});

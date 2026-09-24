import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../context/Theme';
import TopBar from './TopBar';

// Standard page shell: green TopBar + themed body (matches web .app > .topbar + content).
export default function Screen({ children }: { children: ReactNode }) {
  const { colors } = useTheme();
  return (
    <View style={[styles.wrap, { backgroundColor: colors.paper }]}>
      <TopBar />
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  body: { flex: 1 },
});

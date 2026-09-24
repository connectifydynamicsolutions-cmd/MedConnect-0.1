import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/Theme';

interface Props {
  title: string;
  route: string;
  source: string;
}

// Shown until each web screen is ported — keeps navigation/structure testable.
export default function Placeholder({ title, route, source }: Props) {
  const { colors } = useTheme();
  return (
    <View style={[styles.wrap, { backgroundColor: colors.paper }]}>
      <Text style={styles.emoji}>🚧</Text>
      <Text style={[styles.title, { color: colors.ink }]}>{title}</Text>
      <Text style={[styles.route, { color: colors.muted }]}>Web route: {route || '(gate)'}</Text>
      <Text style={[styles.source, { color: colors.subtle }]}>Port from {source}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  emoji: { fontSize: 34, marginBottom: 12 },
  title: { fontSize: 20, fontWeight: '800', textAlign: 'center' },
  route: { fontSize: 14, marginTop: 6 },
  source: { fontSize: 12, marginTop: 4 },
});

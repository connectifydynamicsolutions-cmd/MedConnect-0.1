import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/Theme';
import Icon, { IconName } from '../../../components/Icon';
import { useAuth } from '../../../context/Auth';

const TAB_META: { name: string; icon: IconName; label: string }[] = [
  { name: 'index', icon: 'home', label: 'Home' },
  { name: 'partners', icon: 'partners', label: 'Partners' },
  { name: 'osce', icon: 'osce', label: 'OSCE' },
  { name: 'chat', icon: 'chat', label: 'Chat' },
  { name: 'focus', icon: 'focus', label: 'Focus' },
];

// Structural props — Expo Router vendors its own bottom-tabs types,
// so we avoid importing BottomTabBarProps from @react-navigation/bottom-tabs.
interface TabBarProps {
  state: { index: number; routes: { key: string; name: string }[] };
  navigation: {
    emit: (event: {
      type: 'tabPress';
      target: string;
      canPreventDefault: true;
    }) => { defaultPrevented: boolean };
    navigate: (name: string) => void;
  };
}

// Green bottom nav — port of web .tabbar (forest bg, gold active icon, dot badges TODO).
function TabBar({ state, navigation }: TabBarProps) {
  const { colors, mode } = useTheme();
  const insets = useSafeAreaInsets();
  const bg = mode === 'dark' ? colors.topbarBg : '#1f4d3f';

  return (
    <View style={[styles.bar, { backgroundColor: bg, paddingBottom: Math.max(insets.bottom, 16) }]}>
      {state.routes.map((route, index) => {
        const meta = TAB_META[index];
        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
          // TODO(wave B): tapping the active tab scrolls the page to top
        };

        return (
          <Pressable key={route.key} style={styles.tab} onPress={onPress} accessibilityRole="button">
            <View style={styles.ic}>
              <Icon name={meta.icon} size={22} color={focused ? '#d8a84a' : '#a7c6ba'} strokeWidth={1.8} />
              {/* TODO(wave B): unread dot on Chat/Partners, live dot on Focus */}
            </View>
            <Text style={[styles.label, { color: focused ? '#ffffff' : '#a7c6ba' }]}>{meta.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function TabsLayout() {
  const { user, loading } = useAuth();
  if (loading || !user || !user.profile_complete) return null;

  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="partners" />
      <Tabs.Screen name="osce" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="focus" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', paddingTop: 10, borderTopWidth: 1, borderTopColor: 'transparent' },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 3 },
  ic: { height: 22, position: 'relative' },
  label: { fontSize: 10, fontWeight: '600' },
});

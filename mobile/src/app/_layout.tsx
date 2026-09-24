import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Stack, useSegments, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from '../context/Theme';
import { AuthProvider, useAuth } from '../context/Auth';
import { DrawerProvider } from '../context/Drawer';
import DrawerHost from '../components/Drawer';

const LOGO = require('../../assets/icon.png');

function Splash() {
  const { colors } = useTheme();
  return (
    <View style={[styles.splash, { backgroundColor: colors.paper }]}>
      <Image source={LOGO} style={styles.splashLogo} />
      <Text style={[styles.splashBrand, { color: colors.ink }]}>MedConnect</Text>
      <Text style={[styles.splashTag, { color: colors.muted }]}>Connect. Study. Succeed.</Text>
      <ActivityIndicator style={{ marginTop: 24 }} color={colors.forest} />
    </View>
  );
}

// Auth gate: splash → signed-out routes → Setup (incomplete profile) → main app.
function Gate() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSplashDone(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loading || !splashDone) return;
    const root = segments[0] as string | undefined;

    if (!user) {
      const allowed = root === '(auth)' || root === 'legal' || root === 'reset';
      if (!allowed) router.replace('/(auth)/sign-in');
      return;
    }
    if (!user.profile_complete) {
      if (root !== 'setup' && root !== 'legal') router.replace('/setup');
      return;
    }
    // signed in with a complete profile
    if (root === '(auth)' || root === 'setup' || root === 'reset') {
      router.replace('/(main)');
    }
  }, [loading, splashDone, user, segments, router]);

  if (loading || !splashDone) return <Splash />;
  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <DrawerProvider>
            <StatusBar style="light" />
            <Gate />
            <DrawerHost />
          </DrawerProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  splash: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  splashLogo: { width: 84, height: 84, borderRadius: 18, marginBottom: 8 },
  splashBrand: { fontSize: 28, fontWeight: '900', letterSpacing: -0.5 },
  splashTag: { fontSize: 14 },
});

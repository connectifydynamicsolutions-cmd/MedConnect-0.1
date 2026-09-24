import React from 'react';
import { Stack } from 'expo-router';
import { useAuth } from '../../context/Auth';

// Signed-in area — renders nothing while the root gate redirects unauthorized users.
export default function MainLayout() {
  const { user, loading } = useAuth();
  if (loading || !user || !user.profile_complete) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}

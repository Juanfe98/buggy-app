import React from 'react';
import { Stack, Link } from 'expo-router';

export default function GroupsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Your Groups',
          headerShown: false,
        }}
      />
    </Stack>
  );
}

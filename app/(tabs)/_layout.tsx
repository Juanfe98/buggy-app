import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import useTheme from '@/hooks/useTheme';

const TabIcon = (props: any) => (
  <FontAwesome size={24} style={{ marginBottom: -2 }} {...props} />
);

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Groups',
          headerTitle: 'Your Groups',
          tabBarIcon: ({ color }) => <TabIcon name="users" color={color} />,
        }}
      />

      {/* <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          headerTitle: 'Your Profile',
          tabBarIcon: ({ color }) => <TabIcon name="user" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}

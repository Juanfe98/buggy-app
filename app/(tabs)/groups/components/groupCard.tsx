import React, { memo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useTheme from '@/hooks/useTheme';

export type Group = {
  id: string;
  name: string;
  netBalance: number;
  memberCount: number;
};

interface GroupCardProps {
  group: Group;
  onPress: (id: string) => void;
}

export const GroupCard = memo(function GroupCard({
  group,
  onPress,
}: GroupCardProps) {
  const theme = useTheme();
  const owesYou = group.netBalance > 0;
  const badgeColor = owesYou ? theme.success : theme.error;
  const balanceText = owesYou
    ? `+$${group.netBalance.toFixed(2)}`
    : `–$${Math.abs(group.netBalance).toFixed(2)}`;

  return (
    <Pressable
      style={[styles.card, { backgroundColor: theme.surface }]}
      android_ripple={{ color: theme.disabled, borderless: false }}
      onPress={() => onPress(group.id)}
    >
      <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
        <Text style={[styles.avatarText, { color: theme.surface }]}>
          {group.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
          {group.name}
        </Text>
        <Text style={[styles.meta, { color: theme.textSecondary }]}>
          {group.memberCount} members
        </Text>
      </View>

      <View style={[styles.badge, { backgroundColor: badgeColor }]}>
        <Text style={[styles.badgeText, { color: theme.surface }]}>
          {balanceText}
        </Text>
      </View>

      <FontAwesome
        name="chevron-right"
        size={16}
        color={theme.textSecondary}
        style={styles.chevron}
      />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    // subtle shadow
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '600',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  meta: {
    fontSize: 14,
    marginTop: 4,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  chevron: {
    marginLeft: 8,
  },
});

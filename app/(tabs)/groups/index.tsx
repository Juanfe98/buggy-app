import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import useTheme from '@/hooks/useTheme';
import { SearchBar } from './components/searchBar';
import { GroupCard } from './components/groupCard';
import { Group } from '@/app/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  // only use up to 16px of the inset
  const bottomPadding = Math.min(insets.bottom, 16) + 8;

  const router = useRouter();

  // Mock hook: replace with real data fetching later
  const { groups, loading } = useMockGroups();

  // Search state
  const [query, setQuery] = useState('');

  // Filtered data
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups.filter((g) => g.name.toLowerCase().includes(q));
  }, [groups, query]);

  // Press handler
  const onPressGroup = useCallback(
    (id: string) => {
      router.push(`/groups/${id}`);
    },
    [router],
  );

  // Empty state
  if (!loading && filtered.length === 0) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyTitle, { color: theme.text }]}>
            No groups found
          </Text>
          <Text style={[styles.emptySubtitle, { color: theme.textSecondary }]}>
            Try creating one or adjust your search.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* <SearchBar value={query} onChangeText={setQuery} /> */}

      {loading ? (
        <ActivityIndicator
          size="large"
          color={theme.primary}
          style={styles.loader}
        />
      ) : (
        <>
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GroupCard group={item as Group} onPress={onPressGroup} />
            )}
            contentContainerStyle={{ paddingVertical: 8 }}
          />
          <View
            style={[
              styles.footer,
              {
                paddingBottom: bottomPadding,
                backgroundColor: theme.background,
                borderTopColor: theme.border,
              },
            ]}
          >
            <Pressable
              style={[styles.createButton, { backgroundColor: theme.primary }]}
              onPress={() => {
                /* router.push('/groups/create') */
              }}
            >
              <Text style={[styles.createText, { color: theme.surface }]}>
                Create Group
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

// Mock data hook
function useMockGroups(): { groups: Group[]; loading: boolean } {
  const [groups, setGroups] = useState<Group[] | null>(null);
  React.useEffect(() => {
    setTimeout(() => {
      setGroups([
        { id: '1', name: 'Road Trip 2025', netBalance: -50.0, memberCount: 4 },
        { id: '2', name: 'Roommates', netBalance: 20.0, memberCount: 3 },
        { id: '3', name: 'Dinner Crew', netBalance: -15.5, memberCount: 5 },
        { id: '4', name: 'Dinner Crew', netBalance: -15.5, memberCount: 5 },
        { id: '5', name: 'Dinner Crew', netBalance: -15.5, memberCount: 5 },
        { id: '6', name: 'Dinner Crew', netBalance: -15.5, memberCount: 5 },
        { id: '7', name: 'Dinner Crew', netBalance: -15.5, memberCount: 5 },
      ]);
    }, 500);
  }, []);
  return { groups: groups ?? [], loading: groups === null };
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loader: { flex: 1, justifyContent: 'center' },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  createButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // subtle shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  createText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

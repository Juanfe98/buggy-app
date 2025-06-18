import React from 'react'
import { View, Text, StyleSheet, FlatList, Pressable, SafeAreaView } from 'react-native'
import useTheme from '@/hooks/useTheme'
import FontAwesome from '@expo/vector-icons/FontAwesome'

  export default function GroupsListScreen() {
    const theme = useTheme()

    // Example data (replace with your real hook)
    const groups = [
      { id: '1', name: 'Road Trip 2025', netBalance: -50.0, memberCount: 4 },
      { id: '2', name: 'Roommates', netBalance: 20.0, memberCount: 3 },
    ]

    const renderGroup = ({ item }: { item: typeof groups[0] }) => {
      const owesYou = item.netBalance > 0
      const badgeColor = owesYou ? theme.success : theme.error
      const balanceText = owesYou
        ? `+$${item.netBalance.toFixed(2)}`
        : `–$${Math.abs(item.netBalance).toFixed(2)}`

      return (
        <Pressable
          style={[styles.card, { backgroundColor: theme.surface }]}
          onPress={() => {
            // router.push(`/groups/${item.id}`)
          }}
        >
          <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
            <Text style={[styles.avatarText, { color: theme.surface }]}>
              {item.name.charAt(0)}
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={[styles.groupName, { color: theme.text }]}>
              {item.name}
            </Text>
            <Text style={[styles.groupMeta, { color: theme.textSecondary }]}>
              {item.memberCount} members
            </Text>
          </View>
          <View style={[styles.badge, { backgroundColor: badgeColor }]}>
            <Text style={[styles.badgeText, { color: theme.surface }]}>
              {balanceText}
            </Text>
          </View>
        </Pressable>
      )
    }

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={renderGroup}
          contentContainerStyle={{ paddingVertical: 16 }}
        />

        {/* Floating Action Button */}
        <Pressable
          style={[
            styles.fab,
            { backgroundColor: theme.primary, shadowColor: theme.primary },
          ]}
          onPress={() => {
            // router.push('/groups/create')
          }}
        >
          <FontAwesome name="plus" size={24} color={theme.surface} />
        </Pressable>
      </SafeAreaView>
    )
  }

// export default function GroupListScreen(){
//   return (
//     <View>
//       <EditScreenInfo />
//     </View>
//   )
// } 

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    // Shadow (iOS) & elevation (Android)
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
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
  info: { flex: 1 },
  groupName: {
    fontSize: 16,
    fontWeight: '600',
  },
  groupMeta: {
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
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    // Elevation (Android)
    elevation: 6,
    // Shadow (iOS)
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
})

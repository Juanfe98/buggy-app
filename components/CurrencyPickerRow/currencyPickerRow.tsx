import React, { memo } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import useTheme from '@/hooks/useTheme'

interface CurrencyPickerProps {
  currencyCode: string
  currencyName: string
  onPress: () => void
}

export const CurrencyPickerRow = memo<CurrencyPickerProps>(({ currencyCode, currencyName, onPress }) => {
  const theme = useTheme()

  return (
    <Pressable
      style={[styles.row, { borderColor: theme.border }]}
      onPress={onPress}
    >
      <Text style={[styles.flag, { fontSize: 20 }]}>💲</Text>
      <View style={styles.info}>
        <Text style={[styles.code, { color: theme.text }]}>
          {currencyCode}
        </Text>
        <Text style={[styles.name, { color: theme.textSecondary }]}>
          {currencyName}
        </Text>
      </View>
      <FontAwesome
        name="chevron-right"
        size={16}
        color={theme.textSecondary}
      />
    </Pressable>
  )
})

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 24,
  },
  flag: {
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  code: {
    fontSize: 16,
    fontWeight: '500',
  },
  name: {
    fontSize: 14,
    marginTop: 2,
  },
})

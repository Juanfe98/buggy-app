import React from 'react'
import { View, Pressable, StyleSheet } from 'react-native'

interface Props {
  colors: string[]
  onSelect: (c: string) => void
}

export default function ColorGrid({ colors, onSelect }: Props) {
  return (
    <View style={styles.grid}>
      {colors.map((c) => (
        <Pressable
          key={c}
          onPress={() => onSelect(c)}
          style={[styles.swatch, { backgroundColor: c }]}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 16,
  },
  swatch: {
    width: 48,
    height: 48,
    borderRadius: 24,
    margin: 8,
  },
})

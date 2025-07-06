// TODO: Deprecate or use this component as currently is not being used
import React, { memo } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useTheme from '@/hooks/useTheme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar = memo(function SearchBar({
  value,
  onChangeText,
}: SearchBarProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
      ]}
    >
      <FontAwesome name="search" size={18} color={theme.textSecondary} />
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Search groups…"
        placeholderTextColor={theme.textSecondary}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
        accessible
        accessibilityLabel="Search groups"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    height: 40,
    fontSize: 16,
  },
});

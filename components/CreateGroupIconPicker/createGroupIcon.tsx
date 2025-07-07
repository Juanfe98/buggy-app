import React, { memo } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';

interface IconPickerProps {
  color: string;
  initial: string;
  onPress: () => void;
}

export const CreateGroupIconPicker = memo<IconPickerProps>(
  ({ color, initial, onPress }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
      <View style={styles.wrapper}>
        <Pressable
          style={({ pressed }) => [
            styles.circle,
            {
              backgroundColor: color,
              opacity: pressed ? 0.8 : 1,
              shadowColor: theme.primary,
            },
          ]}
          onPress={onPress}
        >
          <Text style={[styles.initial, { color: theme.surface }]}>
            {initial}
          </Text>
        </Pressable>
        <Text style={[styles.label, { color: theme.textSecondary }]}>
          {t('createGroup.changeColor')}
        </Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  circle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    // subtle shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  initial: {
    fontSize: 32,
    fontWeight: '600',
  },
  label: {
    fontSize: 14,
    marginTop: 8,
  },
});

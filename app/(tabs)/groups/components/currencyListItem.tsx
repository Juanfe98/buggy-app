import React, { memo } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import useTheme from '@/hooks/useTheme';
import { getFlagEmoji } from '@/app/utils/flagEmoji';
import { Currency } from '@/constants/Currencies';

interface Props {
  currency: Currency;
  onPress: (currency: Currency) => void;
}

/**
 * A single row in the currency picker list.
 * Renders the symbol, ISO code, and full name, and calls onPress when tapped.
 */
export const CurrencyListItem = memo<Props>(({ currency, onPress }) => {
  const { theme } = useTheme();

  const flag = getFlagEmoji(currency.countryCode);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: theme.surface, opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={() => onPress(currency)}
      accessibilityRole="button"
    >
      <View style={styles.left}>
        <Text style={[styles.flag, { color: theme.text }]}>{flag}</Text>
        <Text style={[styles.name, { color: theme.text }]}>
          {currency.name}
        </Text>
      </View>

      <Text style={[styles.codeRight, { color: theme.textSecondary }]}>
        {currency.code}
      </Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
  },
  flag: {
    fontSize: 30,
    marginRight: 12,
  },
  codeRight: {
    fontSize: 14,
    fontWeight: '700',
  },
});

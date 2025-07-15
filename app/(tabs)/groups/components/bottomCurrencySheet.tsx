import React, { memo } from 'react';
import { FlatList, StyleSheet, Platform } from 'react-native';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import useTheme from '@/hooks/useTheme';
import { CurrencyListItem } from './currencyListItem';
import { Currency } from '@/constants/Currencies';

interface Props {
  index: number;
  onChange: (i: number) => void;
  currencies: Currency[];
  onSelect: (c: Currency) => void;
}

export const BottomCurrencySheet = memo(function BottomCurrencySheet({
  index,
  onChange,
  currencies,
  onSelect,
}: Props) {
  const { theme } = useTheme();
  const [filter, setFilter] = React.useState('');

  const data = React.useMemo(
    () =>
      currencies.filter(
        (c) =>
          c.code.toLowerCase().includes(filter.toLowerCase()) ||
          c.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [filter, currencies],
  );

  return (
    <BottomSheet
      index={index}
      onChange={onChange}
      snapPoints={['60%']}
      enablePanDownToClose
      keyboardBehavior={Platform.OS === 'ios' ? 'extend' : 'interactive'}
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustResize"
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
        />
      )}
      backgroundStyle={{ backgroundColor: theme.surface }}
      handleIndicatorStyle={{ backgroundColor: theme.border }}
    >
      <BottomSheetView style={styles.container}>
        <BottomSheetTextInput
          style={[
            styles.search,
            { borderColor: theme.border, color: theme.text },
          ]}
          placeholder="Search currencies..."
          placeholderTextColor={theme.textSecondary}
          value={filter}
          onChangeText={setFilter}
        />
        <FlatList
          data={data}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <CurrencyListItem currency={item} onPress={() => onSelect(item)} />
          )}
        />
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  search: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
});

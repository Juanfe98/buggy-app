import React, { memo } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text, StyleSheet } from 'react-native';
import ColorGrid from '@/components/ColorGrid/colorGrid';
import useTheme from '@/hooks/useTheme';

interface Props {
  index: number;
  onChange: (i: number) => void;
  onSelect: (c: string) => void;
}

export const BottomColorSheet = memo(({ index, onChange, onSelect }: Props) => {
  const { theme, palette } = useTheme();

  return (
    <BottomSheet
      index={index}
      onChange={onChange}
      snapPoints={['30%']}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: theme.surface }}
      handleIndicatorStyle={{ backgroundColor: theme.border }}
    >
      <BottomSheetView style={styles.container}>
        <Text style={[styles.title, { color: theme.text }]}>
          Choose a Color
        </Text>
        <ColorGrid colors={palette} onSelect={onSelect} />
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});

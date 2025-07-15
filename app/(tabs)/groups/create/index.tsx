import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useTheme from '@/hooks/useTheme';
import { CreateGroupIconPicker } from '@/components/CreateGroupIconPicker/createGroupIcon';
import { CurrencyPickerRow } from '@/components/CurrencyPickerRow/currencyPickerRow';
import useGroupForm from '@/hooks/groups/useGroupForm';
import { BottomColorSheet } from '../components/bottomColorSheet';
import { getGroupInitial } from '@/app/utils/getGroupAcronym';
import { BottomCurrencySheet } from '../components/bottomCurrencySheet';
import { ALL_CURRENCIES } from '@/constants/Currencies';

export default function CreateGroupScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { form, update } = useGroupForm();

  const [sheetIndex, setSheetIndex] = useState(-1);
  const openSheet = () => setSheetIndex(0);
  const closeSheet = () => setSheetIndex(-1);

  const [curSheetIndex, setCurSheetIndex] = useState(-1);
  const openCurSheet = () => setCurSheetIndex(0);
  const closeCurSheet = () => setCurSheetIndex(-1);

  // Only mandatory field is the group name
  const isNextDisabled = form.name.trim().length === 0;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <CreateGroupIconPicker
            color={form.iconColor}
            initial={getGroupInitial(form.name)}
            onPress={openSheet}
          />

          <Field label="Group Name">
            <TextInput
              style={[
                styles.input,
                { borderColor: theme.border, color: theme.text },
              ]}
              placeholder="e.g. Road Trip 2025"
              placeholderTextColor={theme.textSecondary}
              value={form.name}
              onChangeText={(t) => update('name', t)}
              maxLength={30}
              autoFocus
            />
          </Field>

          <Field label="Currency">
            <CurrencyPickerRow
              currencyCode={form.currency.code}
              currencyName={form.currency.name}
              onPress={openCurSheet}
            />
          </Field>

          <Field label="Description">
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                { borderColor: theme.border, color: theme.text },
              ]}
              placeholder="Add a short note"
              placeholderTextColor={theme.textSecondary}
              value={form.description}
              onChangeText={(t) => update('description', t)}
              multiline
            />
          </Field>
        </ScrollView>
      </KeyboardAvoidingView>

      <View
        style={[
          styles.footer,
          {
            paddingBottom: Math.min(insets.bottom, 16),
            borderTopColor: theme.border,
          },
        ]}
      >
        <Pressable
          accessibilityRole="button"
          disabled={isNextDisabled}
          style={[
            styles.nextBtn,
            {
              backgroundColor: isNextDisabled ? theme.disabled : theme.primary,
            },
          ]}
          onPress={() => router.push('/groups/create/members')}
        >
          <Text style={[styles.nextText, { color: theme.surface }]}>
            Next: Add Members
          </Text>
        </Pressable>
      </View>

      <BottomColorSheet
        index={sheetIndex}
        onChange={setSheetIndex}
        onSelect={(c) => {
          update('iconColor', c);
          closeSheet();
        }}
      />

      <BottomCurrencySheet
        index={curSheetIndex}
        onChange={setCurSheetIndex}
        currencies={ALL_CURRENCIES}
        onSelect={(c) => {
          update('currency', { code: c.code, name: c.name });
          closeCurSheet();
        }}
      />
    </SafeAreaView>
  );
}

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => {
  const { theme } = useTheme();
  return (
    <View style={{ marginBottom: spacing.lg }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          color: theme.textSecondary,
          marginBottom: 8,
        }}
      >
        {label}
      </Text>
      {children}
    </View>
  );
};

const spacing = { lg: 24 };

const styles = StyleSheet.create({
  container: { flex: 1 },
  flex: { flex: 1 },
  scroll: { padding: 16, paddingBottom: 0 },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  nextBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextText: { fontSize: 16, fontWeight: '600' },
});

import React, { useState } from 'react'
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
} from 'react-native'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useTheme from '@/hooks/useTheme'
import { CreateGroupIconPicker } from '@/components/CreateGroupIconPicker/createGroupIcon'
import { CurrencyPickerRow } from '@/components/CurrencyPickerRow/currencyPickerRow'

export default function CreateGroupScreen() {
  const theme = useTheme()
  const router = useRouter()
  const insets = useSafeAreaInsets()

  // Form state
  const [iconColor, setIconColor] = useState(theme.primary)
  const [initial, setInitial] = useState('G')
  const [name, setName] = useState('')
  const [currency, setCurrency] = useState({ code: 'USD', name: 'US Dollar' })
  const [description, setDescription] = useState('')

  const isNextDisabled = name.trim().length === 0

  // Handlers (to be implemented)
  const handleIconPress = () => {
    /* open color picker bottom sheet */
  }
  const handleCurrencyPress = () => {
    /* open currency picker */
  }
  const handleNext = () => {
    // router.push('/groups/create/members', {
    //   name,
    //   iconColor,
    //   initial,
    //   currency,
    //   description,
    // })
    console.log('redirect to add members');
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Icon picker */}
          <CreateGroupIconPicker
            color={iconColor}
            initial={initial}
            onPress={handleIconPress}
          />

          {/* Group Name */}
          <View style={styles.field}>
            <Text style={[styles.label, { color: theme.textSecondary }]}>
              Group Name
            </Text>
            <TextInput
              style={[
                styles.input,
                { borderColor: theme.border, color: theme.text },
              ]}
              placeholder="e.g. Road Trip 2025"
              placeholderTextColor={theme.textSecondary}
              value={name}
              onChangeText={setName}
              maxLength={30}
            />
          </View>

          {/* Currency */}
          <CurrencyPickerRow
            currencyCode={currency.code}
            currencyName={currency.name}
            onPress={handleCurrencyPress}
          />

          {/* Description */}
          <View style={styles.field}>
            <Text style={[styles.label, { color: theme.textSecondary }]}>
              Description (optional)
            </Text>
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                { borderColor: theme.border, color: theme.text },
              ]}
              placeholder="Add a short note"
              placeholderTextColor={theme.textSecondary}
              value={description}
              onChangeText={setDescription}
              multiline
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Footer & Next Button */}
      <View
        style={[
          styles.footer,
          {
            paddingBottom: Math.min(insets.bottom, 16),
            borderTopColor: theme.border,
            backgroundColor: theme.background,
          },
        ]}
      >
        <Pressable
          style={[
            styles.nextButton,
            {
              backgroundColor: isNextDisabled ? theme.disabled : theme.primary,
              opacity: isNextDisabled ? 0.6 : 1,
            },
          ]}
          onPress={handleNext}
          disabled={isNextDisabled}
        >
          <Text style={[styles.nextText, { color: theme.surface }]}>
            Next: Add Members
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  flex: { flex: 1 },
  scrollContent: {
    padding: 16,
    paddingBottom: 0, // footer handles bottom spacing
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    alignItems: 'center',
  },
  nextButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextText: {
    fontSize: 16,
    fontWeight: '600',
  },
})

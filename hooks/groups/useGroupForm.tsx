import { useState, useEffect, useMemo } from 'react';
import useTheme from '@/hooks/useTheme';
import { CreateGroupForm } from '@/app/types';

/**
 * Manages the Create/Edit Group form state.
 *
 * @param initialData  Optional existing group values (Form default value).
 *                     If omitted, the hook will seed defaults.
 */
export default function useGroupForm(initialData?: Partial<CreateGroupForm>) {
  const { theme } = useTheme();

  // 1. Compute merged initial state only when initialData or theme.primary changes
  const defaultState = useMemo<CreateGroupForm>(
    () => ({
      name: '',
      iconColor: theme.primary,
      initial: '',
      currency: { code: 'USD', name: 'US Dollar' },
      description: '',
      ...initialData,
    }),
    [initialData, theme.primary],
  );

  // 2. Hold the form state
  const [form, setForm] = useState<CreateGroupForm>(defaultState);

  // 3. If initialData ever changes (e.g. after async load), reset form
  useEffect(() => {
    setForm(defaultState);
  }, [defaultState]);

  // 4. Generic updater: update any field by key
  const update = <K extends keyof CreateGroupForm>(
    key: K,
    value: CreateGroupForm[K],
  ) => {
    setForm((prev: CreateGroupForm) => ({ ...prev, [key]: value }));
  };

  return { form, update };
}

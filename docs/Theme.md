# BudgyApp Theming Guide

This document explains how our light/dark **color theme** is structured and how to use it throughout the codebase. Front-end engineers can refer to this guide to:

- Understand the **color tokens** and what they mean
- See the **folder & file structure** for theming
- Learn how to **access** theme colors in React Native components
- Learn how to **inject** the theme into navigation
- Follow **best practices** when adding or using colors

---

## 1. Color Tokens

We define a small set of **semantic tokens** rather than raw hex values:

| Token           | Usage                                                    |
| --------------- | -------------------------------------------------------- |
| `primary`       | Main brand color (buttons, links, active elements)       |
| `secondary`     | Accent highlights (badges, toggles, secondary buttons)   |
| `background`    | App background (screens’ canvas)                         |
| `surface`       | Cards, sheets, modals—any “on top of background” surface |
| `text`          | Default high-contrast text color                         |
| `textSecondary` | Lower-emphasis text (subheadings, metadata)              |
| `border`        | Dividers, input outlines, hairlines                      |
| `error`         | Destructive or error states (form errors, alerts)        |
| `success`       | Positive feedback (toasts, success badges)               |
| `warning`       | Warnings & caution (alerts, badges)                      |
| `disabled`      | Disabled UI (buttons, controls)                          |

---

## 2. File Structure

```text
app/
├─ constants/
│   └─ Colors.ts            ← light/dark `ThemeColors` definitions
├─ hooks/
│   └─ useTheme.ts          ← returns current `ThemeColors`
├─ navigation/
│   └─ NavigationTheme.ts   ← React Navigation’s light/dark themes
└─ _layout.tsx              ← injects NavigationTheme via ThemeProvider
```

## Using the Theme in Components

### Import & call

```ts
import useTheme from '@/hooks/useTheme';
const theme = useTheme();
```

### Style objects

```ts
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background },
  title: { color: theme.text },
  button: { backgroundColor: theme.primary },
  buttonText: { color: theme.surface },
});
```

### Inline adjustments

```ts
<View style={{ backgroundColor: theme.surface, borderColor: theme.border }} />
```

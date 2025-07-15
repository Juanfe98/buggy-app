export interface Currency {
  code: string; // ISO 4217 currency code
  name: string; // full currency name
  symbol: string; // currency symbol
  countryCode: string; // ISO 3166-1 alpha-2 country code
}

export const ALL_CURRENCIES: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', countryCode: 'US' },
  { code: 'COP', name: 'Colombian Peso', symbol: '$', countryCode: 'CO' },
  { code: 'EUR', name: 'Euro', symbol: '€', countryCode: 'EU' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', countryCode: 'JP' },
  { code: 'GBP', name: 'British Pound', symbol: '£', countryCode: 'GB' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', countryCode: 'AU' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', countryCode: 'CA' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', countryCode: 'CH' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', countryCode: 'CN' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', countryCode: 'IN' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', countryCode: 'BR' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', countryCode: 'MX' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', countryCode: 'NZ' },
];

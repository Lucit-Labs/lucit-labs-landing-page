export type TranslatorVariables = Record<string, string | number | Date>;

export interface ITranslator {
  t(key: string, variables?: TranslatorVariables | undefined): string;
  getLocale(): string;
}

export interface ILocaleRepository {
  getLocale(): Promise<string>;
  setLocale(locale: string): Promise<void>;
}

export interface ErrorWebMethod extends Error {
  Ajax?: object;
}

export interface PropertiesWebMethod {
  Url: string;
  Data: string;
}

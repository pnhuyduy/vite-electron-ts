export {}
export interface ExposedAPI {
  showDialog: (msg: string) => Promise<unknown>
}

declare global {
  interface Window {
    api: ExposedAPI
  }
}

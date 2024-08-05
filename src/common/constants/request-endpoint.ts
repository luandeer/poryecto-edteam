export enum ENDPOINT_VERSION {
  v1 = 'v1',
  v2 = 'v2'
}

export type TYPE_ENDPOINT_VERSION = keyof typeof ENDPOINT_VERSION

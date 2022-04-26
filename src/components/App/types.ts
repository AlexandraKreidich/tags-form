export const TAG_TYPE: { [key: string]: string, } = {
  GENERAL: 'supplierBranch-general',
  CERTIFICATES: 'supplierBranch-certificates',
  PORTFOLIO: 'supplierBranch-portfolio'
} as const;

export type TAG_TYPE = typeof TAG_TYPE[keyof typeof TAG_TYPE];

export interface ISupplierData {
  name: string;
  'tags-general': ITag[];
  'tags-certificates': ITag[];
  'tags-portfolio': ITag[];
}

export interface ITag {
  id: number;
  name: string;
  type: TAG_TYPE;
}

export type SupplierKeys = keyof ISupplierData;


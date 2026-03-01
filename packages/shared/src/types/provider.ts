import type { ProviderType, IntegrationStatus } from "../constants/categories";

export interface Provider {
  id: string;
  nameEn: string;
  nameAr: string;
  logoUrl: string;
  type: ProviderType;
  website?: string;
  integrationStatus: IntegrationStatus;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

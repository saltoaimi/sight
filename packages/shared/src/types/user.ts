export interface User {
  id: string;
  email: string;
  phone?: string;
  nameEn?: string;
  nameAr?: string;
  role: "user" | "admin" | "provider_admin";
  profile?: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  nationality?: string;
  residencyStatus?: "citizen" | "resident" | "visitor";
  emirate?: string;
  monthlySalary?: number;
  employerName?: string;
  employmentType?: "salaried" | "self_employed" | "freelancer";
  employmentMonths?: number;
  dateOfBirth?: string;
}

export interface WaitlistEntry {
  id: string;
  userId?: string;
  email: string;
  phone?: string;
  productId: string;
  createdAt: Date;
}

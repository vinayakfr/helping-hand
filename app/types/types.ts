// src/types/types.ts
export interface JobPost {
    _id: string;
    title: string;
    description: string;
    organisation: {
      name: string;
      email: string;
    };
    applicants: string[];
  }
  
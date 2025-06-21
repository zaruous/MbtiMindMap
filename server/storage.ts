// Simple in-memory storage for MBTI test (no user management needed)

// MBTI test doesn't require persistent storage
// All logic is handled client-side
export interface IStorage {
  // No storage methods needed for MBTI test
}

export class MemStorage implements IStorage {
  constructor() {
    // Empty constructor - no storage needed
  }
}

export const storage = new MemStorage();

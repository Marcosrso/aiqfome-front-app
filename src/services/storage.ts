const isBrowser = typeof window !== "undefined";

export const storage = {
  get<T = unknown>(key: string): T | null {
    if (!isBrowser) return null;

    const item = localStorage.getItem(key);
    if (!item) return null;

    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  },

  set<T = unknown>(key: string, value: T): void {
    if (!isBrowser) return;

    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key: string): void {
    if (!isBrowser) return;

    localStorage.removeItem(key);
  },

  has(key: string): boolean {
    if (!isBrowser) return false;

    return localStorage.getItem(key) !== null;
  },

  clear(): void {
    if (!isBrowser) return;

    localStorage.clear();
  },
};
const LocalStorage = () => {
  return {
    setItem<T>(key: string, value: T): void {
      try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
      } catch (err: any) {
        console.error(`Error saving ${key} to localStorage`, err);
      }
    },
    getItem<T>(key: string): T | null {
      try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
      } catch (err: any) {
        console.error(`Error reading ${key} from localStorage`, err);
        return null;
      }
    },
    removeItem(key: string): void {
      try {
        localStorage.removeItem(key);
      } catch (err: any) {
        console.error(`Error removing ${key} from localStorage`, err);
      }
    },
    clear(): void {
      try {
        localStorage.clear();
      } catch (err: any) {
        console.error(`Error clearing localStorage`, err);
      }
    },
  };
};

export default LocalStorage;

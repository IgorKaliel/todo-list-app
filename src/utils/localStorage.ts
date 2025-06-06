export const saveToStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromStorage = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const removeFromStorage = (key: string) => {
    localStorage.removeItem(key);
};

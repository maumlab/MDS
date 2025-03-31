export const generateUniqueId = () => {
  try {
    if (typeof window === "undefined") {
      return "_" + String(Math.random().toString(36).slice(2, 11));
    }

    return "_" + window.crypto.randomUUID();
  } catch (e) {
    console.error(e);
    return "_" + String(Math.random().toString(36).slice(2, 11));
  }
};

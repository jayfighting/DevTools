export function coalesce(...args: any[]) {
  for (const arg of args) {
    try {
      if (arg !== null && arg !== undefined) {
        return arg;
      }
    } catch (ex) { }
  }
  return null;
}
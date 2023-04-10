export function clienSideCheck(type: string): boolean {
    if (type === 'document') {
        return typeof document !== 'undefined' && Boolean(document);
    }
    if (type === 'window') {
        return typeof window !== 'undefined' && Boolean(window);
    }
    if (type === 'localStorage') {
        return typeof localStorage !== 'undefined' && Boolean(localStorage);
    }
    return false;
}

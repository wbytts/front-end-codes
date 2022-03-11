import { LocalStorage } from 'lowdb';

// Synchronous adapter for window.localStorage
new LowSync(new LocalStorage(name));

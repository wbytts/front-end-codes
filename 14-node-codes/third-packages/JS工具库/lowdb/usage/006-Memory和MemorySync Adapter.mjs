import { Low, Memory, MemorySync } from 'lowdb';

new Low(new Memory());
new LowSync(new MemorySync());

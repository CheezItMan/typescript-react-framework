export interface ModelAttributes<T> {
  set(value: T): void;

  getAll(): T;
  get<K extends keyof T>(key: K): T[K];

  
  
}

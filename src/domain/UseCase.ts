export interface UseCase<T> {
  (): Promise<T>;
}

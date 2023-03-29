export interface ResponseTypes<T> {
  data?: T;
  message: string;
  success: boolean;
}

export type ResponseError = {
  success: boolean;
  message: string;
  objectMessage: Record<string, string>;
  data: Array<unknown>;
};

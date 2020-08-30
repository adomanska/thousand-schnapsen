export type Size = "small" | "medium" | "large";

export type Touched<T extends object> = {
  [key in keyof T]?: boolean;
};

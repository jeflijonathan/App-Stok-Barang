export function catchError<T>(
  promise: Promise<any>
): Promise<[undefined, T] | [Error]> {
  return promise
    .then((data) => {
      return [undefined, data ?? []] as [undefined, T];
    })
    .catch((error: Error) => {
      return [error];
    });
}

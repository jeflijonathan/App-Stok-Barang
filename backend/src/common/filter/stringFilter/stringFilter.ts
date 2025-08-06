export function buildStringFilter(query: any = {}, fieldName: string) {
  const { order_by, sort } = query;

  if ((order_by !== "asc" && order_by !== "desc") || sort !== fieldName) {
    return { orderBy: undefined };
  }

  return {
    orderBy: {
      [fieldName]: order_by,
    },
  };
}

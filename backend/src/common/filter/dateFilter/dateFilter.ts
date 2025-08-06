export function buildDateFilter(query: any = {}) {
  const { order_by, sort } = query;

  if (
    (order_by !== "asc" && order_by !== "desc") ||
    (sort !== "createdAt" && sort !== "updatedAt")
  ) {
    return { orderBy: undefined };
  }

  return {
    orderBy: {
      [sort]: order_by,
    },
  };
}

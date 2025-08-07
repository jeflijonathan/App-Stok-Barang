import { buildDateFilter } from "@common/filter/dateFilter/dateFilter";
import { buildSingleSearch } from "@common/filter/sigleSearch/sigleSearch";
import { buildStringFilter } from "@common/filter/stringFilter/stringFilter";
import { prisma } from "src/config/database/client";
import { UserModel } from "./model";

export class UserService {
  public findUsers = async (query: any) => {
    const { skip, take } = query;
    const search = query.search as string | undefined;

    const searchFilter = buildSingleSearch("username", search);

    const { orderBy: stringOrderBy } = buildStringFilter(query, "createdAt");
    const { orderBy: dateOrderBy } = buildDateFilter(query);

    const orderBy = [];
    if (stringOrderBy) orderBy.push(stringOrderBy);
    if (dateOrderBy) orderBy.push(dateOrderBy);

    const where = searchFilter && { ...searchFilter };

    const [data, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: orderBy.length > 0 ? orderBy : undefined,
        include: { role: true },
      }),
      prisma.user.count({ where }),
    ]);

    return { data, total };
  };
  public findUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { role: true },
    });

    return user;
  };
}

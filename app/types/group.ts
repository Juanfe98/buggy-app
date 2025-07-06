// Describes exactly what a “Group” object looks like
export interface Group {
  id: string;
  name: string;
  netBalance: number;
  memberCount: number;
}

export interface CreateGroupForm {
  name: string;
  iconColor: string;
  initial: string;
  currency: { code: string; name: string };
  description: string;
}

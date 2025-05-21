export type treeNodesType = {
  id: number,
  title: string,
  is_deleted: boolean,
  deleted_at?: string | null,
  children: treeNodesType[]
}

export type ResponseList = {
  rowId: string
  title: string
  description: string
  category: string
}

export type ResponseContent = {
  text: string
  list?: ResponseList[]
}

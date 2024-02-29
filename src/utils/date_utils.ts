export const getNameFileFromDate = (): string => {
  const date: Date = new Date()
  return `${date.getTime()}`
}

export class FileName {

  static fileName: string
}
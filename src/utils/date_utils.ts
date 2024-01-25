export const getNameFileFromDate = (): string => {
  const date: Date = new Date()
  return `${date.getDay()}${date.getMonth()}${date.getFullYear()}${date.getMilliseconds()}`
}

export class FileName {

  static fileName: string
}
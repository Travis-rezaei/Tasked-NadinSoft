
export const StorageSetItem = (Name: string, Items: string) => {
    localStorage.setItem(Name, Items)
}

export const StorageGetItem = (Name: string) => {
    return localStorage.getItem(Name)
}
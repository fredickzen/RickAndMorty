export interface IGlobalResponse<Type> {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    }
    results: Type[]
}
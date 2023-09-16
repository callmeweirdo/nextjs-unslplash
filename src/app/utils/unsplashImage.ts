export interface UnsplashImage {
    alt_description: string,
    user: {
        username: string
    },
    urls: {
        raw: string
    },
    links: {
        self: string
    },
    width: number,
    height: number
}
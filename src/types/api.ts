export interface AuthResponse {
    token: string;
    userId?: string;
}

export interface UrlResponse {
    id: string,
    originalUrl: string,
    shortCode: string,
    userId: string,
    clicks: number,
    createdAt: Date
}

export interface UserUrlsResponse {
    urls: UrlResponse[];
}
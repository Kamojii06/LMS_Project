import { env } from "@/lib/env";

export function useConstructUrl(key: string): string{
    return `/api/s3/view?key=${encodeURIComponent(key)}`;
}
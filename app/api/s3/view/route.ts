import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3 } from "@/lib/S3Client";
import { env } from "@/lib/env";

const SIGNED_URL_EXPIRATION = 60 * 60; // 1 giờ

export async function GET(req: NextRequest) {
    const key = req.nextUrl.searchParams.get("key");

    if (!key) {
        return NextResponse.json({ error: "Missing key" }, { status: 400 });
    }

    try {
        const command = new GetObjectCommand({
            Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES,
            Key: key,
        });

        const signedUrl = await getSignedUrl(S3, command, {
            expiresIn: SIGNED_URL_EXPIRATION,
        });

        const response = NextResponse.redirect(signedUrl, 302);

        response.headers.set("Cache-Control", "public, max-age=3600"); // Cache trong 1 giờ
        return response;
    } catch {
        return NextResponse.json({ error: "Failed to generate view URL" }, { status: 500 });
    }
}
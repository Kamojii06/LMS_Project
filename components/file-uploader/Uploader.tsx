"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { CardContent } from "../ui/card";
import { RenderEmptyState, RenderErrorState } from "./RenderState";

export function Uploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {"image/*": []}, maxFiles: 1, multiple: false, maxSize: 5*1024*1024 });
    return (
        <Card {...getRootProps()} className={cn(
            "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64",
            isDragActive ? "border-primary bg-primary/10 border-solid" : "border-border hover:border-primary"
        )}>
            <CardContent className="flex items-center justify-center h-full w-full p-4">
                <input {...getInputProps()} />
                <RenderEmptyState isDragActive={isDragActive} />
            </CardContent>
        </Card>
    )
}
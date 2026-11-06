import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicCourseType } from "@/app/data/course/get-all-courses";
import { useConstructUrl } from "@/hooks/use-construct-url";
import Image from "next/image";
import Link from "next/link";
import { SchoolIcon, TimerIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface iAppProps {
    data: PublicCourseType
}

export function PublicCourseCard({data}: iAppProps) {
    const thumbnaiUrl = useConstructUrl(data.fileKey);

    return (
        <Card className="group relative py-0 gap-0">
            <Badge className="absolute top-2 right-2 z-10">{data.level}</Badge>

            <Image width={600} height={400} src={thumbnaiUrl} className="w-full rounded-t-xl aspect-video h-full object-cover" alt="Thumbnail Image of Course" unoptimized/>

            <CardContent className="p-4">
                <Link className="font-medium text-lg line-clamp-2 hover:underline group-hover:text-primary transition-colors" href={`/courses/${data.slug}`}>{data.title}</Link>
                <p className="line-clamp-2 text-sm text-muted-foreground leading-tight mt-2">{data.smallDescription}</p>

                <div className="mt-4 flex items-center gap-x-5">
                    <div className="flex items-center gap-x-2">
                        <TimerIcon className="size-6 p-1 rounded-md text-primary bg-primary/10" />
                        <p className="text-sm text-muted-foreground">{data.duration}h</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <SchoolIcon className="size-6 p-1 rounded-md text-primary bg-primary/10" />
                        <p className="text-sm text-muted-foreground">{data.category}</p>
                    </div>
                </div>

                <Link href={`/courses/${data.slug}`} className={buttonVariants({ className: "w-full mt-4" })}>
                    Learn More
                </Link>
            </CardContent>
        </Card>
    )
}

export function PublicCourseCardSkeleton() {
    return (
        <Card className="group relative py-0 gap-0">
            <div className="absolute top-2 right-2 z-10 flex items-center gap-x-2">
                <Skeleton className="h-6 w-20 rounded-full"></Skeleton>
            </div>
            <div className="w-full relative h-full">
                <Skeleton className="w-full rounded-t-xl aspect-video"></Skeleton>
            </div>

            <CardContent className="p-4">
                <div className="space-y-2">
                    <Skeleton className="h-6 w-full"></Skeleton>
                    <Skeleton className="h-4 w-3/4"></Skeleton>
                </div>

                <div className="mt-4 flex items-center gap-x-5">
                    <div className="flex items-center gap-x-2">
                        <Skeleton className="size-6 rounded-md"></Skeleton>
                        <Skeleton className="h-4 w-8"></Skeleton>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Skeleton className="size-6 rounded-md"></Skeleton>
                        <Skeleton className="h-4 w-8"></Skeleton>
                    </div>
                </div>

                <Skeleton className="mt-4 w-full h-10 rounded-md"></Skeleton>
            </CardContent>
        </Card>
    )
}
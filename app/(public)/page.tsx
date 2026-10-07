"use client"

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter()
  const { data: session, } = authClient.useSession() 

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/"); // redirect to login page
          toast.success("Signed out successfully!")
        },

      },
    });
  }
    
  return (
    <>
    <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="outline">
                The Future of Online Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elevate your Learning Experience</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover a new way to learn with our modern, interactive learning management system. Access high-quality courses anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link className={buttonVariants({
                    size: "lg"
                })} href="/course">Explore Courses</Link>

                <Link className={buttonVariants({
                    size: "lg",
                    variant: "outline"
                })} href="/login">Sign in</Link>

            </div>
        </div>

    </section>
    </>
  );
}

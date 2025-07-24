"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  iconUrl: string;
  title: string;
  readTime?: string;
  href?: string;
  badges?: readonly string[];
  publishedAt: string;
  description?: string;
}

export const BlogCard = ({
  title,
  href,
  badges,
  description,
  iconUrl,
  readTime,
  publishedAt,
}: BlogCardProps) => {
  return (
    <Link href={href || "#"} className="block cursor-pointer group">
      <Card className="flex bg-background py-4">
        <div className="flex-none">
          <Avatar className="size-12 m-auto rounded-lg bg-muted-foreground border-2">
            <AvatarImage src={iconUrl} alt={title || "avatar"} className="object-contain" />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center font-semibold leading-none md:text-base text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "ml-2 size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  )}
                />
              </h3>
              {readTime && (
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {readTime} read
                </div>
              )}
            </div>

            {badges && (
              <div className="flex gap-x-1 my-1 flex-wrap">
                {badges.map((badge, index) => (
                  <Badge variant="secondary" key={index}>
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            {publishedAt && (
              <div className="font-sans text-xs text-muted-foreground my-1">
                {formatDate(publishedAt)}
              </div>
            )}
            {description && (
              <div className="font-sans text-xs md:text-sm mr-10">
                {description}
              </div>
            )}
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
};

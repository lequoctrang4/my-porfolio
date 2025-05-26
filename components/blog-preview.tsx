import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, Clock } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { blogPosts } from "@/data/blog-posts"

export function BlogPreview() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold">{post.title}</h3>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4 pt-0">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.id}`} className="text-primary flex items-center hover:underline">
                Read more <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/blog" className="flex items-center text-primary hover:underline">
          View all articles <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import blogData from "@/content/blog.json"

export function BlogPreview() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const categories = blogData.categories
  const posts = blogData.posts

  return (
    <section id="blog" className="w-full py-16 bg-gradient-to-tr from-background via-primary/5 to-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Blog</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Čerstvé pohledy na osobní rozvoj, práci s emocemi a praktické tipy pro klidnější život.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Kategorie</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((c) => (
                    <li key={c}>
                      <button className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-primary/10 text-foreground/90">
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle>Potřebujete podporu?</CardTitle>
                <CardDescription>
                  Objednejte si bezplatnou 15min konzultaci.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary px-4 py-2 text-sm"
                >
                  Book a FREE consultation
                </button>
              </CardContent>
            </Card>
          </motion.aside>

          {/* Posts */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-44">
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{p.date}</span>
                      <span>•</span>
                      <span>{p.readTime} čtení</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{p.title}</CardTitle>
                    <CardDescription>{p.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="outline" className="px-2 py-0.5 text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
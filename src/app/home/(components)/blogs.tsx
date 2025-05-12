import { Wind } from 'lucide-react'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function BlogsSection() {
  const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2023',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog1-672x448.jpg',
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    {
      id: 2,
      title: 'Professional Ceramic Moulding for Beginners',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Dec 25, 2024',
      datetime: '2020-03-16',
      category: { title: 'Education', href: '#' },
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog2-672x448.jpg',
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    {
      id: 3,
      title: 'Education Is About Create Leaders For Tomorrow',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Jun 11, 2025',
      datetime: '2020-03-16',
      category: { title: 'UI & UX Design', href: '#' },
      imageUrl:
        'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog3-672x448.jpg',
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    }
  ]

  return (
    <section id="blogs" className="py-5 md:py-10 relative overflow-hidden">
      <div className="bg-gradient-to-r from-primary/30 via-primary/10 to-primary/5 dark:bg-black/20 backdrop-blur-lg absolute top-0 left-0 w-full h-full"></div>

      <div className="container m-auto px-4 relative">
        <div className="mx-auto max-w-7xl px-0 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary capitalize">
              <Wind className="size-5 rotate-180" />
              Blogs
              <Wind className="size-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Our Latest Blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-5 md:pt-10 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      alt="Blog"
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={post.imageUrl}
                      className="w-full h-[15rem] object-cover rounded-t-xl"
                    />

                    <div className="px-4 py-6">
                      <div className="flex items-center gap-x-4 text-xs mb-4">
                        <time
                          dateTime={post.datetime}
                          className="text-gray-500 dark:text-gray-300/60"
                        >
                          {post.date}
                        </time>
                        {/* <a
                          href={post.category.href}
                          className="relative z-10 px-2 py-1 font-medium dark:text-white/80 bg-primary/10"
                        >
                          {post.category.title}

                        </a> */}
                        <Badge>{post.category.title}</Badge>
                      </div>

                      <h2 className="mb-2">
                        <a
                          href="page-blog-details.html"
                          className="text-xl hover:text-primar"
                        >
                          {post.title}
                        </a>
                      </h2>

                      <p className="text-sm text-gray-400 dark:text-gray-300/60">
                        {post.description}
                      </p>

                      <div className="mt-4">
                        <a
                          href="page-blog-details.html"
                          className="text-primary"
                        >
                          Read More <i className="mdi mdi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogsSection

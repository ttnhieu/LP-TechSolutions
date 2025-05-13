'use client'
import { Mail, MapPin, Phone, Wind } from 'lucide-react'
import Image from 'next/image'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useTranslation } from 'react-i18next'
import Reveal from '@/components/animations/reveal'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().email('Email format is not valid.'),
  message: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  })
})

const iconMap = {
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail
}
type IconName = keyof typeof iconMap

function ContactSection() {
  const { t } = useTranslation('contact')

  const items = t('items', { returnObjects: true }) as {
    label: string
    value: string
    icon: IconName
  }[]

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: ''
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('🚀 ~ onSubmit ~ data:', data)
  }

  return (
    <section
      id="contact"
      className="pt-5 pb-10 md:pt-10 relative bg-gradient-1"
    >
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 px-4 text-sm md:text-xl text-primary border-b-1 border-primary mb-0 md:mb-2 capitalize">
            <Wind className="size-5 rotate-180" />
            {t('title')}
            <Wind className="size-5" />
          </span>
          <Reveal effect="fadeInUp" once={false}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              {t('sub_title')}
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto max-w-lg lg:max-w-4xl pt-10 md:pt-15">
          <div className="grid grid-cols-12 gap-6 xl:gap-10 justify-between">
            <div className="col-span-12 lg:col-span-6 xl:col-span-8">
              <Reveal effect="fadeInLeft" once={false}>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid grid-cols-12 gap-4"
                  >
                    <div className="col-span-12 grid grid-cols-12 gap-4">
                      <div className="col-span-12 md:col-span-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl className="h-[3rem] border border-[hsl(var(--border))] focus-visible:ring-primary">
                                <Input placeholder="Your name" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="col-span-12 md:col-span-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="">
                              <FormControl className="h-[3rem] border border-[hsl(var(--border))] focus-visible:ring-primary">
                                <Input placeholder="Your email" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="col-span-12">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl className="border border-[hsl(var(--border))] focus-visible:ring-primary">
                              <Textarea
                                rows={5}
                                placeholder="Message"
                                {...field}
                                className="resize-none"
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="col-span-12">
                      <Button
                        type="submit"
                        className="w-[10rem] h-10 text-md btn-effect-2 rounded-full"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <Reveal effect="fadeInRight" once={false}>
                <div className="flex flex-col gap-6">
                  {Array.isArray(items) &&
                    items.map((item, index) => {
                      const Icon = iconMap[item.icon]
                      return (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-12 h-12 p-2 bg-primary/10 dark:bg-primary/20 flex items-center justify-center rounded-full">
                            <Icon className="size-5 text-primary" />
                          </div>
                          <div className="about-complete-project">
                            <h4 className="font-medium text-lg">
                              {item.label}
                            </h4>
                            <p className="fw-400 secondary-black">
                              <a href="#">{item.value}</a>
                            </p>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -z-1 top-0 right-0">
        <Image
          alt="Shape Images"
          width={0}
          height={0}
          sizes="100vw"
          src="/images/leafshape.png"
          className="w-[15rem] sm:w-[25rem] h-auto object-contain"
        />
      </div>
    </section>
  )
}

export default ContactSection

'use client'
import { z } from 'zod'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

import { AnimatePresence, motion } from 'framer-motion'

import { zodResolver } from '@hookform/resolvers/zod'

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
import SectionHeader from '@/components/common/section-header'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  email: z.string().email('Email format is not valid.'),
  message: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  })
})

function ContactSection() {
  const { t } = useTranslation('contact')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log('🚀 ~ onSubmit ~ data:', data)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="pt-5 md:pt-10 relative">
      <div className="container relative">
        <SectionHeader title={t('title')} namespace="contact" />

        <div className="mx-auto max-w-4xl pt-10 md:pt-15 overflow-hidden">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="thankyou"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center space-y-2 rounded-lg"
              >
                <Image
                  alt="contact success"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/illustrations/mailbox.svg"
                  className="w-[15rem] h-auto object-cover rounded-2xl"
                />
                <h3 className="text-2xl sm:text-3xl font-semibold ">
                  {t('thanks.title')}
                </h3>
                <p className="text-md text-center text-foreground/50 whitespace-pre-line">
                  {t('thanks.content')}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="px-1"
              >
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl className="md:text-md h-[3rem] border border-[hsl(var(--border))] shadow-none focus-visible:ring-primary">
                              <Input placeholder="Your name" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="">
                            <FormControl className="md:text-md h-[3rem] border border-[hsl(var(--border))] shadow-none focus-visible:ring-primary">
                              <Input placeholder="Your email" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl className="md:text-md border border-[hsl(var(--border))] shadow-none focus-visible:ring-primary">
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

                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        className="w-full lg:w-1/2 h-10 text-md btn-effect-2 rounded-full"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

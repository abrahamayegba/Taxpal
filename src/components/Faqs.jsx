import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does TaxPal handle VAT?',
      answer:
        'While TaxPal does not directly handle VAT, you might find it convenient to consider offshore company options to simplify the process.',
    },
    {
      question: 'Can I pay for my subscription via purchase order?',
      answer:
        'Of course! We welcome payments in all forms, including purchase orders.',
    },
    {
      question: 'How do I apply for a job at TaxPal?',
      answer:
        'Exciting news! We exclusively consider applications from our valued customers. Get started by subscribing for a minimum of 6 months, and then let’s explore opportunities together.',
    },
  ],
  [
    {
      question: 'What was that testimonial about tax fraud all about?',
      answer:
        'While a testimonial mentioned tax fraud, it’s important to clarify that TaxPal is a software application, and the responsibility for accurate books lies with the user.',
    },
    {
      question:
        'TaxPal sounds horrible but why do I still feel compelled to purchase?',
      answer:
        'The allure of exceptional visual design can be irresistible, masking any functional shortcomings. It’s the magic of aesthetics!',
    },
    {
      question:
        'I found other companies called TaxPal, are you sure you can use this name?',
      answer:
        'To be completely transparent, we haven’t incorporated as a company. We just thought the name was cool and went ahead with creating this website.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'Our report generation process is simple. You specify the data you need, and we create elegant charts using state-of-the-art crayons wielded by our talented kids.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer:
        'In the grand scheme of things, it’s often best to avoid setting expectations altogether.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'No worries! Reach out to us via email, and we’ll provide you with our latest password spreadsheet. It’s like a key to your account.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-xl tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-base text-slate-700">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

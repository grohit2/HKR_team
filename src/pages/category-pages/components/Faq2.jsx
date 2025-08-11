"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about roles in this category.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What qualifications are needed?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Qualifications vary by role, but generally, a relevant degree or
              experience in the field is essential. Many employers also value
              certifications specific to the industry. Always check the job
              description for specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the salary range?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Salary ranges can vary widely based on experience, location, and
              company size. On average, roles in this category offer competitive
              salaries that reflect industry standards. Researching salary data
              can help you set realistic expectations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What are typical duties?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Typical duties include managing projects, collaborating with
              teams, and ensuring quality standards. Responsibilities may also
              involve client interactions and reporting on progress. Each role
              will have its unique set of tasks outlined in the job description.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to apply?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To apply, submit your resume and cover letter through our online
              portal. Ensure you tailor your application to highlight relevant
              experiences. Follow up with your recruiter for updates on your
              application status.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the interview process?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The interview process typically includes an initial screening
              followed by one or more interviews with hiring managers. You may
              also be asked to complete assessments relevant to the role.
              Preparation is key, so review common interview questions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

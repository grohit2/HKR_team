"use client";

import { Badge, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio11() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Current UI-UX Openings
          </h2>
          <p className="md:text-md">
            Explore exciting opportunities in UI-UX design.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">User Experience Project</a>
            </h3>
            <p>
              Revamping the user interface for a leading e-commerce platform.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">E-commerce</a>
              </Badge>
              <Badge>
                <a href="#">UI Design</a>
              </Badge>
              <Badge>
                <a href="#">User Research</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Mobile App Design</a>
            </h3>
            <p>
              Creating an intuitive mobile experience for a fitness application.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Mobile Design</a>
              </Badge>
              <Badge>
                <a href="#">User Testing</a>
              </Badge>
              <Badge>
                <a href="#">Prototyping</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article>
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Website Redesign</a>
            </h3>
            <p>Enhancing usability and aesthetics for a corporate website.</p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Web Design</a>
              </Badge>
              <Badge>
                <a href="#">Accessibility</a>
              </Badge>
              <Badge>
                <a href="#">User Feedback</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              asChild={true}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}

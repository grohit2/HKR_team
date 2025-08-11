"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Top Job Opportunities
          </h2>
          <p className="md:text-md">
            Explore our featured job listings in this category.
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:gap-x-12">
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Data Engineer</a>
              </h3>
              <p>Join a leading tech company as a Data Engineer.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Engineering</a>
                </Badge>
                <Badge>
                  <a href="#">Full-Time</a>
                </Badge>
                <Badge>
                  <a href="#">Remote Work</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">UX Designer</a>
              </h3>
              <p>
                Shape user experiences as a UX Designer for innovative projects.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Design</a>
                </Badge>
                <Badge>
                  <a href="#">Creative</a>
                </Badge>
                <Badge>
                  <a href="#">Full-Time</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Product Manager</a>
              </h3>
              <p>Lead product development initiatives as a Product Manager.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Management</a>
                </Badge>
                <Badge>
                  <a href="#">Leadership</a>
                </Badge>
                <Badge>
                  <a href="#">Full-Time</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-12 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">DevOps Engineer</a>
              </h3>
              <p>
                Streamline operations as a DevOps Engineer in a dynamic
                environment.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Operations</a>
                </Badge>
                <Badge>
                  <a href="#">Engineering</a>
                </Badge>
                <Badge>
                  <a href="#">Full-Time</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-6 flex justify-center md:mt-8">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer5() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="rb-12 mb-12 block items-start justify-between md:mb-18 lg:mb-20 lg:flex">
          <div className="rb-6 mb-6 lg:mb-0">
            <h1 className="font-semibold md:text-md">Subscribe to Updates</h1>
            <p>Stay informed with our latest news and offers.</p>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={formState.handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder="Your Email Here"
                value={formState.email}
                onChange={formState.handleSetEmail}
              />
              <Button title="Subscribe" variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
            <p className="text-xs">
              By subscribing, you accept our Privacy Policy.
            </p>
          </div>
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          <a
            href="#"
            className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
          >
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Resources Section</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  About Us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Contact Support
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Careers Page
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Blog Articles
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  FAQ Section
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Legal Info</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Privacy Policy
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Terms of Use
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  User Agreement
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Cookie Policy
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Data Protection
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Support Center</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Feedback Form
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Help Center
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Community Forum
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Resource Hub
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  User Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Social Links</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Facebook Page
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Twitter Feed
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  LinkedIn Profile
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Instagram Account
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="mb-3 font-semibold md:mb-4">Company Info</h2>
            <ul>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Careers at Company
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Join Our Team
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Partnership Opportunities
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Work With Us
                </a>
              </li>
              <li className="py-2 text-sm">
                <a href="#" className="flex items-center gap-3">
                  Contact Our Team
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start pt-6 pb-4 text-sm md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © 2024 Relume. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="#">
              <BiLogoFacebookCircle className="size-6" />
            </a>
            <a href="#">
              <BiLogoInstagram className="size-6" />
            </a>
            <a href="#">
              <FaXTwitter className="size-6 p-0.5" />
            </a>
            <a href="#">
              <BiLogoLinkedinSquare className="size-6" />
            </a>
            <a href="#">
              <BiLogoYoutube className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
      <div>
        <section className="my-10">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">
                  Q1: How do you rate the games in your reviews?
                </summary>
                <div className="px-4 pb-4 text-lg">
                  <p>
                    A: We rate games based on several factors, including
                    gameplay, graphics, story, controls, sound, and
                    replayability. We provide a score out of 10, along with a
                    detailed breakdown of the pros and cons to give you a
                    complete picture.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">
                  Q2: How often do you post new game reviews?
                </summary>
                <div className="px-4 pb-4 text-lg">
                  <p>
                    A: We try to post new game reviews weekly, depending on the
                    game releases and our review schedule.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline text-2xl">
                  Q3: Do you review games on all platforms?
                </summary>
                <div className="px-4 pb-4 space-y-2 text-lg">
                  A: We cover a wide range of platforms, including PC,
                  PlayStation, Xbox, Nintendo Switch, and mobile devices. We
                  also mention platform-specific performance and differences
                  when applicable.
                </div>
              </details>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Have more questions?</h1>
            <p className="text-lg my-2 font-semibold">
              Try Our{" "}
              <Link to="contact" className="text-red-600">
                Contact Us
              </Link>
            </p>
          </div>
        </section>
      </div>
    );
};

export default FAQ;
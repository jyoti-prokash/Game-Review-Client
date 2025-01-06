import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/icon/404-error.png'

const ErrorPage = () => {
    return (
      <section className="flex items-center h-full p-16  dark:text-gray-800 bg-red-400">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center text-white">
            <p>
              <img src={error} alt="" srcset="" />
            </p>
            <p className="text-2xl font-semibold md:text-3xl ">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-white">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;
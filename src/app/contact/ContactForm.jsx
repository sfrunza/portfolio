'use client';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';
import clsx from 'clsx';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values, actions) => {
      setLoading(true);
      setTimeout(() => {
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }).then((res) => {
          if (res.status === 200) {
            setLoading(false);
            toast.success('Message sent!');
            actions.resetForm();
          }
        });
      }, 1000);
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: yup.string().email('Invalid email').required('Required'),
      subject: yup.string().required('Required'),
      message: yup.string().required('Required'),
    }),
  });

  return (
    <>
      <div className="bg-white max-w-lg m-auto rounded-lg shadow-2xl py-12 px-10">
        <div className="mx-auto max-w-lg lg:max-w-none">
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label htmlFor="full-name" className="text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                id="full-name"
                autoComplete="name"
                className={clsx(
                  'block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm',
                  {
                    'border-red-300': formik.errors.name && formik.touched.name,
                  }
                )}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                autoComplete="email"
                className={clsx(
                  'block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm',
                  {
                    'border-red-300':
                      formik.errors.email && formik.touched.email,
                  }
                )}
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                id="subject"
                autoComplete="off"
                className={clsx(
                  'block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm',
                  {
                    'border-red-300':
                      formik.errors.subject && formik.touched.subject,
                  }
                )}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                rows={4}
                className={clsx(
                  'block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm',
                  {
                    'border-red-300':
                      formik.errors.message && formik.touched.message,
                  }
                )}
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled={loading}
                type="submit"
                className="uppercase inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-orange-700"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}

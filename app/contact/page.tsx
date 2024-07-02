import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};
const Contact = () => {
  return (
    <section className='py-8 sm:py-16 bg-primary text-secondary'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-accent rounded-lg shadow-md p-6'>
          <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
          <p className='text-gray-100 leading-relaxed mb-6'>
            If you have any questions, suggestions, or just want to get in
            touch, feel free to contact us using the form below. We look forward
            to hearing from you!
          </p>
          <form className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-100'
              >
                Name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='block w-full bg-gray-700 border-gray-600 text-gray-100 rounded-md shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 indent-3'
                  placeholder='Your name'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-100'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full bg-gray-700 border-gray-600 text-gray-100 rounded-md shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 indent-3'
                  placeholder='you@example.com'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-100'
              >
                Message
              </label>
              <div className='mt-1'>
                <textarea
                  name='message'
                  id='message'
                  rows={4}
                  className='block w-full bg-gray-700 border-gray-600 text-gray-100 rounded-md shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 indent-3'
                  placeholder='Your message'
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='inline-flex items-center px-4 py-2 bg-red-400 border border-transparent rounded-md font-semibold text-secondary hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

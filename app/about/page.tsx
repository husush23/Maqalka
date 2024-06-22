const About = () => {
  return (
    <section className='py-8 sm:py-16 bg-primary text-secondary'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-accent rounded-lg shadow-md p-6'>
          <h1 className='text-3xl text-[#f63d68] font-bold mb-4'>About Us</h1>
          <p className='text-gray-100 leading-relaxed mb-6'>
            Welcome to Maqalak, your number one source for all things related to
            [your blog topic]. We're dedicated to giving you the very best of
            [blog topic], with a focus on [three characteristics, e.g.,
            dependability, customer service, and uniqueness].
          </p>
          <p className='text-gray-100 leading-relaxed mb-6'>
            Founded in [year] by [founder name], Maqalak has come a long way
            from its beginnings in [starting location]. When [founder name]
            first started out, [his/her/their] passion for [passion for the blog
            topic] drove them to [action: quit day job, do tons of research,
            etc.] so that Maqalak can offer you [competitive differentiator: the
            world's most advanced toothbrush]. We now serve customers all over
            [place: the US, the world, the Austin area], and are thrilled that
            we're able to turn our passion into our own website.
          </p>
          <p className='text-gray-100 leading-relaxed mb-6'>
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don't hesitate to
            contact us.
          </p>
          <p className='text-gray-100 leading-relaxed mb-6'>
            Sincerely,
            <br />
            [Founder Name]
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

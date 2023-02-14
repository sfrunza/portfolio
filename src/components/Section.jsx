import clsx from 'clsx';

const Section = ({ className, children, ...props }) => {
  return (
    <section
      className={clsx('py-20 sm:py-24 relative overflow-hidden', className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default Section;

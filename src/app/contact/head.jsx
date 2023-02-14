const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/contact`;

export default function Head() {
  return (
    <>
      <title>Contact | Sergiu Frunza</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Contact me page with contact form." />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={URL} precedence="default" />
    </>
  );
}

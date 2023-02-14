const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}`;
export default function Head() {
  return (
    <>
      <title>Sergiu Frunza</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Sergiu Frunza portfolio website" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="canonical" href={URL} precedence="default" />
    </>
  );
}

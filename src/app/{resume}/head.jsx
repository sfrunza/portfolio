const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/resume`;
export default function Head() {
  return (
    <>
      <title>Resume | Sergiu Frunza</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="List with skills, experience and education."
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={URL} precedence="default" />
    </>
  );
}

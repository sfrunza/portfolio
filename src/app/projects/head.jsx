const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/projects`;
export default function Head() {
  return (
    <>
      <title>Projects | Sergiu Frunza</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="List with all my personal projects." />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={URL} precedence="default" />
    </>
  );
}

export default function AboutMe(props: { body: string }) {
  return (
  <article className="min-h-screen">
      <h1 className="text-center text-xl">About me...</h1>
      <div className="flex flex-col lg:flex-row justify-center space-x-10 items-center">
        <img src="/me.jpg" alt="Photograph of me in a bar" className="h-[240px] md:h-[380px] lg:h-[600px]" />
        <p className="animate-fade-up mt-2 text-sm max-w-2xl whitespace-pre-line">
          {props.body}
        </p>

      </div>
    </article>
  )
}
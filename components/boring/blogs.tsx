export default function Blogs() {
  return (
    <>
      <h1
        id="blogs"
        className="flex flex-col justify-center font-bold text-2xl lg:text-4xl"
      >
        Blogs
      </h1>
      <h3 className="text-lg pb-2 pt-1">
        Some thoughts - Warning: they might not be useful.
      </h3>
      <div className="flex flex-col justify-center w-full">
        <h1 className="lg:text-lg ">
          <div className="pt-7" />
          <span className="font-bold text-blue-400">
            Post 1: Don&apos;t Write Blogs {"(Write Code)"}
          </span>
          <br />
          <span>
            As the only engineer at my office, and the only technology brother
            of my friends, I&apos;ve felt for some time like I&apos;m clawing at
            an untouchable in-group, and many times felt driven to do some of
            the many things that junior engineers do to be noticed which have
            absolutely nothing to do with bettering their craft (e.g.
            contributing to open source, writing blogs, networking on LinkedIn,
            etc..). I&apos;ve avoided extensive LinkedIn posturing because I
            can&apos;t stand the site, and since becoming a part of Theo&apos;s
            community on Twitch I&apos;ve realized the woes of OSS contributions
            made from ill-intent. Blogs, on the other hand, are mostly harmless,
            a great exposé of personality, and (for some) a joy to write.
            Moreover, I&apos;m a voracious consumer of information and do feel
            an urge to give some back. But whenever I start researching any of
            the many ideas I have to write about, I realize I can&apos;t
            honestly say I&apos;ve written enough code to justify spending time
            writing a blog, let alone that I&apos;ve learned enough about coding
            to have something valuable to say. So with that said, this post is
            over, and I&apos;m getting back to coding.
          </span>
          <div className="pt-7" />
        </h1>
      </div>
      <div className="py-6 w-full border-b border-gray-400" />
    </>
  );
}

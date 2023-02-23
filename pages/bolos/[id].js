import Image from 'next/image'

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.

export default function Bolos({post}) {
  return (
        <>
      <Head>
        <title>{post.title} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={post.description} />
        <link rel="icon" href="/logochef.png" />
      </Head>
        <h2>{post.title}</h2>
        <Image 
          src={post.image} 
          alt={post.title}
          width={100} 
          height={100} />
        <h4>{post.description}</h4>
        <p>{post.text}</p>
    </>
  )
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://62b4dc33530b26da4cc60791.mockapi.io/bolos/${params.id}`)
  const post = await res.json()

   // Pass post data to the page via props
   return { props: { post } }
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://62b4dc33530b26da4cc60791.mockapi.io/bolos/')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

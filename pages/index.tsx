import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'


const Home: NextPage = () => {
  const articles = [... Array(4)].map((_, index) => {
    return {
      id: index + 1,
      title: "Learning redux Easier",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas etiam morbi varius sapien. Eu arcu morbi tortor rhoncus. Donec pellentesque diam orci enim, nibh diam. Nulla id ut risus quisque felis tristique metus..."
    }
  })
  return (
    <div>
      <Head>
        <title>Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className='w-[728px] wx-auto py-24'></div>
    </div>
  )
}

export default Home
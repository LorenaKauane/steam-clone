import Head from 'next/head';
import Category from '../components/Category';
import Navbar from '../components/Navbar';
import SliderDestaque from '../components/SliderDestaque';
import SliderGames from '../components/SliderGames';
import Footer from '../components/Footer';
import games from '../jogos.json';

export default function Home() {
  return (
    <div className="text-primary">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SliderDestaque />
      <SliderGames title="Jogos em alta" games={games.altas} />
      <Category />
      <SliderGames title="Jogos recomendados" games={games.recommend} />
      <Footer />
    </div>
  );
}

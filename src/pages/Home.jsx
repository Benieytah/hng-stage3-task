import { Contact, DiscountProducts, Featured, Hero, Products } from '../sections';

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Featured />
      <DiscountProducts />
      <Contact bgcolor="#EBECEF" otherStyles="mt-[140px]" />
    </div>
  )
}

export default Home
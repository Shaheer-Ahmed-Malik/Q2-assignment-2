// src/app/about-us/page.tsx
import Link from "next/link";
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';

const AboutUs = () => {
  return (
    <div style={{backgroundColor: '#f0f0f0',}}>
      <Header />
        <div>
          <h1 style={{textAlign:'center'}}>Contact Us Now!</h1>
          <p>get your services done or now get free consultancy</p>
          <ul>
            <li>Loremipsum123@email.com</li>
            <li>Ph no: 021 123443234</li>
            
          </ul>


        </div>


      <Footer />
    </div>
  );
};

export default AboutUs;

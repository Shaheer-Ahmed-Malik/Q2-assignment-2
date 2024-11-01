import Header from '../components/header';
import Footer from '../components/footer';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h1>Contact Us Now!</h1>
        <p>Get your services done or get free consultancy!
          <br></br>
        </p>
          <li>Email: Loremipsum123@email.com</li>
          <li>Phone No: 021 123443234</li>
          <br>
          </br>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;


import Header from '../components/layout/Header';

const About = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">This is the About Page</h1>
      </main>
    </>
  );
};

export default About;

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};

export default AboutPage;

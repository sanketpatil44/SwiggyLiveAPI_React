import User from "./User";

const About = () => {
  return (
    <div className="  flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl py-4 ">About Page</h1>
      <p className="about-des text-xl font-semibold mb-4">
        This is the About page content.
      </p>
      <User />
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>Version 1.0</h4>
      <p>Made with ❤️ by Tushar Verma</p>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default About;

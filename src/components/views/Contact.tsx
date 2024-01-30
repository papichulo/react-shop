import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
        Contact
      </h1>
      <Link to="/">Back to start</Link>
    </div>
  );
};

export default Contact;

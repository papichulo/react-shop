import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
        About the Phone Store
      </h1>

      <button onClick={() => navigate("/")}>Go back home</button>
    </div>
  );
};

export default About;

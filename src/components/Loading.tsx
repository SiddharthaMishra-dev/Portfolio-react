import Logo from "../assets/react.svg";

const Loading = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <img src={Logo} alt="react-icon" className="loading-icon" />
      </div>
    </>
  );
};

export default Loading;

import Logo from "../assets/react.svg";

const Loading = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <img
          src="/coder-loading.webp"
          alt="react-icon"
          className="h-60 w-60"
        />
      </div>
    </>
  );
};

export default Loading;

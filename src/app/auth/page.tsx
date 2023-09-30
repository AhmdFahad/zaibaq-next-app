import Responsivenavbar from "../components/responsivenavbar";
import AuthForm from "./components/authForm";

const page = () => {
  return (
    <>
      <Responsivenavbar />
      <div className="max-w-screen-lg mx-auto 5 text-center">
        <AuthForm></AuthForm>
      </div>
    </>
  );
};

export default page;

import AuthForm from "./components/authForm";
import MyStepper from "./components/myStepper";

const page = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto 5 text-center">
        <AuthForm></AuthForm>
        <MyStepper />
      </div>
    </>
  );
};

export default page;

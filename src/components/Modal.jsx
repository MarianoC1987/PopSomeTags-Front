import Login from "./Login";
import Register from "./Register";

function Modal() {
  const selectTab1 = document.getElementById("tab1");
  const selectTab2 = document.getElementById("tab2");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  const handleClick1 = (e) => {
    e.preventDefault();
    if (selectTab1.classList.contains("text-gray-300")) {
      selectTab1.classList.replace("text-gray-300", "text-gray-600") &&
        selectTab2.classList.replace("text-gray-600", "text-gray-300");
    }
    showLogin();
  };

  const handleClick2 = () => {
    if (selectTab2.classList.contains("text-gray-300")) {
      selectTab2.classList.replace("text-gray-300", "text-gray-600") &&
        selectTab1.classList.replace("text-gray-600", "text-gray-300");
    }
    showRegister();
  };

  const showLogin = () => {
    registerForm.classList.add("hidden");
    if (loginForm.classList.contains("hidden")) {
      loginForm.classList.remove("hidden");
    }
  };

  const showRegister = () => {
    loginForm.classList.add("hidden");
    if (registerForm.classList.contains("hidden")) {
      registerForm.classList.remove("hidden");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center rounded border-black w-full px-6 py-12 h-100 lg:px-8 bg-white ">
      <div className="sm:mx-auto flex justify-between sm:w-full sm:max-w-sm ">
        <h2
          id="tab1"
          className="mt-10 text-6 font-bold leading-9 tracking-tight text-gray-600 underline-offset-8 underline decoration-6"
          onClick={handleClick1}
        >
          Iniciar sesión
        </h2>
        <h2
          id="tab2"
          className="mt-10 text-6 font-bold leading-9 tracking-tight text-gray-300 underline-offset-8 underline decoration-6"
          onClick={handleClick2}
        >
          Registrarse
        </h2>
      </div>
      <Login />
      <Register />
    </div>
  );
}
export default Modal;

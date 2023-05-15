import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div id="loginForm" className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            for="email"
            className="flex text-xs font-small leading-6 text-gray-400"
          >
            Correo electrónico
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div>
          <div className="flex ">
            <label
              for="password"
              className="flex text-xs font-small text-gray-400"
            >
              Contraseña
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("password", { required: true })}
            />
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="flex text-xs font-small text-gray-400 hover:text-indigo-500"
            >
              ¿Has olvidado tu contraseña?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
    /* </div> */
  );
}
export default Login;

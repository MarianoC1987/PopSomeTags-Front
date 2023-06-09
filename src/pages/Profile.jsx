import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  searchUserById,
  getAllUsers,
  editUserInfo,
  deleteUser,
} from "../api/Rule_users";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowUsers from "../components/ShowUsers";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

function Profile() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUserDetails = async (user) => {
    await searchUserById(user)
      .then((result) => {
        setUserDetails(result);
      })
      .catch((error) => {
        swal({ text: error, icon: "error" });
      });
  };

  const getAllList = async () => {
    await getAllUsers()
      .then((result) => {
        setAllUsers(result);
      })
      .catch((error) => {
        swal({ text: error, icon: "error" });
      });
  };

  const onSubmit = async (data) => {
    if (data != undefined) {
      await editUserInfo(id, data)
        .then((respuesta) => {
          //window.location.reload();
          swal({ text: respuesta.message, icon: "success", buttons: "OK" });
        })
        .catch((error) => {
          swal("lhorror", { icon: "error" });
        });
    } else {
      swal("Ha ocurrido un error", { icon: "error" });
    }
  };

  const confirmDelete = (id) => {
    swal("Seguro que quieres eliminar tu cuenta?", {
      icon: "warning",
      buttons: ["Si", "No"],
    })
      .then((willNotDelete) => {
        if (!willNotDelete) {
          deleteTargetUser(id);
        }
      })
      .catch(() => {
        swal("Ha ocurrido un error", {
          icon: "error",
        });
      });
  };

  const deleteTargetUser = async (id) => {
    await deleteUser(id)
      .then((result) => {
        localStorage.removeItem("token");
        swal("Tu cuenta se ha eliminado correctamente", {
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        swal({ text: error, icon: "error" });
      });
  };

  useEffect(() => {
    getUserDetails(id);
  }, []);

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Hola, {userDetails?.nombre}</h1>
        <section>
          <p>TU INFO</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nombre de usuario</label>
              <input
                id="userName"
                disabled
                type="text"
                defaultValue={userDetails?.nombre}
                {...register("nombre")}
              />
              <button
                type="button"
                onClick={() => {
                  const userInputs = document.getElementById("userName");
                  userInputs.removeAttribute("disabled");
                }}
              >
                Editar
              </button>
            </div>
            <div>
              <label>Correo electronico:</label>
              <input
                id="userEmail"
                disabled
                type="email"
                defaultValue={userDetails?.email}
                {...register("email")}
              />
              <button
                type="button"
                onClick={() => {
                  const userInputs = document.getElementById("userEmail");
                  userInputs.removeAttribute("disabled");
                }}
              >
                Editar
              </button>
            </div>
            <div>
              <label>Telefono</label>
              <input
                id="userTel"
                disabled
                type="tel"
                defaultValue={userDetails?.telefono}
                {...register("telefono")}
              />
              <button
                type="button"
                onClick={() => {
                  const userInputs = document.getElementById("userTel");
                  userInputs.removeAttribute("disabled");
                }}
              >
                Editar
              </button>
            </div>
            <div>
              <button type="submit">Guardar cambios</button>
            </div>
          </form>
          <button
            type="button"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reestablecer info
          </button>
          <button
            type="button"
            onClick={() => {
              confirmDelete(id);
            }}
          >
            Eliminar cuenta
          </button>
        </section>
        <section>
          {/* {userDetails?.perfil != "1" ? (
            <p>"Debes ser administrador para ver esta informacion"</p>
          ) : (
            <ShowUsers allUsers={allUsers} />
          )} */}
          {userDetails?.perfil == "1" && <ShowUsers allUsers={allUsers} />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;

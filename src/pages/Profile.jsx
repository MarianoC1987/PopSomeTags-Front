import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchUserById, getAllUsers } from "../api/Rule_users";
import Footer from "../components/Footer";
import Header from "../components/header";
import ShowUsers from "../components/ShowUsers";

function Profile() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const [allUsers, setAllUsers] = useState([]);

  const getUserDetails = async (user) => {
    await searchUserById(user).then((result) => {
      setUserDetails(result);
    }); /* 
      .cath((error) => {
        console.log(error);
      }); */
  };

  const getAllList = async () => {
    await getAllUsers().then((result) => {
      setAllUsers(result);
    });
    /* .cath((error) => {
        console.log(error);
      }); */
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
          <form>
            <div>
              <label>Nombre de usuario</label>
              <input
                id="userName"
                disabled
                type="text"
                defaultValue={userDetails?.nombre}
              />
              <button
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
              />
              <button
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
              />
              <button
                onClick={() => {
                  const userInputs = document.getElementById("userTel");
                  userInputs.removeAttribute("disabled");
                }}
              >
                Editar
              </button>
            </div>

            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Reestablecer info
            </button>
            <button type="submit">Guardar cambios</button>
          </form>
        </section>
        <section>
          {userDetails?.perfil != "1" ? (
            <p>"Debes ser administrador para ver esta informacion"</p>
          ) : (
            <ShowUsers allUsers={allUsers} />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;

import { useState } from "react";
import "./showUsers.css";
import { deleteUser, editUserInfo } from "../api/Rule_users";
import swal from "sweetalert";

function ShowUsers(props) {
  const [newUserProfile, setNewUserProfile] = useState({});

  const handleNewUserProfile = (e) => {
    setNewUserProfile({ perfil: e.target.value });
  };

  const confirmDelete = (id) => {
    //id es el item.usuarioId que le paso en el onClick del bton eliminar

    swal("Seguro que quieres eliminar este usuario?", {
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
        swal("El usuario se ha eliminado correctamente", {
          icon: "success",
          buttons: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })

      .catch((error) => {
        swal("Ha ocurrido un error", { icon: "error" });
      });
  };

  const changeProfile = async (id) => {
    if (newUserProfile != undefined) {
      await editUserInfo(id, newUserProfile)
        .then((respuesta) => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          swal({ text: respuesta.message, icon: "success", buttons: "OK" });
        })
        .catch((error) => {
          swal("error", { text: error, icon: "error" });
        });
    } else {
      swal("Ha ocurrido un error", { icon: "error" });
    }
  };

  return (
    <>
      <p>Esta es la lista de todos los usuarios</p>
      <div className="profile-container">
        <p>Nombre de usuario</p>
        <p>Correo electronico</p>
        <p>Telefono</p>
        <p>Rol de usuario</p>
      </div>

      {props.allUsers.map((item) => (
        <div className="profile-container" key={item.usuarioId}>
          <p>{item.nombre}</p>
          <p>{item.email}</p>
          <p>{item.telefono}</p>
          <select
            defaultValue={item.perfil == 1 ? "1" : "2"}
            onChange={handleNewUserProfile}
          >
            <option value="1">ADMIN</option>
            <option value="2">USER</option>
          </select>
          <button
            type="button"
            onClick={() => {
              changeProfile(item.usuarioId);
            }}
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={() => {
              confirmDelete(item.usuarioId);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
}

export default ShowUsers;

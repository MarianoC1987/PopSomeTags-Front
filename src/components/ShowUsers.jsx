import "./showUsers.css";

function ShowUsers(props) {
  return (
    <>
      <p>Esta es la lista de todos los usuarios</p>

      {props.allUsers.map((item) => (
        <div className="profile-container">
          <p>{item.nombre}</p>
          <p>{item.email}</p>
          <p>{item.telefono}</p>
          <p>{item.perfil}</p>
        </div>
      ))}
    </>
  );
}

export default ShowUsers;

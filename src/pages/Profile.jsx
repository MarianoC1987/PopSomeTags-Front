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
        <div>
          {userDetails?.perfil != "1" ? (
            <p>"Debes ser administrador para ver esta informacion"</p>
          ) : (
            <ShowUsers allUsers={allUsers} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;

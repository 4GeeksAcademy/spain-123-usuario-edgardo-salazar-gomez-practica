import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";

export const Contact = () => {

  const [contacts, setContacts] = useState([]);

  // Cargar contactos desde API
  const getContacts = async () => {
    try {
      const res = await fetch(
        "https://playground.4geeks.com/contact/agendas/contacto_familia/contacts"
      );
      const data = await res.json();

      console.log("DATA", data);

       
      
      setContacts(data.contacts );

    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Eliminar contacto
  const deleteContact = async (id) => {
    const confirmDelete = confirm("¿Seguro que deseas eliminar este contacto?");
    if (!confirmDelete) return;

    try {
      await fetch(
        `https://playground.4geeks.com/contact/agendas/contacto_familia/contacts/${id}`,
        { method: "DELETE" }
      );
      getContacts(); // refrescar lista
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-dark">Contact List</h1>

        <Link to="/add-contact" className="btn btn-success">
          Add new contact
        </Link>
      </div>

      {contacts.map((c) => (
        <ContactCard key={c.id} contact={c} onDelete={deleteContact} />
      ))}
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";


export const ContactCard = ({ contact, onDelete }) => {
  
   return (
    <div className="row border rounded p-3 mb-3 shadow-sm align-items-center">

      <div className="col-3 col-md-2">
        <img
          src="https://randomuser.me/api/portraits/men/36.jpg"
          className="img-fluid rounded-circle"
          alt="profile"
        />
      </div>

      <div className="col-7 col-md-8">
        <h5 className="mb-1">{contact.name}</h5>
        <p className="mb-1 text-muted">
          <i className="fas fa-envelope me-2"></i> {contact.email}
        </p>
        <p className="mb-1 text-muted">
          <i className="fas fa-phone me-2"></i> {contact.phone}
        </p>
        <p className="mb-0 text-muted">
          <i className="fas fa-map-marker-alt me-2"></i> {contact.address}
        </p>
      </div>

      <div className="col-2 text-end">
        <Link to={`/edit-contact/${contact.id}`}>
          <i className="fas fa-pencil-alt text-primary me-3"></i>
        </Link>

        <span onClick={() => onDelete(contact.id)} style={{ cursor: "pointer" }}>
          <i className="fas fa-trash text-danger"></i>
        </span>
      </div>

    </div>
  );
};

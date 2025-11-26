// Import necessary components and functions from react-router-dom.

import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import { Layout } from "./pages/Layout.jsx";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";
import { ContactCard } from "./components/ContactCard.jsx";
import { AddContact } from "./pages/AddContact.jsx";


export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    
      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/edit-contact/:id" element={<AddContact/>} />
        <Route path= "/add-contact" element={<AddContact/>} />
        </Route>

    )
);
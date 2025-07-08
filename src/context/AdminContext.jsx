import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create context
const AdminContext = createContext();

// Custom hook to use context
export const useAdmin = () => useContext(AdminContext);

// Base URL (adjust if needed)
const API = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

const AdminProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [partners, setPartners] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  // ======================
  // === GET FUNCTIONS ====
  // ======================
  const fetchClients = async () => {
    try {
      const res = await axios.get(`${API}/clients`);
      setClients(res.data);
    } catch (err) {
      console.error("Error fetching clients:", err);
    }
  };

  const fetchPartners = async () => {
    try {
      const res = await axios.get(`${API}/partners`);
      setPartners(res.data);
    } catch (err) {
      console.error("Error fetching partners:", err);
    }
  };

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${API}/gallery`);
      setGallery(res.data);
    } catch (err) {
      console.error("Error fetching gallery:", err);
    }
  };

  const fetchCollections = async () => {
    try {
      const res = await axios.get(`${API}/collections`);
      setCollections(res.data);
    } catch (err) {
      console.error("Error fetching collections:", err);
    }
  };

  // ======================
  // === POST FUNCTIONS ===
  // ======================
  const addClient = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/clients`, formData);
      fetchClients(); // Refresh
      return res.data;
    } catch (err) {
      console.error("Error adding client:", err);
    } finally {
      setLoading(false);
    }
  };

  const addPartner = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/partners`, formData);
      fetchPartners();
      return res.data;
    } catch (err) {
      console.error("Error adding partner:", err);
    } finally {
      setLoading(false);
    }
  };

  const addGalleryItem = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/gallery`, formData);
      fetchGallery();
      return res.data;
    } catch (err) {
      console.error("Error adding gallery item:", err);
    } finally {
      setLoading(false);
    }
  };

  const addCollection = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${API}/collections`, formData);
      fetchCollections();
      return res.data;
    } catch (err) {
      console.error("Error adding collection:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
    fetchPartners();
    fetchGallery();
    fetchCollections();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        clients,
        partners,
        gallery,
        collections,
        loading,
        addClient,
        addPartner,
        addGalleryItem,
        addCollection,
        fetchClients,
        fetchPartners,
        fetchGallery,
        fetchCollections,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;

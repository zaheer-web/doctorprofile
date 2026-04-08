import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function DoctorRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "doctor") {
    return <h1>Access Denied ❌</h1>;
  }

  return children;
}
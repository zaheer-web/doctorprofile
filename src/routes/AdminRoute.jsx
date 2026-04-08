import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AdminRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "admin") {
    return <h1>Access Denied ❌</h1>;
  }

  return children;
}
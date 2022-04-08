import type { NextPage } from "next";
import dynamic from "next/dynamic";

const AdminLogin = dynamic(() => import("../../src/Views/Admin/Login"));

const AdminLoginFunc: NextPage = () => <AdminLogin />;

export default AdminLoginFunc;

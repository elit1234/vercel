import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLogin = dynamic(() => import("../../src/Views/Admin/Login"));

const AdminLoginFunc: NextPage = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.user.username);

  useEffect(() => {
    if (user) router.push("/admin/home");
  }, [user]);
  if (!user) return <AdminLogin />;
  else return null;
};

export default AdminLoginFunc;

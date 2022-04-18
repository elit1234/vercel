import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminHome = dynamic(() => import("../../src/Views/Admin/Home"));

const AdminHomeFunc: NextPage = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.user.username);

  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);

  if (user) return <AdminHome />;
  else return null;
};

export default AdminHomeFunc;

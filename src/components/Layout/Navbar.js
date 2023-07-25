import auth from "@/firebase/firebase.auth";
import { Layout, Menu, Button } from "antd";
import { signOut, useSession } from "next-auth/react";
const { Header } = Layout;
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
        {session?.user || user?.email ? (
          <items>
            <Button onClick={() => signOut()} type="primary" danger>
              Logout
            </Button>
          </items>
        ) : (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
      </Menu>
    </Header>
  );
};
export default Navbar;

import { Inter } from "next/font/google";
import Dashboard from "@/pages/dashboard";
import { useSession } from "next-auth/react";
import styles from "@/styles/Home.module.scss";
import SignIn from "@/pages/auth/signIn";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className={`${styles.main} ${inter.className}`}>
      {session && <Dashboard />}

      {!session && <SignIn />}
    </main>
  );
};

export default Home;

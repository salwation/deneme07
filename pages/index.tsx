import Image from "next/image";
import { Inter } from "next/font/google";
import BottomNav from "@/components/BottomNav";
import { useContext } from "react";
import { Context } from "@/components/Context";
import LandingPage from "@/components/LandingPage";
import MinePage from "@/components/MinePage";
import ReferralPage from "@/components/ReferralPage";
import FAQPage from "@/components/FAQPage";
import Reward from "./booms";

const inter = Inter({ subsets: ["latin"] });

interface ActiveContextType {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home() {
    const { active } = useContext<ActiveContextType>(Context);
    return (
        <div
            style={{
                background: "radial-gradient(circle, rgba(90, 0, 150, 0.8) 40%, rgba(0, 0, 0, 1) 100%)",
                height: '100vh',
            }}>
            {active === "Home" ? (
                <LandingPage />
            ) : active === "Mine" ? (
                <MinePage />
            ) : active === "Referrals" ? (
                <ReferralPage />
            ) : (
                // <FAQPage />
                <Reward />
            )}
            <BottomNav />
        </div>
    );
}

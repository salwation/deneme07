import { Context } from "@/components/Context";
import "@/styles/globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [active, setActive] = useState<string>("Home");
    return (
        <Context.Provider value={{ active, setActive }}>
            <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
                <div className="bg-white flex flex-col min-h-min ">
                    <div className="bg-[#341355] pt-[5px] rounded-t-[36px] h-full overflow-hidden">

                        <Component {...pageProps} />
                    </div>
                </div>
            </TonConnectUIProvider>
        </Context.Provider>
    );
}

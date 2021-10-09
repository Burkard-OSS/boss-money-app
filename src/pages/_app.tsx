import "../../styles/globals.css";
import type { AppProps } from "next/app";
import {version} from '../../package.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen">
      <main className="pb-2">
        <Component {...pageProps} />
      </main>
      <footer className="absolute bottom-0 w-full p-5 bg-gray-700 text-white text-center">
        <span className="text-gray-400 text-sm">
          <a href="https://github.com/Burkard-OSS/boss-money-app">
            Open Source project created for the 2021 Hacktoberfest.
          </a>
        </span>
        <span className="absolute right-2 text-xs text-gray-500">Version {version}</span>
      </footer>
    </div>
  );
}
export default MyApp;

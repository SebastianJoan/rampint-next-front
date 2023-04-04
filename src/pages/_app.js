import '../css/global.css';
import { AuthProvider } from "@/contexts";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
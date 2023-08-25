import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import globalStyles from "~/styles/globalStyles";

const MyApp: AppType = ({ Component, pageProps }) => {
  globalStyles();
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);

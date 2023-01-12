import "../styles/globals.css";
import { AppPropsWithLayout } from "types/layout";
import { LayoutWithHeaderAndFooter } from "web/layouts/with-header-and-footer";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	return (
		<LayoutWithHeaderAndFooter>
			<Component {...pageProps} />
		</LayoutWithHeaderAndFooter>
	);
};

export default App;

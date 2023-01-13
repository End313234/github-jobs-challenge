import { LayoutWithChildren } from "types/layout";
import { Footer } from "web/components/footer";
import { Header } from "web/components/header";

export const LayoutWithHeaderAndFooter: LayoutWithChildren = ({ children }) => {
	return (
		<>
			<Header />
			<main className="my-10">{children}</main>
			<Footer />
		</>
	);
};

import { FC } from "react";

export const Header: FC = () => {
	return (
		<header>
			<h1 className="flex gap-1">
				Github
				{" "}
				<p className="text-2xl font-light text-blue-900">Jobs</p>
			</h1>
		</header>
	);
};

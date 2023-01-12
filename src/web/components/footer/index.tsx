import { FC } from "react";

export const Footer: FC = () => {
	return (
		<footer className="flex items-end justify-center">
			<p className="text-sm text-gray-300">
				created by
				{" "}
				<a
					href="https://github.com/End313234"
					target="_blank"
					rel="noreferrer"
					className="underline font-bold"
				>
					End313234
				</a>
				{" "}
				- devChallenges.io
			</p>
		</footer>
	);
};

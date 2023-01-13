import { FC, useState } from "react";
import { BriefcaseIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline"
import places from "data/places.json"
import { Place } from "types/place";
import { RadioGroupForPlaces } from "web/components/radio-group";

export const Home: FC = () => {
	const [selectedPlace, setSelectedPlace] = useState<Place>(places[0])

	return (
		<>
			<section className="flex h-full items-center justify-center bg-buildings-pattern bg-cover py-[72px] rounded-md">
				<span>
					<BriefcaseIcon className="icon relative left-10 text-gray-300 z-20" />
				</span>
				<div className="group flex items-center justify-center">
					<input
						type="text"
						className="py-3 text-sm rounded-r-none px-12 z-10 w-full md:py-5 md:text-base"
						placeholder="Title, companies, expertise or benefits"
					/>
					<div className="bg-white py-1 rounded-r-md pr-1 mr-4 group-focus:ring-2 group-focus:ring-blue-500 group-focus:outline-none md:mr-0">
						<button>
							Search
						</button>
					</div>
				</div>
			</section>
			<section className="mt-10">
				<div className="flex flex-col gap-6">
					<div className="flex gap-2 items-center">
						<input type="checkbox" name="full-time" />
						<label htmlFor="full-time" className="text-blue-800 font-medium">Full time</label>
					</div>
					<div>
						<h3 className="uppercase text-gray-300">location</h3>
						<div>
							<span>
								<GlobeAmericasIcon className="icon m-0 text-gray-300 z-20 relative top-[2.3rem] left-4" />
							</span>
							<input
								type="text"
								placeholder="City, state, zip code or country"
								className="py-4 shadow-md pr-0 w-full max-w-xl pl-11 z-10 md:w-1/3"
							/>
						</div>
						<div className="mt-6">
							<RadioGroupForPlaces selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

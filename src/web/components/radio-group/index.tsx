import { Dispatch, FC, SetStateAction } from "react";
import { Place } from "types/place";
import { RadioGroup } from "@headlessui/react";
import places from "data/places.json";

interface RadioGroupForPlacesProps {
	selectedPlace: Place;
	setSelectedPlace: Dispatch<SetStateAction<Place>>;
}

export const RadioGroupForPlaces: FC<RadioGroupForPlacesProps> = ({ selectedPlace, setSelectedPlace }) => {
	return (
		<RadioGroup value={selectedPlace} onChange={setSelectedPlace}>
			<RadioGroup.Label className="sr-only">Places</RadioGroup.Label>
			<div className="flex flex-col gap-2">
				{
					places.map(({ name, label }) => (
						<RadioGroup.Option
							key={label}
							value={name}
						>
							{({ active, checked }) => (
								<div className="flex items-center gap-2">
									<div className={`rounded-full flex items-center justify-center border w-4 h-4 ${checked ? "border-blue-500" : "border-gray-300"}`}>
										<div className={` w-3 h-3 rounded-full transition-all ${checked ? "bg-blue-500" : "bg-transparent"}`} />
									</div>
									<p className="font-medium ">{name}</p>
								</div>
							)}
						</RadioGroup.Option>
					))
				}
			</div>
		</RadioGroup>
	);
}

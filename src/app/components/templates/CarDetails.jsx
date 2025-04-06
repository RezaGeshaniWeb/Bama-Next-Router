import Calender from "../icons/Calender";
import Company from "../icons/Company";
import Location from "../icons/Location";
import Model from "../icons/Model";
import Money from "../icons/Money";
import Road from "../icons/Road";

export default function CarDetails({ name, model, year, distance, location, image, price, description }) {
  return (
    <div className="max-w-[900px] mx-auto flex flex-col my-5 py-5">
      <img src={image} alt={name} className="w-full rounded-md" />
      <h3 className="mt-10 mb-5 text-2xl">{`${name} ${model}`}</h3>

      <div className="w-full shadow py-2.5 px-5 my-3.5 *:flex *:items-center *:my-4">
        <div>
          <Company />
          <p className="ml-2.5">Company</p>
          <span className="text-gray-600 ml-auto">{name}</span>
        </div>
        <div>
          <Model />
          <p className="ml-2.5">Model</p>
          <span className="text-gray-600 ml-auto">{model}</span>
        </div>
        <div>
          <Calender />
          <p className="ml-2.5">First registration</p>
          <span className="text-gray-600 ml-auto">{year}</span>
        </div>
        <div>
          <Road />
          <p className="ml-2.5">kms driven</p>
          <span className="text-gray-600 ml-auto">{distance}</span>
        </div>
      </div>

      <div className="w-full shadow py-2.5 px-5 my-3.5 *:flex *:items-center *:my-4">
        <div>
          <Location />
          <p className="ml-2.5">Location</p>
          <span className="text-gray-600 ml-auto">{location}</span>
        </div>
      </div>

      <div className="w-full shadow py-2.5 px-5 my-3.5">
        <p className="my-4 text-xl font-bold">Extra Information</p>
        <p className="text-gray-500 text-justify mb-2.5">{description}</p>
      </div>

      <div className="w-full shadow py-2.5 px-5 my-3.5">
        <div className="flex items-center">
          <Money />
          <p className="text-2xl ml-2.5">Price</p>
          <span className="text-2xl ml-auto">{price}</span>
        </div>
      </div>

      <button className="bg-[#befa00] border-none text-2xl p-2.5 rounded-md my-12 cursor-pointer">Buy</button>
    </div>
  )
}
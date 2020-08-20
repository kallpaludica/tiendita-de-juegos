import React, { useState, useEffect } from "react"

const bands = [
  {
    id: 1,
    name: "Nightwish",
    albums: 9,
    members: 6,
    formed_in: 1996,
    location: {
      city: "Berlin",
      town: "Cologne",
    },
  },
  {
    id: 2,
    name: "Metallica",
    albums: 10,
    members: 4,
    formed_in: 1981,
    location: {
      city: "Austin",
      town: "San",
    },
  },
  {
    id: 3,
    name: "Nirvana",
    albums: 3,
    members: 3,
    formed_in: 1987,
    location: {
      city: "Seattle",
      town: "Aberdin",
    },
  },
]

const Sorting = () => {
  const [data, setData] = useState([])
  const [sortType, setSortType] = useState("members")
  const [bandName, setBandName] = useState("")

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        albums: "albums",
        members: "members",
        formed: "formed_in",
        location: "location",
      }
      const sortProperty = types[type]
      //const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);

      const sorted = [...bands].sort((a, b) => {
        if (sortProperty === "location") {
          return a.location.city.localeCompare(b.location.city)
        } else {
          return b[sortProperty] - a[sortProperty]
        }
      })
      setData(sorted)
    }

    sortArray(sortType)
  }, [sortType])

  return (
    <div className="m-6 mt-24">
      <div>
        <select onChange={(e) => setSortType(e.target.value)} className="ml-3">
          <option value="albums">Albums</option>
          <option value="members">Members</option>
          <option value="formed">Formed in</option>
          <option value="location">Location</option>
        </select>

        <input
          onChange={(e) => setBandName(e.target.value)}
          value={bandName}
          className="ml-3"
        />
      </div>

      <div className="flex flex-col mx-3 mt-12">
        {data
          .filter(
            (word) =>
              word.name.toLowerCase().indexOf(bandName.toLowerCase()) !== -1
          )
          .map((band) => (
            <div
              key={band.id}
              className="flex justify-start px-3 py-1 my-2 font-serif font-bold text-left text-green-800 bg-white "
            >
              <div className="flex-1">{`Band: ${band.name}`}</div>
              <div className="flex-1">{`Albums: ${band.albums}`}</div>
              <div className="flex-1">{`Members: ${band.members}`}</div>
              <div className="flex-1">{`Year of founding: ${band.formed_in}`}</div>
              <div className="flex-1">{`Location - city: ${band.location.city}`}</div>
              <div className="flex-1">{`Location - town: ${band.location.town}`}</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Sorting

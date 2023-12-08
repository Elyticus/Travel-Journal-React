import { TravelJournal } from "../TravelJournal/TravelJournal";

export function TravelList() {
  const travelList = [
    {
      id: 0,
      img: "public/images/Singapore.jpg",
      destination: "Singapore",
      date: "04.09.2020",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Ea dignissimos magni in tenetur.`,
    },

    {
      id: 1,
      img: "public/images/Carousel.jpg",
      destination: "Bruxel",
      date: "23.07.2022",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Ea dignissimos magni in tenetur.`,
    },

    {
      id: 2,
      img: "public/images/London.jpg",
      destination: "London",
      date: "15.04.2018",
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Ea dignissimos magni in tenetur.`,
    },
  ];

  return (
    <>
      <div className="wrapper">
        {travelList.map((item) => {
          return (
            <TravelJournal
              key={item.id}
              img={item.img}
              destination={item.destination}
              date={item.date}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
}

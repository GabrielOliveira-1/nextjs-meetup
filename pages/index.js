//import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg/1280px-View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg",
    address: " 555 Street, 54321 Toronto",
    description: "First meetup location!",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg/1280px-View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg",
    address: " 243 Street, 57891 Toronto",
    description: "Second meetup location!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;

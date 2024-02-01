import { Fragment } from "react";
import { Head } from "react";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg/1280px-View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg",
//     address: " 555 Street, 54321 Toronto",
//     description: "First meetup location!",
//   },
//   {
//     id: "m2",
//     title: "Second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg/1280px-View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg",
//     address: " 243 Street, 57891 Toronto",
//     description: "Second meetup location!",
//   },
// ];

function HomePage(props) {
  return (
  <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta
        name="description"
        content="browse through a list of meetups app built using react and next.js"
        />
    </Head>
    <MeetupList meetups={props.meetups} />;
  </Fragment>
  )
  
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://gabrieldoliveira1:P455WordForMongoDBData@!@cluster0.mkudrv5.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

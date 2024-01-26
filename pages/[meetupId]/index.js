import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg/1280px-View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg"
      title="First Meetup"
      address="123 Street, Toronto"
      description="Description for the first meetup event"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg/1280px-View_from_George_Brown_College%27s_Rooftop_Patio_-_panoramio.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "123 Street, Toronto",
        description: "Description for the first meetup event",
      },
    },
  };
}

export default MeetupDetails;

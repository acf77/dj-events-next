import { Layout } from "@/components/Layout";

import { API_URL } from "../config";

export const HomePage = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming events</h1>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
};

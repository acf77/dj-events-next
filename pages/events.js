import Link from "next/link";
import Layout from "@/components/Layout";

export const EventsPage = () => {
  return (
    <Layout title="Events | DJ Events">
      <h1>Events</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default EventsPage;

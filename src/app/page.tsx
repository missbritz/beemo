import client from "@/utils/apollo-client";
import ProfileComponent from "@/components/profile";
import BodyComponent from "@/components/body";
import { getMyProfile } from '@/queries/my-profile';
import { getLatestFivePosts, getAllPosts } from "../queries/posts";
import PageWrapper from "@/components/page-wrapper";

async function Home() {
  try {
    const posts = await client.query({
      query: getLatestFivePosts
    });

    const profile = await client.query({
      query: getMyProfile
    });

    return (
      <PageWrapper profile={profile}>
        <div id="about" className="pt-8">
          {profile?.data?.myProfile?.data && <ProfileComponent profile={profile.data.myProfile.data}/>}
        </div>
        <div id="talk">
          <hr className="my-8 border-b border-solid border-slate-800"/>
          <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">Notes</h2>
          {posts?.data?.posts?.data && <BodyComponent posts={posts?.data?.posts?.data} noReadMoreBtn={false}/>}
        </div>
      </PageWrapper>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="p-4">
        <h1 className="text-red-500">Error loading data</h1>
        <pre className="mt-4 p-4 bg-gray-100 rounded">
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Home    
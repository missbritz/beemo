import client from "../../utils/apollo-client";
import { gql } from "@apollo/client";
import FooterComponent from '@/app/components/footer';
import TopBarComponent from '@/app/components/topbar';

async function SlugLayout({ children } : any) {

  const posts = await client.query({
    query: gql`
        query{
            posts {
                data {
                    id
                    attributes {
                        Title
                        Published
                        Content
                        Category
                        Summary
                        Slug
                    }
                }
            }
        }
    `
  })

  const profile = await client.query({
    query: gql`
        query{
          myProfile {
            data {
              id
              attributes {
                MainTitle
                MyIntro
                SocialMediaLinks {
                  Label
                  Url
                }
                KitIcons {
                  Label
                  Url
                }
              }
            }
          }
        }
    `
  })

  return (
    <div className="px-8 flex flex-col justify-center items-center min-h-screen">
      <main className="max-w-5xl md:w-7/12 sm:w-full">
          {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-14rem)] pb-8 scroll-smooth">
            <div className="my-8">
              {children}
            </div>
          </section>
          <FooterComponent/>
      </main>
    </div>
  )
}

export default SlugLayout
import { Metadata } from "next";
import { Navbar1 } from "@/components/navbar";

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const { username } = params
  return {
    title: `${username} - Find Your Dream Car | Best Car Sales`,
    description: `${username} - Find the best car deals and professional consultation to get your dream vehicle today!`,
    keywords: "car sales, buy car, best cars, luxury cars, new cars, used cars",
    authors: [{ name: "iniaga.id" }],
    openGraph: {
      title: `${username} - Find Your Dream Car | Best Car Sales`,
      description: `${username} - Find the best car deals and professional consultation to get your dream vehicle today!`,
      images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
      url: "https://yourwebsite.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${username} - Find Your Dream Car | Best Car Sales`,
      description: `${username} - Find the best car deals and professional consultation to get your dream vehicle today!`,
      images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
    },
  };
}

export default async function UserLayout({ children, params }: { children: React.ReactNode, params: { username: string }  }) {
  const { username } = params
  return <>
    <Navbar1 logoString={username} />
    {children}
  </>;
}

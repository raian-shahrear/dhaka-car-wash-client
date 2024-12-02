import { useAppSelector } from "@/redux/hooks";
import HomeFeatured from "./HomeFeatured";
import HomeHero from "./HomeHero";
import HomeReview from "./HomeReview";
import { verifyToken } from "@/utils/verifyToken";
import { TUser } from "@/types";

const Home = () => {
  const { token } = useAppSelector((state) => state.auth);
  let user;
  if (token) {
    user = verifyToken(token);
  }
  return (
    <div className="lg:pt-[74px] min-h-[67vh]">
      <HomeHero />
      <HomeFeatured />
      <HomeReview user={user as TUser} />
    </div>
  );
};

export default Home;

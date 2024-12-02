import { ourTeam } from "./aboutUs.const";

const AboutUsTeam = () => {
  return (
    <section className="pt-10 mb-10">
      <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
        Met Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {ourTeam?.map((team) => (
          <div key={team?._id} className="shadow-lg rounded-md">
            <div>
              <img
                src={team?.img}
                alt="team"
                className="w-full object-cover object-center rounded-tl-md rounded-tr-md"
              />
            </div>
            <div className="p-3">
              <p className="font-bold text-gray-900">{team?.name}</p>
              <p className="font-semibold text-sm text-gray-500 mb-2">
                {team?.designation}
              </p>
              <p className="text-sm text-gray-900">{team?.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsTeam;

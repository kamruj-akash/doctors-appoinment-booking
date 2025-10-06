import Banner from "../Components/Banner";
import Container from "../Components/Container";
import DoctorCard from "../Components/DoctorCard";
import { useDrList } from "../Hooks/useDrList";

const Home = () => {
  const [drData, loading, error] = useDrList();
  console.log(drData);

  return (
    <Container>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {drData.map((doctor) => (
          <DoctorCard doctor={doctor} />
        ))}
      </div>
    </Container>
  );
};

export default Home;

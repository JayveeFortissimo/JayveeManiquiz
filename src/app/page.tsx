import Header from "@/components/section/Header";
import FirstLayer from "@/components/section/FirstLayer";
import SecondLayer from "@/components/section/SecondLayer";
import Container from "@/components/common/Container";

export default function Home() {
  return (
 <Container>
 <Header
 name="Jayvee Maniquiz"
 location="Bulacan, Philippines"
 profession="Full-Stack Web Developer"
 image="/image/Profile.png"
 />
 <FirstLayer/>
 <SecondLayer/>
 </Container>
  );
}

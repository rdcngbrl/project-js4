import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Container,
  MainBanner,
  BannerText,
  MembershipSection,
  SectionTitle,
  SectionDescription,
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  Button,
  ActivitiesSection
} from './HomePageStyled';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToAbonamente = () => {
    navigate('/abonament');
  };

  const handleNavigateToActivitati = () => {
    navigate('/activitati');
  };

  return (
    <Container>
      {/* Main Banner */}
      <MainBanner>
        <BannerText>Bine ați venit la React Fit</BannerText>
      </MainBanner>

      {/* Membership Section */}
      <MembershipSection>
        <SectionTitle>Descoperă Abonamentele Noastre</SectionTitle>
        <SectionDescription>
          Alege din varietatea noastră de planuri care îți oferă acces la diverse activități.
        </SectionDescription>
        <CardContainer>
          <Card>
            <CardTitle>Bronze</CardTitle>
            <CardDescription>
              Acces la Fitness, Pilates, și Aerobic.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Silver</CardTitle>
            <CardDescription>
              Acces la Fitness, Pilates, Aerobic, și Piscină.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Gold</CardTitle>
            <CardDescription>
              Acces la Fitness, Pilates, Aerobic, Piscină, Sauna, și Masaj.
            </CardDescription>
          </Card>
        </CardContainer>
        <Button onClick={handleNavigateToAbonamente}>Către Abonamente</Button>
      </MembershipSection>

      {/* Activities Section */}
      <ActivitiesSection>
        <SectionTitle>Activitățile Noastre</SectionTitle>
        <SectionDescription>
          Explorează activitățile pe care le oferim pentru a te menține în formă și sănătos.
        </SectionDescription>
        <CardContainer>
          <Card>
            <CardTitle>Fitness</CardTitle>
            <CardDescription>
              Echipamente de ultimă generație și antrenori experți.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Aerobic</CardTitle>
            <CardDescription>
              Clase energice și distractive pentru a te menține în formă.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Pilates</CardTitle>
            <CardDescription>
              Întărește-ți core-ul și îmbunătățește-ți flexibilitatea.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Masaj</CardTitle>
            <CardDescription>
              Relaxează-te și revigorează-te cu ajutorul masorilor noștri profesioniști.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Sauna</CardTitle>
            <CardDescription>
              Detoxifică și relaxează-te în sauna noastră modernă.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Piscină</CardTitle>
            <CardDescription>
              Bucură-te de piscina noastră interioară încălzită pentru un antrenament excelent.
            </CardDescription>
          </Card>
        </CardContainer>
        <Button onClick={handleNavigateToActivitati}>Către Activități</Button>
      </ActivitiesSection>
    </Container>
  );
};

export default HomePage;





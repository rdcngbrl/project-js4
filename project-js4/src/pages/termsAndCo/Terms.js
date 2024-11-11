import React from 'react';
import { Container, Content, Title, SectionTitle, Paragraph } from './TermsStyled';

const Terms = () => {
  return (
    <Container>
      <Content>
        <Title>Termeni și Condiții</Title>

        <SectionTitle>1. Introducere</SectionTitle>
        <Paragraph>
          Bine ați venit la React Fit. Prin accesarea și utilizarea site-ului nostru, sunteți de acord cu următorii termeni și condiții. Vă rugăm să citiți cu atenție aceste informații înainte de a utiliza serviciile noastre.
        </Paragraph>

        <SectionTitle>2. Plăți Online</SectionTitle>
        <Paragraph>
          Toate plățile pentru abonamentele noastre se fac online prin intermediul site-ului nostru. Acceptăm principalele carduri de credit și debit. Odată ce plata este procesată, veți primi un e-mail de confirmare a abonamentului. Abonamentele noastre sunt disponibile în trei variante: Bronze, Silver și Gold.
        </Paragraph>
        <Paragraph>
          <b>Abonament Bronze:</b> Acces limitat la toate facilitățile noastre.
        </Paragraph>
        <Paragraph>
          <b>Abonament Silver:</b> Acces nelimitat la toate facilitățile noastre în timpul programului de lucru.
        </Paragraph>
        <Paragraph>
          <b>Abonament Gold:</b> Acces nelimitat la toate facilitățile noastre 24/7, plus beneficii suplimentare, cum ar fi sesiuni de antrenament personalizat.
        </Paragraph>

        <SectionTitle>3. Locația Sălii</SectionTitle>
        <Paragraph>
          Sala noastră de fitness este situată pe strada React Fit nr. 1. Vă așteptăm să ne vizitați și să vă bucurați de facilitățile noastre moderne.
        </Paragraph>

        <SectionTitle>4. Politica de Anulare și Rambursare</SectionTitle>
        <Paragraph>
          Puteți anula abonamentul dumneavoastră în orice moment. Cu toate acestea, nu oferim rambursări pentru plățile efectuate. În cazul în care aveți probleme sau întrebări, vă rugăm să ne contactați la info@reactfit.com.
        </Paragraph>

        <SectionTitle>5. Utilizarea Facilităților</SectionTitle>
        <Paragraph>
          Toți membrii trebuie să respecte regulile și reglementările sălii. Este interzisă utilizarea echipamentelor în mod necorespunzător sau periculos. Vă rugăm să păstrați curățenia și să respectați ceilalți membri.
        </Paragraph>

        <SectionTitle>6. Confidențialitate</SectionTitle>
        <Paragraph>
          Respectăm confidențialitatea dumneavoastră și ne angajăm să protejăm informațiile personale pe care le colectăm. Pentru mai multe detalii, vă rugăm să consultați politica noastră de confidențialitate.
        </Paragraph>

        <SectionTitle>7. Limitarea Răspunderii</SectionTitle>
        <Paragraph>
          React Fit nu va fi responsabilă pentru niciun fel de daune directe, indirecte, incidentale sau speciale care rezultă din utilizarea sau incapacitatea de utilizare a serviciilor noastre. Utilizarea serviciilor noastre se face pe propria răspundere.
        </Paragraph>

        <SectionTitle>8. Modificarea Termenilor</SectionTitle>
        <Paragraph>
          Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Orice modificări vor fi publicate pe această pagină și vor intra în vigoare imediat. Este responsabilitatea dumneavoastră să verificați periodic acești termeni și condiții pentru a fi la curent cu eventualele schimbări.
        </Paragraph>

        <SectionTitle>9. Contact</SectionTitle>
        <Paragraph>
          Pentru orice întrebări sau probleme legate de acești termeni și condiții, vă rugăm să ne contactați la info@reactfit.com.
        </Paragraph>
      </Content>
    </Container>
  );
};

export default Terms;

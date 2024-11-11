import React from 'react';
import { 
  Container,
  MainBanner,
  BannerText,
  BannerDescription,
  BannerButton,
  ActivityDetailCard,
  ActivityTitle,
  ActivityDescription 
} from './ActivitatiStyled';

const Activitati = () => {
  
    return (
      <Container>
        
        <MainBanner>
          <BannerText>Serviciile Noastre Premium</BannerText>
          <BannerDescription>
            Pentru a avea acces la serviciile noastre activează un abonament.
          </BannerDescription>
          <BannerButton to="/abonament">Către Abonamente</BannerButton>
        </MainBanner>
        
        <ActivityDetailCard>
          <ActivityTitle>Fitness</ActivityTitle>
          <ActivityDescription>
            Îmbunătățește-ți sănătatea și parcursul de fitness cu programul nostru de top în Fitness. Oferim echipamente de ultimă generație și antrenori cu experiență, dedicați să te ghideze spre atingerea obiectivelor tale personale de fitness. Fie că dorești să îți dezvolți forța, să îți crești rezistența sau pur și simplu să rămâi activ, planurile noastre personalizate de fitness sunt concepute pentru a se potrivi stilului tău de viață—ideal pentru acele sesiuni lungi de codare în care menținerea sănătății fizice este esențială.
          </ActivityDescription>
        </ActivityDetailCard>
        
        <ActivityDetailCard>
          <ActivityTitle>Aerobic</ActivityTitle>
          <ActivityDescription>
            Participă la sesiunile noastre de Aerobic și experimentează un mediu de antrenament plin de energie și dinamic. Clasele noastre sunt structurate pentru a te menține energizat, facilitându-ți menținerea unei performanțe mentale de vârf în timpul proiectelor de dezvoltare. Fie că ești începător sau un pasionat de fitness, instructorii noștri ajustează intensitatea pentru a se potrivi tuturor nivelurilor, asigurându-ți o modalitate distractivă și atractivă de a rămâne în formă.
          </ActivityDescription>
        </ActivityDetailCard>
        
        <ActivityDetailCard>
          <ActivityTitle>Pilates</ActivityTitle>
          <ActivityDescription>
            Îmbunătățește-ți forța de bază și flexibilitatea cu sesiunile noastre de Pilates, conduse de experți. Aceste clase sunt concepute pentru a sprijini bunăstarea ta fizică și mentală, esențială pentru a-ți menține concentrarea în timpul sesiunilor lungi de codare. Pilates este ideal pentru toate nivelurile, oferind un antrenament echilibrat care completează stilul de viață sedentar al multor dezvoltatori.
          </ActivityDescription>
        </ActivityDetailCard>
        
        <ActivityDetailCard>
          <ActivityTitle>Masaj Profesional</ActivityTitle>
          <ActivityDescription>
            Relaxează-te și reîncarcă-te cu serviciile noastre de Masaj Profesional. Terapeuții noștri calificați oferă o gamă variată de tehnici de masaj, adaptate pentru a ameliora stresul și tensiunea acumulată din cauza perioadelor prelungite petrecute la birou. Indiferent dacă dorești să te relaxezi după o sesiune lungă de codare sau ai nevoie de o ameliorare țintită a durerilor de spate și gât, masajele noastre sunt soluția perfectă pentru menținerea stării de bine fizice.
          </ActivityDescription>
        </ActivityDetailCard>
        
        <ActivityDetailCard>
          <ActivityTitle>Experiență Luxoasă la Saună</ActivityTitle>
          <ActivityDescription>
            Detoxifică-te și reîntinerește-ți corpul în sauna noastră de ultimă generație. Această terapie cu căldură este concepută pentru a relaxa mușchii, a îmbunătăți circulația și a oferi o evadare liniștită din cerințele vieții de programator. Sesiunile regulate la saună sunt cunoscute pentru îmbunătățirea bunăstării generale, fiind o adăugare ideală la rutina ta de autoîngrijire.
          </ActivityDescription>
        </ActivityDetailCard>
        
        <ActivityDetailCard>
          <ActivityTitle>Piscină Interioară Încălzită</ActivityTitle>
          <ActivityDescription>
            Bucură-te de o pauză revigorantă în Piscina noastră Interioară Încălzită, un amestec perfect de relaxare și fitness. Fie că preferi o sesiune de înot relaxantă sau un antrenament viguros, piscina noastră oferă mediul ideal pentru a-ți limpezi mintea și a-ți energiza corpul. Este o modalitate fantastică de a rămâne activ, mai ales când ai nevoie de o pauză de la ecran.
          </ActivityDescription>
        </ActivityDetailCard>
        
      </Container>
    
    
  );
};

export default Activitati;

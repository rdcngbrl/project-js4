import React,{useState} from 'react';
import { 
  Container, 
  SectionTitle, 
  GallerySection, 
  ImageCard, 
  Image,
  ImageOverlay,
  ModalOverlay, 
  ModalContent, 
  ModalImage, 
  CloseButton
} from './GalerieStyled';

const Galerie = () => {

  const [selectedImage, setSelectedImage] = useState(null);


  const activities = [
    { title: 'Fitness', images: ['https://media.istockphoto.com/id/1438034462/ro/fotografie/latino-%C8%99i-africane-sport-femeie-exercitarea-%C8%99i-de-a-construi-musculare-%C3%AEn-stadion-activ.jpg?s=612x612&w=0&k=20&c=zqFvAoy7VGYF_9NGA_EdYGLUBIP6HAtwLK1CAzMaDfw=','https://media.istockphoto.com/id/1356510492/ro/fotografie/femeie-atletic%C4%83-determinat%C4%83-care-ruleaz%C4%83-pe-banda-de-alergare-%C3%AEn-timp-ce-practica-%C3%AEntr-o.jpg?s=612x612&w=0&k=20&c=ACuDFCfZSxMxzB7HeUw-fxe4OjBXMAIERiQf85fuSUE=','https://media.istockphoto.com/id/1430943421/ro/fotografie/puternic-cuplu-de-wellness-face-kettlebell-greutate-exerci%C8%9Biu-antrenament-sau-de-formare.jpg?s=612x612&w=0&k=20&c=SACaJf6vnl_BRZSMxRKgQ4Mr_-PqoJ8L0d2ytDdguao='] },
    { title: 'Aerobic', images: ['https://media.istockphoto.com/id/1364131952/ro/fotografie/t%C3%A2n%C4%83r%C4%83-asiatic%C4%83-care-lucreaz%C4%83-la-bicicleta-de-exerci%C8%9Bii-la-sal%C4%83.jpg?s=612x612&w=0&k=20&c=4Qd6SEwLG-ogWIdSUWPHl-cvP_cCk3d3BnjbPdeb9FU=', 'https://media.istockphoto.com/id/1149242137/ro/fotografie/femeia-face-exercitii-abs-la-cursul-cardio.jpg?s=612x612&w=0&k=20&c=2DVicD_SMFVBoSRdRGdbssMFGbqGSk4vI5HigdPX4fo=', 'https://media.istockphoto.com/id/670724074/ro/fotografie/exercitarea-la-sala-de-sport.jpg?s=612x612&w=0&k=20&c=ywgjBNXBLaBtBjE-YgtXbnDIL2OZSfnFNhrNBqDrgLI='] },
    { title: 'Pilates', images: ['https://media.istockphoto.com/id/1171254686/ro/fotografie/clasa-%C3%AEntr-o-sal%C4%83-de-gimnastic%C4%83-a-face-pilates-%C3%AEn-picioare-lunges.jpg?s=612x612&w=0&k=20&c=Vl4OFOzbt3XOCrd1fIi7oO7cBhGpPD68IN_ce5vdB98=', 'https://media.istockphoto.com/id/916474944/ro/fotografie/tinere-sportive-cu-inele-de-exercitii-fizice-in-studio-de-fitness.jpg?s=612x612&w=0&k=20&c=uhgqkv26XqHrzHJ_2dlG6WqnA9vzny1x7VxBfuh1BpU=', 'https://media.istockphoto.com/id/841071996/ro/fotografie/oamenii-de-la-sala-de-sport-%C3%AEntr-o-clas%C4%83-de-exerci%C8%9Biu-folosind-mingi-de-fitness.jpg?s=612x612&w=0&k=20&c=_i2oeN9Ksrn2IkfLgra9tUstaLHjHLkUAbobbPUUmJ0='] },
    { title: 'Masaj', images: ['https://media.istockphoto.com/id/1393284404/ro/fotografie/kinetoterapeut-de-sex-masculin-oferind-masaj-sportiv-unei-femei-de-la-clubul-de-s%C4%83n%C4%83tate.jpg?s=612x612&w=0&k=20&c=Ni93AnYrTTT9P9fnVEtJzIFov7mKXXfOjjCVwog2wck=', 'https://media.istockphoto.com/id/1427910374/ro/fotografie/femeie-japonez%C4%83-care-primesc-un-masaj-talie.jpg?s=612x612&w=0&k=20&c=hAnyIOm276_AQN2lZHSYD_uhVUahmLqq33qjDotqq3A=', 'https://media.istockphoto.com/id/1302468757/ro/fotografie/masaj-terapeut-trateaz%C4%83-leziuni-de-atlet-profesionist-pacient-de-sex-masculin.jpg?s=612x612&w=0&k=20&c=SW8kZ9PUB70U5ULuRE9aRc3e39D3c-G-Lu9fZ4ZkERQ='] },
    { title: 'Saună', images: ['https://media.istockphoto.com/id/1266577031/ro/fotografie/interiorul-saunei-finlandeze-sau-al-saunei-clasice-din-lemn-relaxa%C8%9Bi-v%C4%83-%C8%99i-tratament-%C3%AEn.jpg?s=612x612&w=0&k=20&c=oMtRmtwf_OqRHSrUpln7rWI5EwhNeWtU5-LID_ffAWc=', 'https://media.istockphoto.com/id/907931396/ro/fotografie/b%C4%83rbat-care-se-relaxeaz%C4%83-%C3%AEn-saun%C4%83.jpg?s=612x612&w=0&k=20&c=X1of_mGhSec4sMK4fYgM2gzo_cD36LGoGq80EXu8b80=', 'https://media.istockphoto.com/id/1430964126/ro/fotografie/o-superb%C4%83-femeie-blond%C4%83-care-se-relaxeaz%C4%83-%C3%AEntr-o-saun%C4%83.jpg?s=612x612&w=0&k=20&c=UYOV6GB_coOd3598fjY9kHHhHiYlfD3Ppne04TjFxA0='] },
    { title: 'Piscină', images: ['https://media.istockphoto.com/id/612718480/ro/fotografie/fizioterapie-gimnastic%C4%83-cu-gantere.jpg?s=612x612&w=0&k=20&c=_XQ8WbS_gX3IalMWHotHtNFjEAhqOiIvKm5ksz-M_6g=', 'https://media.istockphoto.com/id/174945636/ro/fotografie/piscin%C4%83.jpg?s=612x612&w=0&k=20&c=gxu1_dIJxyPAaBInQ8ixEdcqN1WcAEBn8XR3mQ7nghc=', 'https://media.istockphoto.com/id/1227320621/ro/fotografie/cursa-de-%C3%AEnot-pentru-prieteni.jpg?s=612x612&w=0&k=20&c=lrp4edp-U3ODpj8pFqc6Cmp3DttmBGZcolxSB3WJAmE='] }
  ];



  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container>
      <SectionTitle>Galerie</SectionTitle>
      {activities.map((activity, index) => (
        <GallerySection key={index}>
          <SectionTitle>{activity.title}</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {activity.images.map((image, idx) => (
              <ImageCard key={idx} style={{ flex: '1 0 21%', position: 'relative' }}>
                <Image src={image} alt={`${activity.title} ${idx + 1}`} />
                <ImageOverlay onClick={() => openModal(image)}>Vizualizează imaginea</ImageOverlay>
              </ImageCard>
            ))}
          </div>
        </GallerySection>
      ))}
      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>✕</CloseButton>
            <ModalImage src={selectedImage} alt="Full resolution" />
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Galerie;
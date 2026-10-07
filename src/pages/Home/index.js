import { HomeWrapper, Hero, HeroCopy, HeroArtwork, PrimaryLink, SectionHeading, FeatureGrid, FeatureCard, FeatureImage, FeatureCopy, Credits } from './styles';

import MerlinBook from '../../assets/prints/merlin-book.webp';
import MerlinKing from '../../assets/prints/merlin-king.webp';
import MerlinVivien from '../../assets/prints/merlin-vivien.webp';
import Grotto from '../../assets/prints/grotto.webp';

const features = [
  {
    to: '/spells',
    title: 'Magias',
    description: 'Encontre magias por classe, nível, escola e componentes.',
    image: MerlinVivien,
    imageAlt: '',
  },
  {
    to: '/characters',
    title: 'Personagens',
    description: 'Organize grimórios e equipamentos para cada aventureiro.',
    image: MerlinKing,
    imageAlt: '',
  },
  {
    to: '/items',
    title: 'Equipamentos',
    description: 'Consulte armas e armaduras e envie-as para a mochila.',
    image: Grotto,
    imageAlt: '',
  },
];

export default function Home() {
  return (
    <HomeWrapper>
      <Hero>
        <HeroCopy>
          <span className="eyebrow">GRIMÓRIO DE AVENTURA</span>
          <h1>Prepare-se para a próxima jornada.</h1>
          <p>Consulte magias, organize personagens e reúna o equipamento para sua mesa.</p>
          <PrimaryLink to="/spells">Abrir o grimório</PrimaryLink>
        </HeroCopy>
        <HeroArtwork>
          <img src={MerlinBook} alt="Gravura de Merlin mostrando um livro a um aprendiz" />
        </HeroArtwork>
      </Hero>

      <SectionHeading>
        <h2>O que você precisa para a aventura?</h2>
        <p>Suas referências e personagens, num só lugar.</p>
      </SectionHeading>

      <FeatureGrid>
        {features.map(feature => (
          <FeatureCard key={feature.to} to={feature.to}>
            <FeatureImage src={feature.image} alt={feature.imageAlt} />
            <FeatureCopy>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span>Explorar <span aria-hidden="true">→</span></span>
            </FeatureCopy>
          </FeatureCard>
        ))}
      </FeatureGrid>

      <Credits>
        <details>
          <summary>Créditos das gravuras</summary>
          <p>Ilustrações de Gustave Doré para <em>Idylls of the King</em> (1868), em domínio público.</p>
          <ul>
            <li><a href="https://commons.wikimedia.org/wiki/File:Idylls_of_the_King_15.jpg" target="_blank" rel="noreferrer">Merlin mostra o livro</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Idylls_of_the_King_1.jpg" target="_blank" rel="noreferrer">Merlin conduz o rei para fora das ruínas</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Idylls_of_the_King_10.jpg" target="_blank" rel="noreferrer">Merlin e Vivien sob o carvalho</a></li>
            <li><a href="https://commons.wikimedia.org/wiki/File:Idylls_of_the_King_17.jpg" target="_blank" rel="noreferrer">O velho na gruta</a></li>
          </ul>
        </details>
      </Credits>
    </HomeWrapper>
  );
}

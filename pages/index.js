import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { space, width, fontSize } from 'styled-system';
import Grid, { GridCell } from '../components/Grid';
import Header from '../components/Header';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Job, { Jobs } from '../components/Job';
import SwipeLink from '../components/SwipeLink';
import CopyText from '../components/CopyText';
import List, { ListItem } from '../components/List';

const Container = styled.div`
  padding: 10vh 0 0;
  margin: auto;
  max-width: 1440px;
  ${space};
  ${width};

  ${media.greaterThan('medium')`
    padding: 20vh 0 0;
  `}
`;

const Section = styled.section`
  margin-bottom: 200px;
  ${width};
`;

const HeroWrapper = styled.header`
  margin-bottom: 200px;
`;

const Hero = styled.p`
  margin: 0;
  margin-bottom: 40px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 30px;
  line-height: 1.25;
  font-weight: 700;
  color: ${({ theme }) => theme.main.text};
  ${fontSize};
  transition: all 0.45s ease;

  a {
    display: inline-block;
    text-decoration: none;
    line-height: 0.8;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.25);
    transition: all 0.45s ease;

    &,
    &:visited {
      color: ${({ theme }) => theme.main.text};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.primary};
    }
  }

  > span {
    display: inline-block;
    white-space: nowrap;
  }
`;

const markerAnimation = keyframes`
 0% { width: 0%; opacity: 0; }
 100% { width: 100%; }
`

const MyJob = styled.span`
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  white-space: nowrap;
  
  &::after {
    z-index: -1;
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    width: 0;
    height: 100%;
    border-left: 8px solid ${({ theme }) => theme.colors.primary};
    border-right: 8px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.swipeLink.bgHover};
    transform: rotate(-0.55deg);
    transform-origin: 0 0;
    animation: ${markerAnimation} 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }
`

const Index = () => (
  <Container width={['auto', '80%']} px={[30, 0]}>
    <Grid flexDirection={['column', 'column', 'row']}>
      <GridCell width={['auto', 'auto', '33%']}>
        <Header position={['relative', 'relative', 'fixed']} />
      </GridCell>

      <GridCell width={['auto', 'auto', '67%']}>
        <HeroWrapper>
          <Hero fontSize={[38, 62]}>
            Bonjour,
            <br />
            Je suis <MyJob>Front-End Designer</MyJob> <span>à Montpellier</span> depuis plus de 10 ans.
          </Hero>

          <Paragraph fontSize={[18, 20]}>
            Par le passé j‘ai notamment travaillé pour Axeptio, Swile et Teads. Je
            suis fan des interfaces web minimalistes et soignées. Mes passions
            se résument en 3 choses essentielles: le Squash, la bière et faire
            des blagues. Sans ordre de préférence.
          </Paragraph>
        </HeroWrapper>

        <Section width={['auto', 600]}>
          <Title fontSize={[40, 50]}>Expérience</Title>
          <Jobs ml={[0, 40]}>
            <Job>
              <h2>
                <SwipeLink href="https://www.axeptio.eu">Axeptio</SwipeLink>
              </h2>
              <h3>2018 - aujourd‘hui</h3>
              <Paragraph>
                Design et développement front-end du widget de consentement et
                des interfaces utilisateurs avec Figma, React et
                styled-components.
              </Paragraph>
            </Job>
            <Job>
              <h2>
                <SwipeLink href="https://www.main-gauche.com">
                  MAINGAUCHE
                </SwipeLink>
              </h2>
              <h3>2020 - 2021</h3>
              <Paragraph>
                Développement front-end du futur site internet en React et
                styled-components.
              </Paragraph>
            </Job>
            <Job>
              <h2>
                <SwipeLink href="https://www.swile.co">Swile</SwipeLink>
              </h2>
              <h3>2016 - 2018</h3>
              <Paragraph>
                Intégration des maquettes de l‘application web avec React et
                styled-components.
              </Paragraph>
            </Job>
            <Job>
              <h2>
                <SwipeLink href="https://teads.com">Teads</SwipeLink>
              </h2>
              <h3>2014 - 2016</h3>
              <Paragraph>
                UI/UX Design et intégration des designs sur le Dashboard de
                gestion des campagnes.
                <br />
                Développement de web components Angular et SASS.
              </Paragraph>
            </Job>
          </Jobs>
        </Section>

        <Section width={['auto', 600]}>
          <Title fontSize={50}>Technologies</Title>
          <List ml={[0, 40]}>
            <ListItem>git</ListItem>
            <ListItem>CSS3</ListItem>
            <ListItem>HTML5</ListItem>
            <ListItem>Figma</ListItem>
            <ListItem>React</ListItem>
            <ListItem>NextJS</ListItem>
            <ListItem>Remixrun</ListItem>
            <ListItem>Storybook</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>CSS-in-JS</ListItem>
            <ListItem>TailwindCSS</ListItem>
            <ListItem>Styled-components</ListItem>
          </List>
        </Section>

        <Section width={['auto', 600]}>
          <Title fontSize={50}>Me contacter</Title>
          <Paragraph mb={60}>
            Pour toute demande spécifique, ou juste pour le fun, vous pouvez me
            contacter sur{' '}
            <CopyText
              value="&#118;&#105;&#110;&#x63;&#101;&#x6e;&#116;&#64;&#99;&#x65;&#108;&#x61;&#x76;&#105;&#x2e;&#x66;&#x72;"
              message="copiée"
            />{' '}
            et je me ferai un plaisir de vous répondre.
          </Paragraph>
        </Section>
      </GridCell>
    </Grid>
  </Container>
);

export default Index;

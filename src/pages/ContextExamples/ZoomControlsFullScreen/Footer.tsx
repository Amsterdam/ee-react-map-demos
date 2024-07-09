import {
  Column,
  Footer as AmsFooter,
  Grid,
  Heading,
  Link,
  LinkList,
  PageMenu,
  Paragraph,
  VisuallyHidden,
} from '@amsterdam/design-system-react';
import { ChattingIcon, PhoneIcon } from '@amsterdam/design-system-react-icons';

const Footer = () => {
  return (
    <>
      <AmsFooter>
        <AmsFooter.Top>
          <VisuallyHidden>
            <Heading>Colofon</Heading>
          </VisuallyHidden>
          <Grid gapVertical="large" paddingVertical="medium">
            <Grid.Cell span={3}>
              <Column gap="extra-small">
                <Heading level={2} size="level-4" inverseColor>
                  Contact
                </Heading>
                <Paragraph size="small" inverseColor>
                  Heeft u een vraag en kunt u het antwoord niet vinden op deze
                  site? Neem dan contact met ons op.
                </Paragraph>
                <LinkList>
                  <LinkList.Link
                    href="https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/contactformulier.aspx/?pk_vid=9f948f5fae0c5e90169952648840adc6"
                    icon={ChattingIcon}
                    onBackground="dark"
                    size="small"
                  >
                    Contactformulier
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://www.amsterdam.nl/contact/"
                    onBackground="dark"
                    size="small"
                  >
                    Adressen en openingstijden
                  </LinkList.Link>
                  <LinkList.Link
                    href="tel:+3114020"
                    icon={PhoneIcon}
                    onBackground="dark"
                    size="small"
                  >
                    Bel 14 020
                  </LinkList.Link>
                </LinkList>
              </Column>
            </Grid.Cell>
            <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
              <Column gap="extra-small">
                <Heading level={2} size="level-4" inverseColor>
                  Volg de gemeente
                </Heading>
                <LinkList>
                  <LinkList.Link
                    href="https://www.amsterdam.nl/nieuws/volg-de-gemeente/nieuwsbrief-amsterdam/"
                    onBackground="dark"
                    size="small"
                  >
                    Nieuwsbrief Amsterdam
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://twitter.com/AmsterdamNL"
                    onBackground="dark"
                    rel="external"
                    size="small"
                  >
                    Twitter
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://www.facebook.com/gemeenteamsterdam"
                    onBackground="dark"
                    rel="external"
                    size="small"
                  >
                    Facebook
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://www.instagram.com/gemeenteamsterdam/"
                    onBackground="dark"
                    rel="external"
                    size="small"
                  >
                    Instagram
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://www.linkedin.com/company/gemeente-amsterdam"
                    onBackground="dark"
                    rel="external"
                    size="small"
                  >
                    LinkedIn
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://social.amsterdam.nl/@gemeenteamsterdam"
                    onBackground="dark"
                    rel="external"
                    size="small"
                  >
                    Mastodon
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://www.youtube.com/channel/UCEiYFPFR5jGhFakHhbswlig"
                    onBackground="dark"
                    rel="external"
                    size="small"
                  >
                    YouTube
                  </LinkList.Link>
                  <LinkList.Link
                    href="https://werkenbij.amsterdam.nl/"
                    onBackground="dark"
                    size="small"
                  >
                    Werkenbij
                  </LinkList.Link>
                </LinkList>
              </Column>
            </Grid.Cell>
            <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
              <Column gap="small">
                <Column as="section" gap="extra-small">
                  <Heading level={2} size="level-4" inverseColor>
                    Kalender
                  </Heading>
                  <Paragraph size="small" inverseColor>
                    Van buurtactiviteiten tot inspraakavonden. Wat organiseert
                    de gemeente voor u? Kijk op{' '}
                    <Link
                      href="https://activiteiten.amsterdam.nl/?pk_vid=9f948f5fae0c5e90169952714540adc6"
                      onBackground="dark"
                      variant="inline"
                    >
                      Kalender Amsterdam
                    </Link>
                    .
                  </Paragraph>
                </Column>
                <Column as="section" gap="extra-small">
                  <Heading level={3} size="level-4" inverseColor>
                    Uit in Amsterdam
                  </Heading>
                  <Paragraph size="small" inverseColor>
                    Benieuwd wat er allemaal te doen is in de stad? Op{' '}
                    <Link
                      href="https://www.iamsterdam.com/"
                      onBackground="dark"
                      variant="inline"
                    >
                      Iamsterdam.com
                    </Link>{' '}
                    vindt u de beste tips op het gebied van cultuur, uitgaan en
                    evenementen.
                  </Paragraph>
                </Column>
              </Column>
            </Grid.Cell>
          </Grid>
        </AmsFooter.Top>
      </AmsFooter>
      <Grid paddingVertical="small">
        <Grid.Cell span="all">
          <PageMenu>
            {/* target="_self" to prevent storybook clicking through on # links */}
            <PageMenu.Link href="#" target="_self">
              Home
            </PageMenu.Link>
            <PageMenu.Link href="#" target="_self">
              Zoeken
            </PageMenu.Link>
            <PageMenu.Link href="#" target="_self">
              Nieuws
            </PageMenu.Link>
            <PageMenu.Link href="#" target="_self">
              Burgerzaken
            </PageMenu.Link>
            <PageMenu.Link href="#" target="_self">
              Kunst en cultuur
            </PageMenu.Link>
            <PageMenu.Link href="#" target="_self">
              Projecten
            </PageMenu.Link>
            <PageMenu.Link href="#" target="_self">
              Project
            </PageMenu.Link>
            <PageMenu.Link href="#" target="_self">
              Parkeren
            </PageMenu.Link>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </>
  );
};

export default Footer;

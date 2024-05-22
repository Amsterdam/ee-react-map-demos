import {
  Accordion,
  Checkbox,
  Column,
  SearchField,
} from '@amsterdam/design-system-react';

const Legend = () => {
  return (
    <form action="#">
      <Column gap="small">
        <SearchField>
          <SearchField.Input placeholder="Zoek op kaartlaag..." />
          <SearchField.Button />
        </SearchField>
        <Accordion headingLevel={3}>
          <Accordion.Section label="Adresseerbare objecten">
            <Checkbox id="checkbox-1">Ligplaatsen (gebruiksdoel)</Checkbox>
            <Checkbox id="checkbox-2">Standplaatsen (gebruiksdoel)</Checkbox>
            <Checkbox id="checkbox-3">
              Verblijfsobjecten (gebruiksdoel)
            </Checkbox>
            <Checkbox id="checkbox-4">Verblijfsobjecten (status)</Checkbox>
          </Accordion.Section>
          <Accordion.Section label="Afvalcontainers">
            <Checkbox id="checkbox-1">Restafval</Checkbox>
            <Checkbox id="checkbox-2">
              Loopafstand tot restafvalcontainer
            </Checkbox>
            <Checkbox id="checkbox-3">Glas</Checkbox>
            <Checkbox id="checkbox-2">Loopafstand tot glascontainer</Checkbox>
            <Checkbox id="checkbox-3">Papier</Checkbox>
            <Checkbox id="checkbox-2">Loopafstand tot papiercontainer</Checkbox>
            <Checkbox id="checkbox-3">Textiel</Checkbox>
            <Checkbox id="checkbox-2">
              Loopafstand tot textielcontainer
            </Checkbox>
            <Checkbox id="checkbox-3">GFT</Checkbox>
            <Checkbox id="checkbox-2">Loopafstand tot gftcontainer</Checkbox>
          </Accordion.Section>
        </Accordion>
      </Column>
    </form>
  );
};

export default Legend;

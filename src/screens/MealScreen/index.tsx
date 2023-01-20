import { DietHeader } from "@components/DietHeader";
import { ButtonContainer, Chip, ChipIcon, ChipText, Container, Content, DateText, DateTitle, MealDescription, MealTitle } from "./styles";
import { Button } from "@components/Button";
import { View } from "react-native";

export function MealScreen() {
  return (
    <Container type={'PRIMARY'}>
      <DietHeader type="PRIMARY" title="Refeição" />

      <Content>
        <MealTitle>Sanduba</MealTitle>

        <MealDescription>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </MealDescription>

        <DateTitle>Data e hora</DateTitle>

        <DateText>12/08/2022 às 16:00</DateText>

        <Chip>
          <ChipIcon name="circle" type="PRIMARY" />

          <ChipText>dentro da dieta</ChipText>
        </Chip>

        <ButtonContainer>
          <Button text="Editar refeição" icon="edit-3" />
          <Button text="Excluir refeição" icon="trash-2" type="SECONDARY" style={{ marginTop: 5 }} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}
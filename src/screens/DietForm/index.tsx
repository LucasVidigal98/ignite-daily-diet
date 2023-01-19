import { StatisticsHeader } from "@components/StatisticsHeader";
import { ButtonContainer, Container, Content, InputContainer, Label } from "./styles";
import { DietHeader } from "@components/DietHeader";
import { Input } from "@components/Input";
import { View } from "react-native";
import { Button } from "@components/Button";
import { OptionButton } from "@components/OptionButton";

export function DietForm() {
  return (
    <Container>
      <DietHeader title="Nova Refeição" />

      <Content>
        <InputContainer>
          <View>
            <Label>Nome</Label>
            <Input />
          </View>
        </InputContainer>

        <InputContainer>
          <View>
            <Label>Descrição</Label>
            <Input multiline numberOfLines={4} style={{ height: 142 }} />
          </View>
        </InputContainer>

        <InputContainer>
          <View>
            <Label>Data</Label>
            <Input style={{ width: 153.5 }} />
          </View>

          <View style={{ marginLeft: 25 }}>
            <Label>Hora</Label>
            <Input style={{ width: 153.5 }} />
          </View>
        </InputContainer>

        <Label>Está dentro da dieta?</Label>

        <ButtonContainer>
          <OptionButton text="Sim" />
          <OptionButton text="Não" type="SECONDARY" />
        </ButtonContainer>

        <Button text="Cadastrar Refeição" />
      </Content>
    </Container>
  )
}
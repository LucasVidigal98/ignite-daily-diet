import { ButtonContainer, Container, Content, InputContainer, Label } from "./styles";
import { DietHeader } from "@components/DietHeader";
import { Input } from "@components/Input";
import { View } from "react-native";
import { Button } from "@components/Button";
import { OptionButton } from "@components/OptionButton";
import { useState } from "react";
import { createMeal } from "@storage/createItem";
import { useNavigation } from "@react-navigation/native";

export function DietForm() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [inside, setInside] = useState(false);
  const [notInside, setNotInside] = useState(false);

  const navigation = useNavigation();

  function handleInside() {
    setInside(!inside);
    setNotInside(inside ? true : false);
  }

  function handleNotInside() {
    setNotInside(!notInside);
    setInside(notInside ? true : false);
  }

  async function handleNewMeal() {
    await createMeal({
      date,
      desc,
      name,
      inside,
      time
    });

    navigation.navigate('confirm', { typeScreen: inside ? 'PRIMARY' : 'SECONDARY' });
  }

  return (
    <Container>
      <DietHeader title="Nova Refeição" />

      <Content>
        <InputContainer>
          <View>
            <Label>Nome</Label>
            <Input defaultValue={name} onChangeText={(e) => setName(e)} />
          </View>
        </InputContainer>

        <InputContainer>
          <View>
            <Label>Descrição</Label>
            <Input
              multiline
              numberOfLines={4}
              style={{ height: 142 }}
              defaultValue={desc}
              onChangeText={(e) => setDesc(e)}
            />
          </View>
        </InputContainer>

        <InputContainer>
          <View>
            <Label>Data</Label>
            <Input style={{ width: 153.5 }} defaultValue={date} onChangeText={(e) => setDate(e)} />
          </View>

          <View style={{ marginLeft: 25 }}>
            <Label>Hora</Label>
            <Input style={{ width: 153.5 }} defaultValue={time} onChangeText={(e) => setTime(e)} />
          </View>
        </InputContainer>

        <Label>Está dentro da dieta?</Label>

        <ButtonContainer>
          <OptionButton
            text="Sim"
            selected={inside}
            onPress={handleInside}
          />
          <OptionButton
            text="Não"
            type="SECONDARY"
            selected={notInside}
            onPress={handleNotInside}
          />
        </ButtonContainer>

        <Button text="Cadastrar Refeição" onPress={handleNewMeal} />
      </Content>
    </Container>
  )
}
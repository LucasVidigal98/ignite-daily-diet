
import { BaseHeader } from "@components/BaseHeader";
import { Container, Label } from "./styles";
import { InfoCard } from "@components/InfoCard";
import { Button } from "@components/Button";
import { MealList } from "@components/MealList";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getItem } from "@storage/getItem";

export function Home() {
  const [mealList, setMealList] = useState([]);

  const navigation = useNavigation();

  async function getItems() {
    const storagedList = await getItem('mealList');

    setMealList(storagedList);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <BaseHeader />

      <InfoCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        type="PRIMARY"
        onPress={() => navigation.navigate('statistics')}
      />

      <Label>Refeições</Label>

      <Button icon="plus" text="Nova refeição" onPress={() => navigation.navigate('form')} />

      <MealList list={mealList} />

    </Container>
  );
}
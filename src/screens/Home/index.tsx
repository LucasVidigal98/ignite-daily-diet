
import { BaseHeader } from "@components/BaseHeader";
import { Contaiter, Label } from "./styles";
import { InfoCard } from "@components/InfoCard";
import { Button } from "@components/Button";
import { MealList } from "@components/MealList";

export function Home() {
  const mealList = [
    {
      title: "12.08.22",
      data: [
        { time: '20:00', meal: 'Pizza', id: 0, inside: 55 },
        { time: '20:00', meal: 'Burger', id: 0, inside: 25 },
        { time: '20:00', meal: 'Risotto', id: 0, inside: 25 }
      ],
    },
    {
      title: "11.08.22",
      data: [
        { time: '20:00', meal: 'Pizza', id: 0, inside: 25 },
        { time: '20:00', meal: 'Burger', id: 0, inside: 25 },
        { time: '20:00', meal: 'Risotto', id: 0, inside: 25 }
      ],
    }
  ];

  return (
    <Contaiter>
      <BaseHeader />

      <InfoCard
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        type="PRIMARY"
      />

      <Label>Refeições</Label>

      <Button icon="plus" text="Nova refeição" />

      <MealList list={mealList} />

    </Contaiter>
  );
}

import { BaseHeader } from "@components/BaseHeader";
import { Contaiter, Label } from "./styles";
import { InfoCard } from "@components/InfoCard";
import { Button } from "@components/Button";

export function Home() {
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

    </Contaiter>
  );
}
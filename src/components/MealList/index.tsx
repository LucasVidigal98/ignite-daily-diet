import {
  Conatiner,
  ListEmpty,
  ListItem,
  ListItemContent,
  ListItemIcon,
  ListItemMeal,
  ListItemTime,
  ListTitle,
  Vr
} from "./styles";

type MealInfo = {
  time: string;
  meal: string;
  id: number;
  inside: number;
}

export type MealList = {
  title: string;
  data: MealInfo[];
}

type Props = {
  list: MealList[];
}

export function MealList({ list }: Props) {
  return (
    <Conatiner
      showsVerticalScrollIndicator={false}
      sections={list}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({ item }: any) => (
        <ListItem>
          <ListItemContent>
            <ListItemTime>{item.time}</ListItemTime>

            <Vr ></Vr>

            <ListItemMeal>{item.meal}</ListItemMeal>
          </ListItemContent>

          <ListItemIcon name="circle" type={item.inside < 50 ? 'DEFICIT' : 'NO_DEFICIT'} />
        </ListItem>
      )}
      renderSectionHeader={({ section }: any) => (
        <ListTitle>{`${section.title}`}</ListTitle>
      )}
      ListEmptyComponent={() => <ListEmpty>Nenhuma refeição cadastrada, que tal começar seu controle?</ListEmpty>}
    >

    </Conatiner>
  );
}
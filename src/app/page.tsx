import cn from "classnames";
import { data } from "@/data/home";
import Text from "@/components/Text/Text";
import Tag from "@/components/TagItem/Tag";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={cn(styles.page, "container")}>
      <Text className={cn(styles.text, "mb-20")}>
        My expertise includes all aspects of design from business cards, books and catalog layouts
        to large scale digital projects and after-release support.
      </Text>
      <Text className={styles.text}>Creative, reliable, honest. Your choice.</Text>
      {data.tags.map((item) => (
        <Tag key={item.id}>{item.text}</Tag>
      ))}
    </main>
  );
}

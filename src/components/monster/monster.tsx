import { MonsterInfo } from "@/types/monsters.interface";
import { FC } from "react";
import Image from 'next/image';
import { RestrictedWidthLayout } from "@/components/common";
import styles from './monster.module.css';

export interface MonsterProps {
  monster: MonsterInfo;
}

export const Monster: FC<MonsterProps> = ({ monster }) => {
  return (
    <RestrictedWidthLayout>
      <div className={styles.monster}>
        <div>
          <h1 className={styles.monster__name}>{monster.name}</h1>
          {monster?.image && (
            <div className={styles.monster__imageContainer}>
              <Image
                className={styles.monster__image}
                src={`${process.env.baseApiPath}${monster.image}`}
                alt={`${monster.name} image`}
                width={400}
                height={400}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA" // can be a base64 image
                priority={true}
              />
            </div>
          )}
        </div>

        <dl className={styles.monster__stats}>
          <div className={styles.monster__statItem}>
            <dt id="strength" className={styles.monster__stat}>Strength</dt>
            <dd aria-labelledby="strength" className={styles.monster__statValue}>{monster.strength}</dd>
          </div>
          <div className={styles.monster__statItem}>
            <dt className={styles.monster__stat}>Dexterity</dt>
            <dd className={styles.monster__statValue}>{monster.dexterity}</dd>
          </div>
          <div className={styles.monster__statItem}>
            <dt className={styles.monster__stat}>Constitution</dt>
            <dd className={styles.monster__statValue}>{monster.constitution}</dd>
          </div>
          <div className={styles.monster__statItem}>
            <dt className={styles.monster__stat}>Intelligence</dt>
            <dd className={styles.monster__statValue}>{monster.intelligence}</dd>
          </div>
          <div className={styles.monster__statItem}>
            <dt className={styles.monster__stat}>Wisdom</dt>
            <dd className={styles.monster__statValue}>{monster.wisdom}</dd>
          </div>
          <div className={styles.monster__statItem}>
            <dt className={styles.monster__stat}>Charisma</dt>
            <dd className={styles.monster__statValue}>{monster.charisma}</dd>
          </div>
        </dl>
      </div>
    </RestrictedWidthLayout>
  );
};
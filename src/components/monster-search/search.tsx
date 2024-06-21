'use client';

import { useState, useDeferredValue, useMemo } from "react";
import Link from 'next/link';
import { MonsterSummary } from "@/types/monsters.interface";
import { RestrictedWidthLayout } from "@/components/common";

import styles from "./monster-search.module.css";

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [monsters, setMonsters] = useState<Array<MonsterSummary>>([]);

    const fetchMonsters = async () => {
        try {
          const res = await fetch('https://www.dnd5eapi.co/api/monsters');
          const { results } = await res.json();
          setMonsters(results);
        } catch {
          // handle error
        }
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetchMonsters();
      };
    
      const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      };
    
      const deferredSearchTerm = useDeferredValue(searchTerm);
    
      const filteredMonsters = useMemo(() => {
        if (!deferredSearchTerm) {
          return monsters;
        }
        return monsters.filter(monster =>
          monster.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
        );
      }, [monsters, deferredSearchTerm]);

    return (
        // or simply <div> with styles if we don't want to restrict the width by RestrictedWidthLayout
        <RestrictedWidthLayout>
            <form className={styles['search']} onSubmit={handleSubmit}>
                <label 
                    className={styles['search__label']} 
                    htmlFor="searchTerm"
                    id="searchTermLabel">
                        Search
                </label>
                <input 
                    id="searchTerm"
                    className={styles['search__input']}
                    value={searchTerm}
                    onChange={handleSearch}
                    aria-labelledby="searchTermLabel"/>
                <button className={styles['search__submit']} type="submit">Search</button>
            </form>
            <ul>
                {filteredMonsters.map((monster) => (
                    <li key={monster?.index}
                        className={styles.list__element}>
                        <Link
                            className={styles.list__link} 
                            href={`/monster/${monster?.index}`}>
                            {monster.name}
                        </Link> 
                    </li>
                ))}
            </ul>
        </RestrictedWidthLayout>
    )
}

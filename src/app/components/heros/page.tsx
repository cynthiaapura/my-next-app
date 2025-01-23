"use client";

import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";


const Home = () => {
  return (
    <div>
      <h1>Bienvenue dans l'Univers de Warhammer : Les Démons du Chaos</h1>
      <p>
        Découvrez les héros puissants et les troupes dévastatrices qui composent l'armée des Démons du Chaos.
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/heros">Voir les Héros</Link>
          </li>
          <li>
            <Link href="/troop">Voir les Troupes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

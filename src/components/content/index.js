import React, { useState } from "react";
import swJudoists from "../../data/judoists.json";
import swFootballers from "../../data/footballers.json";
import swBoxers from "../../data/boxers.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";
import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Judoists");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

  return (
    <div className="content-layout" >
          <Select tab={tab} handleChangeTab={handleChangeTab} />

          {tab === "Judoists" &&
            swJudoists.map((character) => (
              <CharacterLayout key={character.name} item={character}>
                <CharacterList label="Name: " item={character.name} />
                <CharacterList label="Height: " item={character.height} />
                <CharacterList label="Mass: " item={character.mass} />
                <CharacterList label="Country: " item={character.country} />
                <CharacterList label="Gender: " item={character.gender} />
                <CharacterList label="Birth year: " item={character.birth_year} />
              </CharacterLayout>
            ))}
            {tab === "Footballers" &&
                    swFootballers.map((footballer) => (
                      <CharacterLayout key={footballer.name} item={footballer}>
                        <CharacterList label="Name: " item={footballer.name} />
                        <CharacterList label="Height: " item={footballer.height} />
                        <CharacterList label="Number: " item={footballer.number} />
                        <CharacterList label="Country: " item={footballer.country} />
                        <CharacterList label="Gender: " item={footballer.gender} />
                        <CharacterList label="Position: " item={footballer.position} />
                        <CharacterList label="Birth year: " item={footballer.birth_year} />
                      </CharacterLayout>
            ))}
            {tab === "Boxers" &&
                    swBoxers.map((boxer) => (
                      <CharacterLayout key={boxer.name} item={boxer}>
                        <CharacterList label="Name: " item={boxer.name} />
                        <CharacterList label="Height: " item={boxer.height} />
                        <CharacterList label="Mass: " item={boxer.mass} />
                        <CharacterList label="Country: " item={boxer.country} />
                        <CharacterList label="Gender: " item={boxer.gender} />
                        <CharacterList label="Number of fights in professional career: " item={boxer.professional_career} />
                        <CharacterList label="Style: " item={boxer.style} />
                      </CharacterLayout>
            ))}

       </div>

  );
};

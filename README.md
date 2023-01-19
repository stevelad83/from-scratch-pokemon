#wireframe

#plan

#Components

-Main.js
(state [pokemon, setPokemon]
[types, setTypes]
[selectedType, setSelectedType]
[query, setQuery])
(useEffect - call Pokemon API & set initial Pokemon state && calls Types API & gets types)

-PokeCard
-pokemon
-url_image
-id
-type_1
-type_2
-ability_1

    -Controls.js

    -Select.js
    -Query.js
    -PokeCard.js

Planning document in README showing your component hierarchy 2
Each pair must have at least 3 commits each 2
State management (useState, useEffect) lives in a custom hook 2
App contains at least 4 separate components 4
Users can see a list of Pokemon when they load the page 2
List of Pokemon are styled showing image and at least 3 other attributes 2
Users can filter by type 2
Users see a loading state when the data is being retrieved 2
Total 18
Users can search by Pokemon name (stretch) +2

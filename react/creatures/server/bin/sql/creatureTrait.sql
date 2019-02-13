CREATE TABLE creatureTrait(
  "traitId"     INTEGER,
  "creatureId"  INTEGER,
  FOREIGN KEY ("traitId")    REFERENCES trait(id),
  FOREIGN KEY ("creatureId") REFERENCES creature(id)
);
export interface Pokemon {
  "id": number;
  "name": string;
  "image": string
  "lvl": number;
  "evolutionId": number;
  "abilities":[{
    "name": string,
    "description": string
  }]
}

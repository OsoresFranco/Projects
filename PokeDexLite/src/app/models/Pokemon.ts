export interface Pokemon {
  "id": number;
  "name": string;
  "image": string;
  "type":string[]
  "lvl": number;
  "evolutionId": number;
  "abilities":[{
    "name": string,
    "description": string
  }]
}

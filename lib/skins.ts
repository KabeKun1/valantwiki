export interface Skin {
  id: string;
  name: string;
  weaponName: string;
  weaponId: string;
  image: string;
  tier: "Select" | "Deluxe" | "Premium" | "Ultra" | "Exclusive";
  collection: string;
}

export const skinTiers = {
  Select: { color: "#5A9A64", label: "Select Edition" },
  Deluxe: { color: "#009587", label: "Deluxe Edition" },
  Premium: { color: "#D1548D", label: "Premium Edition" },
  Ultra: { color: "#FAD663", label: "Ultra Edition" },
  Exclusive: { color: "#F5955B", label: "Exclusive Edition" },
};

export const collections = [
  "Prime",
  "Reaver",
  "Elderflame",
  "Ion",
  "Glitchpop",
  "Oni",
  "Singularity",
  "RGX 11z Pro",
  "Spectrum",
  "Protocol 781-A",
  "BlastX",
  "Sovereign",
  "Ruination",
  "Origin",
  "Forsaken",
  "Champions",
  "Radiant Entertainment System",
  "Sentinels of Light",
  "Magepunk",
  "Neptune",
  "Araxys",
  "Prelude to Chaos",
  "Chronovoid",
  "Kohaku & Matsuba",
];

export const allSkins: Skin[] = [
  // PRIME COLLECTION
  { id: "prime-vandal", name: "Prime Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/c9678d8c-4327-f397-b0ec-dca3c3d6fb15/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-phantom", name: "Prime Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/9dc0bdd7-4d88-9360-38d6-3ea62b1daaca/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-spectre", name: "Prime Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/d1d528ae-4dcc-e693-68e2-e8a475df83a4/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-guardian", name: "Prime Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/9336ab9d-445c-0872-a283-9f9b61a0098a/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-classic", name: "Prime Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/c7695ce7-4fc9-1c79-64b3-8c8f9e21571c/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-axe", name: "Prime Axe", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/249b0e46-4a11-f045-51bb-649151cd802a/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-frenzy", name: "Prime Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/2607b2c6-45f7-e75e-94f8-58a738773d5c/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-2-phantom", name: "Prime//2.0 Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/9dc0bdd7-4d88-9360-38d6-3ea62b1daaca/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-2-odin", name: "Prime//2.0 Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/ef564ec3-497c-3038-543e-eb94bbe46437/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-2-bucky", name: "Prime//2.0 Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/f987be1f-4287-35a4-34a9-d6a92805e7ff/displayicon.png", tier: "Premium", collection: "Prime" },
  
  // REAVER COLLECTION
  { id: "reaver-vandal", name: "Reaver Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/ba42fe63-457a-78ce-4499-47950a698129/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-operator", name: "Reaver Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/7bfab387-4e97-d815-4488-c491e3a5520c/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-sheriff", name: "Reaver Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/4e4ebb8d-41d0-c326-595a-1f9b257e91fa/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-ghost", name: "Reaver Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/a6fe7710-4edc-5e23-223d-aeaef3d17866/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-guardian", name: "Reaver Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/c9f0ea7f-4bed-b10e-62d2-0394444feed1/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-karambit", name: "Reaver Karambit", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/5ac106cd-45ef-a26f-2058-f382f20c64db/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-spectre", name: "Reaver Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/0a0237d3-4d57-0ed2-ab65-c898a7bc755b/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-phantom", name: "Reaver Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/4c18d802-409d-ec20-f630-d3abfcaa37c7/displayicon.png", tier: "Premium", collection: "Reaver" },
  
  // ELDERFLAME COLLECTION
  { id: "elderflame-vandal", name: "Elderflame Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/b3d3ff38-4202-20d8-2f41-c783477e5636/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-operator", name: "Elderflame Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/5c273d0e-47fa-bb8c-d914-728de95da30e/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-judge", name: "Elderflame Judge", weaponName: "Judge", weaponId: "judge", image: "https://media.valorant-api.com/weaponskinlevels/d8c9fee3-4e02-bc92-a235-608a556905ae/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-frenzy", name: "Elderflame Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/ea65ba94-468d-39a8-5ded-98820d72d19f/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-dagger", name: "Elderflame Dagger", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/f3594bcc-43a9-4a74-8c40-98a4e4a4569a/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-sheriff", name: "Elderflame Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/5c273d0e-47fa-bb8c-d914-728de95da30e/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  
  // ION COLLECTION
  { id: "ion-phantom", name: "Ion Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/b8bb264c-4578-2410-8dfa-6aacfeb318b0/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-operator", name: "Ion Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/24c73c29-443c-2440-d6db-838086f2451a/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-sheriff", name: "Ion Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/2b555f97-46bb-5949-3531-979f5bc817f0/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-bucky", name: "Ion Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/f00520c8-4b70-7255-d23c-c0a4887656a2/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-energy-sword", name: "Ion Energy Sword", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/21ceb4b1-480f-dddb-1422-8aad73519181/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-guardian", name: "Ion Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/8af83962-4e2f-f58e-588e-ef85e4882b79/displayicon.png", tier: "Premium", collection: "Ion" },
  
  // GLITCHPOP COLLECTION
  { id: "glitchpop-vandal", name: "Glitchpop Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/7e44fc1b-44fa-cdda-8491-f8a5bca1cfa3/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-phantom", name: "Glitchpop Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/9f6e4612-433b-aea9-1683-3db7aee90848/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-operator", name: "Glitchpop Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/d92a6ee6-4073-8b7f-e944-f1a55606a28a/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-judge", name: "Glitchpop Judge", weaponName: "Judge", weaponId: "judge", image: "https://media.valorant-api.com/weaponskinlevels/712c7a37-4524-0b27-dfdd-4e95181dd36e/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-frenzy", name: "Glitchpop Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/4b74b3ee-4a63-7339-a28f-8b8be010ca5a/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-bulldog", name: "Glitchpop Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/4a5ad8cd-4684-a47c-b393-ce9c6760d21a/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-odin", name: "Glitchpop Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/549b06bb-4704-25ce-19d5-c9b70b10de19/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-classic", name: "Glitchpop Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/25cb63cd-416e-ab23-2377-d18638679871/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-axe", name: "Glitchpop Axe", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/f27623a6-40de-20b9-17b5-c5bed27453a7/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-marshal", name: "Glitchpop Marshal", weaponName: "Marshal", weaponId: "marshal", image: "https://media.valorant-api.com/weaponskinlevels/d92a6ee6-4073-8b7f-e944-f1a55606a28a/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  
  // ONI COLLECTION
  { id: "oni-phantom", name: "Oni Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/c00e786e-4e6f-0ef7-0ce3-32ba9918ba41/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-shorty", name: "Oni Shorty", weaponName: "Shorty", weaponId: "shorty", image: "https://media.valorant-api.com/weaponskinlevels/a2950772-447a-f2db-be24-19b0e0ed736f/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-bucky", name: "Oni Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/cdc130c2-4b12-3702-c8f6-5a8920746395/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-guardian", name: "Oni Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/fee2c305-40d1-1cca-08b8-46bceda98eca/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-spectre", name: "Oni Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/c00e786e-4e6f-0ef7-0ce3-32ba9918ba41/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-claw", name: "Oni Claw", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/e34039b6-441d-3e17-2773-bdaf5c3d2faa/displayicon.png", tier: "Premium", collection: "Oni" },
  
  // SINGULARITY COLLECTION
  { id: "singularity-phantom", name: "Singularity Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/0ff7ff25-42cf-769a-4e6d-bd833121302d/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-spectre", name: "Singularity Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/3b955119-421c-3319-50cc-1aaf06b42338/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-sheriff", name: "Singularity Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/4276d2b5-4b1c-b636-aff0-4ea579d875d7/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-ares", name: "Singularity Ares", weaponName: "Ares", weaponId: "ares", image: "https://media.valorant-api.com/weaponskinlevels/642ee168-4f9e-1f5f-be72-01b3a41ac086/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-knife", name: "Singularity Knife", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/ea441610-42da-e46f-8d7b-1b9759c105cd/displayicon.png", tier: "Ultra", collection: "Singularity" },
  
  // RGX 11z PRO COLLECTION
  { id: "rgx-vandal", name: "RGX 11z Pro Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/4e435234-49a2-1444-4640-908692c855b8/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-phantom", name: "RGX 11z Pro Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/49a986d0-4a07-b756-331e-babe1b2839d9/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-operator", name: "RGX 11z Pro Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/2ad7a62f-4091-ecba-de21-d19edfb41086/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-stinger", name: "RGX 11z Pro Stinger", weaponName: "Stinger", weaponId: "stinger", image: "https://media.valorant-api.com/weaponskinlevels/4dbeebb2-4b39-8aec-b639-00bc4948d0f3/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-frenzy", name: "RGX 11z Pro Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/6f2aefab-439d-140a-4dc6-87818e2d72cd/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-blade", name: "RGX 11z Pro Blade", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/a1762ed3-45bf-2dd5-776f-a18a33171e6f/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-spectre", name: "RGX 11z Pro Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/737d2d1b-4b47-87a4-6045-5183580d27ec/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  
  // SPECTRUM COLLECTION
  { id: "spectrum-phantom", name: "Spectrum Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/82db01d1-4192-167b-9f53-78ba374c39ac/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-classic", name: "Spectrum Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/fe32e4bd-420f-b4cc-de37-febb78df9e16/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-bulldog", name: "Spectrum Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/43854c54-4263-571c-9be6-52b6d50d3190/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-guardian", name: "Spectrum Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/19ba907b-4a76-347f-ea24-38990c9ff755/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-judge", name: "Spectrum Judge", weaponName: "Judge", weaponId: "judge", image: "https://media.valorant-api.com/weaponskinlevels/43854c54-4263-571c-9be6-52b6d50d3190/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-waveform", name: "Spectrum Waveform", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/f58e7da3-4567-707f-cb1e-3a9add422481/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  
  // PROTOCOL 781-A COLLECTION
  { id: "protocol-phantom", name: "Protocol 781-A Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/a7cf8684-41a0-3dd4-e30c-6f9b4b34e635/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-spectre", name: "Protocol 781-A Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/5eb7515f-40a1-2f15-de03-c9a024664737/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-bulldog", name: "Protocol 781-A Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/544ddf0f-42c6-e410-c9db-fc8b3b2c84d4/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-sheriff", name: "Protocol 781-A Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/12831559-44ee-c708-b97c-29a43938e3cd/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-sword", name: "Protocol 781-A Personal Administrative Melee Unit", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/a7cf8684-41a0-3dd4-e30c-6f9b4b34e635/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  
  // BLASTX COLLECTION
  { id: "blastx-phantom", name: "BlastX Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/7b534393-40b0-38d0-1ffc-2b8b78708264/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-spectre", name: "BlastX Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/fdcb9cc0-4877-6f89-02ad-98ab330f3043/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-frenzy", name: "BlastX Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/31da3ec9-4eb0-ce9f-fcbb-e09ec626e748/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-odin", name: "BlastX Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/5123ed96-48de-aeab-eaea-2b8ea689f5a2/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-polymer", name: "BlastX Polymer KnifeTech Coated Knife", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/708abbc6-4579-4452-4293-07ba45e78979/displayicon.png", tier: "Premium", collection: "BlastX" },
  
  // SOVEREIGN COLLECTION
  { id: "sovereign-ghost", name: "Sovereign Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/ed8a1109-4e48-f077-636b-e98dd332bfcc/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-stinger", name: "Sovereign Stinger", weaponName: "Stinger", weaponId: "stinger", image: "https://media.valorant-api.com/weaponskinlevels/9bc535dd-4d91-3421-2cd0-7a8fdad3478b/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-guardian", name: "Sovereign Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/8f8f82f4-4133-82c9-50b2-3c9c67e0f9fb/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-marshal", name: "Sovereign Marshal", weaponName: "Marshal", weaponId: "marshal", image: "https://media.valorant-api.com/weaponskinlevels/c5dd6298-4928-5d64-5cd0-7fa41ea89d81/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-sword", name: "Sovereign Sword", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/90fe45d6-41ea-1c49-8fb9-46b0e98c0077/displayicon.png", tier: "Premium", collection: "Sovereign" },
  
  // RUINATION COLLECTION
  { id: "ruination-phantom", name: "Ruination Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/279e0a89-4dd6-b135-cef9-8ebb1df6f2ac/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-ghost", name: "Ruination Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/5e1f5465-40cd-2c0f-33ab-398c5367d080/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-spectre", name: "Ruination Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/87220abc-49a9-7472-ae09-29a6d711bbc3/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-guardian", name: "Ruination Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/0e1af0d5-4dee-15db-25b5-31a7da6f1d52/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-blade", name: "Ruination Blade of the Ruined King", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/279e0a89-4dd6-b135-cef9-8ebb1df6f2ac/displayicon.png", tier: "Premium", collection: "Ruination" },
  
  // ORIGIN COLLECTION
  { id: "origin-operator", name: "Origin Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/4d19c241-4350-6658-f5a6-5c99ca8e5e99/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-vandal", name: "Origin Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/1969e379-40ae-b28a-6fb3-819873a24fb9/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-bucky", name: "Origin Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/56042ce2-4f95-19be-7cac-5fb191683953/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-shorty", name: "Origin Shorty", weaponName: "Shorty", weaponId: "shorty", image: "https://media.valorant-api.com/weaponskinlevels/c4547e69-47a7-dc52-d09c-94bbf87dba0a/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-odin", name: "Origin Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/c96d991e-4807-5eee-0289-90b82f9be205/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-crescent", name: "Origin Crescent Blade", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/5f059d7e-413c-445c-e36f-9a9791fba5b0/displayicon.png", tier: "Ultra", collection: "Origin" },
  
  // CHAMPIONS COLLECTION
  { id: "champions-2021-vandal", name: "Champions 2021 Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/9f51da57-4623-415a-6313-f49588297d0e/displayicon.png", tier: "Exclusive", collection: "Champions" },
  { id: "champions-2022-phantom", name: "Champions 2022 Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/524b0c42-47da-e7ca-dc04-85ba285b2e71/displayicon.png", tier: "Exclusive", collection: "Champions" },
  { id: "champions-2022-butterfly", name: "Champions 2022 Butterfly Knife", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/ba0abff4-41e4-4036-980d-90a55837b692/displayicon.png", tier: "Exclusive", collection: "Champions" },
  { id: "champions-2023-vandal", name: "Champions 2023 Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/69f94fda-4603-744a-87fe-2391be7462e8/displayicon.png", tier: "Exclusive", collection: "Champions" },
  
  // FORSAKEN COLLECTION
  { id: "forsaken-vandal", name: "Forsaken Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/851b390a-4852-66bd-8b72-4f96f0919710/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-operator", name: "Forsaken Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/10a5fe91-4efa-9d6b-44f7-47ae9660550d/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-spectre", name: "Forsaken Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/daa73753-4b56-9d21-d73e-f3b3f4c9b1a6/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-classic", name: "Forsaken Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/81658642-4f78-cbb4-9e40-b8856a904bc7/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-ares", name: "Forsaken Ares", weaponName: "Ares", weaponId: "ares", image: "https://media.valorant-api.com/weaponskinlevels/daa73753-4b56-9d21-d73e-f3b3f4c9b1a6/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-ritual", name: "Forsaken Ritual Blade", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/5fecfd43-4bec-4e6a-842c-84860853df82/displayicon.png", tier: "Premium", collection: "Forsaken" },
  
  // NEPTUNE COLLECTION
  { id: "neptune-vandal", name: "Neptune Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/49cea67c-4552-13c2-6b4b-8ba07761504e/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-ghost", name: "Neptune Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/b52673c5-4494-0fc4-db5a-7ea686b63569/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-shorty", name: "Neptune Shorty", weaponName: "Shorty", weaponId: "shorty", image: "https://media.valorant-api.com/weaponskinlevels/93266c2b-400f-da62-24a0-739f51d33cc1/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-guardian", name: "Neptune Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/c9ceffba-471d-ed6c-04a5-11b71bef3f60/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-anchor", name: "Neptune Anchor", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/85db497e-4b7d-dd9d-bc09-6d926158ed74/displayicon.png", tier: "Premium", collection: "Neptune" },
  
  // ARAXYS COLLECTION
  { id: "araxys-vandal", name: "Araxys Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/a3dba920-44ee-d7c5-5227-99a80aee3bd9/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-operator", name: "Araxys Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/bf2da3c9-43aa-5a37-9958-2a805298951f/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-bulldog", name: "Araxys Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/45e51d17-480a-6e28-cdd2-459d7758bea8/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-sheriff", name: "Araxys Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/d58e1881-4126-9c75-347d-67bab6b98fb2/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-tail", name: "Araxys Tail", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/4351b2ed-42a1-4d84-804b-2f8d695e5069/displayicon.png", tier: "Ultra", collection: "Araxys" },
  
  // MAGEPUNK COLLECTION
  { id: "magepunk-spectre", name: "Magepunk Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/7e45e9cd-4072-cc32-0898-d09c167cc0f9/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-ghost", name: "Magepunk Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/003e0991-4370-8837-f8fc-6ab3acec2dbf/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-bucky", name: "Magepunk Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/78776175-4040-282f-07a1-0199b1fdcf58/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-ares", name: "Magepunk Ares", weaponName: "Ares", weaponId: "ares", image: "https://media.valorant-api.com/weaponskinlevels/857ad950-486a-d199-7bf2-7092aaf88ae2/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-shock", name: "Magepunk Shock Gauntlet", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/c5ec6a47-40c2-66ed-d546-5bad1eef6fd5/displayicon.png", tier: "Premium", collection: "Magepunk" },
  
  // PRELUDE TO CHAOS COLLECTION
  { id: "prelude-vandal", name: "Prelude to Chaos Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/1010fb40-4344-6ec8-2a8a-33bf076339b6/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-operator", name: "Prelude to Chaos Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/7c89312b-45fb-a892-4525-659ba3de4475/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-classic", name: "Prelude to Chaos Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/09fded5d-4add-00e7-d3c4-32b8f21c7944/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-spectre", name: "Prelude to Chaos Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/1fcfdca5-4998-85d9-eede-f9a8b21349be/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-dagger", name: "Prelude to Chaos Dagger", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/1010fb40-4344-6ec8-2a8a-33bf076339b6/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
];

export const getTierCounts = () => {
  return {
    Select: allSkins.filter(s => s.tier === "Select").length,
    Deluxe: allSkins.filter(s => s.tier === "Deluxe").length,
    Premium: allSkins.filter(s => s.tier === "Premium").length,
    Ultra: allSkins.filter(s => s.tier === "Ultra").length,
    Exclusive: allSkins.filter(s => s.tier === "Exclusive").length,
  };
};

export const getCollectionCounts = () => {
  const counts: Record<string, number> = {};
  collections.forEach(c => {
    counts[c] = allSkins.filter(s => s.collection === c).length;
  });
  return counts;
};

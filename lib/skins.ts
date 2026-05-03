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
  { id: "prime-vandal", name: "Prime Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/32c30b75-4e7d-b3ce-06de-03b11fb8bff6/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-phantom", name: "Prime Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/15d5bf24-4b52-a14e-5c1e-f8b7cb9df388/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-spectre", name: "Prime Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/a3c2c8f1-42ba-63df-a2c3-07a27f2acf4e/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-guardian", name: "Prime Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/8f18d487-44d3-4836-b629-5e8b9244a2b5/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-classic", name: "Prime Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/34019dca-4fd9-21b3-7110-bf8d498e58c7/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-axe", name: "Prime Axe", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/f3f76d61-4e54-eecf-d8bb-0688d33e9dd2/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-frenzy", name: "Prime Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/4f41e8c6-4e03-dc4e-b1ff-8d9f569b83a5/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-2-phantom", name: "Prime//2.0 Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/dc2d3a4d-467a-d556-82c5-0db9fc3cde3b/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-2-odin", name: "Prime//2.0 Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/e42eae52-4889-24b6-5b82-d8a4a6e69f8d/displayicon.png", tier: "Premium", collection: "Prime" },
  { id: "prime-2-bucky", name: "Prime//2.0 Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/2a7d9c90-45e3-bc18-0d5c-2c8f90ad5ac8/displayicon.png", tier: "Premium", collection: "Prime" },
  
  // REAVER COLLECTION
  { id: "reaver-vandal", name: "Reaver Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/3aade0bf-4a1c-fad3-f560-f2b1ac520276/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-operator", name: "Reaver Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/e28a1b98-4dca-43cb-bdf8-0eb9d88bc838/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-sheriff", name: "Reaver Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/6a60a3d3-4d39-b2c8-5c6f-0f89588779c6/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-ghost", name: "Reaver Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/c9465fbd-4c1f-fa40-d5ba-08b9d605a3a8/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-guardian", name: "Reaver Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/75e648ab-4723-c16e-8a48-35b9d9f6f0f0/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-karambit", name: "Reaver Karambit", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/0519d01b-4f89-cdc4-8237-1395d86c91f5/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-spectre", name: "Reaver Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/b84f31c2-4c33-bc1e-b3e3-71b6b4f5b858/displayicon.png", tier: "Premium", collection: "Reaver" },
  { id: "reaver-phantom", name: "Reaver Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/f5ea8e08-4b57-a10e-9a5d-e0b2c3f74c4e/displayicon.png", tier: "Premium", collection: "Reaver" },
  
  // ELDERFLAME COLLECTION
  { id: "elderflame-vandal", name: "Elderflame Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/68953fa5-4e5a-5e58-d9e2-5a9a3a04c24e/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-operator", name: "Elderflame Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/7ad847fe-4c2a-30a6-3a87-1c9bbb82ad37/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-judge", name: "Elderflame Judge", weaponName: "Judge", weaponId: "judge", image: "https://media.valorant-api.com/weaponskinlevels/08b6cc28-4db1-aa3c-e68c-51bbb16f7e24/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-frenzy", name: "Elderflame Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/34ea8a70-42c3-f5a0-8a97-5d8b4c2b2c53/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-dagger", name: "Elderflame Dagger", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/4ce83e91-4bb5-3055-de47-d3aa5fb1e723/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  { id: "elderflame-sheriff", name: "Elderflame Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/88433d90-4816-65e3-d8a4-ab9a0f8e2ced/displayicon.png", tier: "Ultra", collection: "Elderflame" },
  
  // ION COLLECTION
  { id: "ion-phantom", name: "Ion Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/fa8556b2-4a46-e7ce-f765-7a8e62ebcff1/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-operator", name: "Ion Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/b86f4ab4-4ce8-23f1-e419-95abd232e9e5/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-sheriff", name: "Ion Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/ca8d28df-4b9a-dd06-5d83-07959b71c5ab/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-bucky", name: "Ion Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/45826de1-4a30-d0fb-5a06-72be3a40a1b8/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-energy-sword", name: "Ion Energy Sword", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/3a37bc99-433f-31b4-a145-9abc8cc4ab2b/displayicon.png", tier: "Premium", collection: "Ion" },
  { id: "ion-guardian", name: "Ion Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/c96bc79b-4d42-0db1-3f31-e59e0afe0c15/displayicon.png", tier: "Premium", collection: "Ion" },
  
  // GLITCHPOP COLLECTION
  { id: "glitchpop-vandal", name: "Glitchpop Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/47bf5ebc-46c8-d089-53e1-e09ff1cb0b8c/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-phantom", name: "Glitchpop Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/f09d7ea7-4379-14a4-1149-37b97b48818c/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-operator", name: "Glitchpop Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/1d8a19b9-4d7e-a94a-77b2-9f9c65ec893c/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-judge", name: "Glitchpop Judge", weaponName: "Judge", weaponId: "judge", image: "https://media.valorant-api.com/weaponskinlevels/cee0e85a-40b3-0f25-5f6d-49802e29c5bf/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-frenzy", name: "Glitchpop Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/b7ba4abf-4e89-2c0e-fabc-4caef26ad7da/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-bulldog", name: "Glitchpop Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/ab08e23c-4dfc-ce62-7dcd-c8b16a2f4831/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-odin", name: "Glitchpop Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/a3ce0c48-4b8a-ab10-7c33-bf89fa88d632/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-classic", name: "Glitchpop Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/2f9e4abc-4e4f-1a72-24a3-079f61ea92e8/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-axe", name: "Glitchpop Axe", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/7e8b8b2c-40a8-db3a-be46-2bb9bbb8a33d/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  { id: "glitchpop-marshal", name: "Glitchpop Marshal", weaponName: "Marshal", weaponId: "marshal", image: "https://media.valorant-api.com/weaponskinlevels/de5cb32f-4a5c-af5c-6ac2-75be2fb04bd0/displayicon.png", tier: "Premium", collection: "Glitchpop" },
  
  // ONI COLLECTION
  { id: "oni-phantom", name: "Oni Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/88ad25ed-4011-3c4b-3f1f-9ab9f8cb53ab/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-shorty", name: "Oni Shorty", weaponName: "Shorty", weaponId: "shorty", image: "https://media.valorant-api.com/weaponskinlevels/e1823d77-4f38-d2a9-b073-1eb1a2d58f17/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-bucky", name: "Oni Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/f7d66e35-41e3-b01d-50b9-c5b32ff5cbcb/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-guardian", name: "Oni Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/2c8ac4a0-4cfd-2ead-d3bc-c78c7afc0b52/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-spectre", name: "Oni Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/a7e08c5a-41c6-9e32-8c3a-ffb1c4d2da03/displayicon.png", tier: "Premium", collection: "Oni" },
  { id: "oni-claw", name: "Oni Claw", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/eb8f8d11-4aef-2a4b-d2b2-f7b0ebb47f75/displayicon.png", tier: "Premium", collection: "Oni" },
  
  // SINGULARITY COLLECTION
  { id: "singularity-phantom", name: "Singularity Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/4d6bfef2-4b5f-f152-d7fb-3f917d6e9e9b/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-spectre", name: "Singularity Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/06896a99-4a9f-2e00-aa2f-8c87dc498e45/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-sheriff", name: "Singularity Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/bb9cf47f-4f85-38b6-0e8d-b6a6e55a8d0b/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-ares", name: "Singularity Ares", weaponName: "Ares", weaponId: "ares", image: "https://media.valorant-api.com/weaponskinlevels/8a2e1a8a-4fcb-a6bc-1e5b-c2a3d3e2a14c/displayicon.png", tier: "Ultra", collection: "Singularity" },
  { id: "singularity-knife", name: "Singularity Knife", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/c06fef58-4bc8-d88c-6e35-55bf21f93db9/displayicon.png", tier: "Ultra", collection: "Singularity" },
  
  // RGX 11z PRO COLLECTION
  { id: "rgx-vandal", name: "RGX 11z Pro Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/c56a4ece-4cf9-b4f3-e4a9-f7a3b2dd04f4/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-phantom", name: "RGX 11z Pro Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/f5e3d0dd-4f84-0e8c-0e0e-dd8d6ff2c65b/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-operator", name: "RGX 11z Pro Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/5e8e8e0a-4fcb-a33a-1f1b-f4b5c8a9ed2c/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-stinger", name: "RGX 11z Pro Stinger", weaponName: "Stinger", weaponId: "stinger", image: "https://media.valorant-api.com/weaponskinlevels/4c0a0bc8-493a-1e7c-c1b3-18c9c1d4e64d/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-frenzy", name: "RGX 11z Pro Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/8bf14ad3-437b-4f62-001c-cf8eb613e1bd/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-blade", name: "RGX 11z Pro Blade", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/ac3b2a42-4eb6-92c2-f3a9-a3869b1ed0a0/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  { id: "rgx-spectre", name: "RGX 11z Pro Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/2c9d0e9f-48b2-8a7a-5e4e-7f3b6d9c1a8c/displayicon.png", tier: "Ultra", collection: "RGX 11z Pro" },
  
  // SPECTRUM COLLECTION
  { id: "spectrum-phantom", name: "Spectrum Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/f89e5de2-4918-b0d3-a9d6-189a7470925e/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-classic", name: "Spectrum Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/8a79b948-4d3e-5b8a-fd3e-3e88f7b65ce8/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-bulldog", name: "Spectrum Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/f8e5d5ab-48bf-d9a3-1b84-7a6e3c2c0f5b/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-guardian", name: "Spectrum Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/94de8a6e-4eb9-d8ac-b5c7-5a9e6b2f3d4c/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-judge", name: "Spectrum Judge", weaponName: "Judge", weaponId: "judge", image: "https://media.valorant-api.com/weaponskinlevels/ae1973a5-41c9-4dcf-2aab-ad9bdc60b004/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  { id: "spectrum-waveform", name: "Spectrum Waveform", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/5b1a3ab8-48e5-f7c9-3c4e-9d2a8b6e7f4c/displayicon.png", tier: "Ultra", collection: "Spectrum" },
  
  // PROTOCOL 781-A COLLECTION
  { id: "protocol-phantom", name: "Protocol 781-A Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/5e9017c7-42c1-3d08-bf41-7294a148a36e/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-spectre", name: "Protocol 781-A Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/d92a3b4c-4e5f-7a8b-c9d1-2e3f4a5b6c7d/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-bulldog", name: "Protocol 781-A Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/e83f4a5b-6c7d-8e9f-a1b2-3c4d5e6f7a8b/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-sheriff", name: "Protocol 781-A Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/f94a5b6c-7d8e-9f1a-2b3c-4d5e6f7a8b9c/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  { id: "protocol-sword", name: "Protocol 781-A Personal Administrative Melee Unit", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/a05b6c7d-8e9f-1a2b-3c4d-5e6f7a8b9c0d/displayicon.png", tier: "Ultra", collection: "Protocol 781-A" },
  
  // BLASTX COLLECTION
  { id: "blastx-phantom", name: "BlastX Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/dc4c5634-4f09-d6d0-cff6-0aa60a9a3815/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-spectre", name: "BlastX Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/8e7f6a5b-4c3d-2e1f-0a9b-8c7d6e5f4a3b/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-frenzy", name: "BlastX Frenzy", weaponName: "Frenzy", weaponId: "frenzy", image: "https://media.valorant-api.com/weaponskinlevels/9f8a7b6c-5d4e-3f2a-1b0c-9d8e7f6a5b4c/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-odin", name: "BlastX Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/a09b8c7d-6e5f-4a3b-2c1d-0e9f8a7b6c5d/displayicon.png", tier: "Premium", collection: "BlastX" },
  { id: "blastx-polymer", name: "BlastX Polymer KnifeTech Coated Knife", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/b1a0c9d8-7e6f-5a4b-3c2d-1e0f9a8b7c6d/displayicon.png", tier: "Premium", collection: "BlastX" },
  
  // SOVEREIGN COLLECTION
  { id: "sovereign-ghost", name: "Sovereign Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/ec47e794-4cd9-ffc0-4e80-1e89c4ed8f34/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-stinger", name: "Sovereign Stinger", weaponName: "Stinger", weaponId: "stinger", image: "https://media.valorant-api.com/weaponskinlevels/3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-guardian", name: "Sovereign Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-marshal", name: "Sovereign Marshal", weaponName: "Marshal", weaponId: "marshal", image: "https://media.valorant-api.com/weaponskinlevels/5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b/displayicon.png", tier: "Premium", collection: "Sovereign" },
  { id: "sovereign-sword", name: "Sovereign Sword", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c/displayicon.png", tier: "Premium", collection: "Sovereign" },
  
  // RUINATION COLLECTION
  { id: "ruination-phantom", name: "Ruination Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-ghost", name: "Ruination Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/36fc57d7-4aad-3a08-a3de-2a9bd4e68979/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-spectre", name: "Ruination Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-guardian", name: "Ruination Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f/displayicon.png", tier: "Premium", collection: "Ruination" },
  { id: "ruination-blade", name: "Ruination Blade of the Ruined King", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a/displayicon.png", tier: "Premium", collection: "Ruination" },
  
  // ORIGIN COLLECTION
  { id: "origin-operator", name: "Origin Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/01bc45fe-4c7c-ab18-53b7-868df61f04a9/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-vandal", name: "Origin Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-bucky", name: "Origin Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/2f3a4b5c-6d7e-8f9a-0b1c-2d3e4f5a6b7c/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-shorty", name: "Origin Shorty", weaponName: "Shorty", weaponId: "shorty", image: "https://media.valorant-api.com/weaponskinlevels/3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-odin", name: "Origin Odin", weaponName: "Odin", weaponId: "odin", image: "https://media.valorant-api.com/weaponskinlevels/c8f70ddd-4831-4cc6-ef6c-1698c6f87b8c/displayicon.png", tier: "Ultra", collection: "Origin" },
  { id: "origin-crescent", name: "Origin Crescent Blade", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/4b5c6d7e-8f9a-0b1c-2d3e-4f5a6b7c8d9e/displayicon.png", tier: "Ultra", collection: "Origin" },
  
  // CHAMPIONS COLLECTION
  { id: "champions-2021-vandal", name: "Champions 2021 Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/0fd9b1aa-453e-4adb-ff86-b2988c66ff45/displayicon.png", tier: "Exclusive", collection: "Champions" },
  { id: "champions-2022-phantom", name: "Champions 2022 Phantom", weaponName: "Phantom", weaponId: "phantom", image: "https://media.valorant-api.com/weaponskinlevels/5c6d7e8f-9a0b-1c2d-3e4f-5a6b7c8d9e0f/displayicon.png", tier: "Exclusive", collection: "Champions" },
  { id: "champions-2022-butterfly", name: "Champions 2022 Butterfly Knife", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/5b79e9e8-418b-8946-ae2d-72b57efe5776/displayicon.png", tier: "Exclusive", collection: "Champions" },
  { id: "champions-2023-vandal", name: "Champions 2023 Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/6d7e8f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a/displayicon.png", tier: "Exclusive", collection: "Champions" },
  
  // FORSAKEN COLLECTION
  { id: "forsaken-vandal", name: "Forsaken Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-operator", name: "Forsaken Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/8f9a0b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-spectre", name: "Forsaken Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/9a0b1c2d-3e4f-5a6b-7c8d-9e0f1a2b3c4d/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-classic", name: "Forsaken Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/0b1c2d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-ares", name: "Forsaken Ares", weaponName: "Ares", weaponId: "ares", image: "https://media.valorant-api.com/weaponskinlevels/e21cdad7-43cc-2c27-6a52-3aaeb68c6c63/displayicon.png", tier: "Premium", collection: "Forsaken" },
  { id: "forsaken-ritual", name: "Forsaken Ritual Blade", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/1c2d3e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f/displayicon.png", tier: "Premium", collection: "Forsaken" },
  
  // NEPTUNE COLLECTION
  { id: "neptune-vandal", name: "Neptune Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/2d3e4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-ghost", name: "Neptune Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/3e4f5a6b-7c8d-9e0f-1a2b-3c4d5e6f7a8b/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-shorty", name: "Neptune Shorty", weaponName: "Shorty", weaponId: "shorty", image: "https://media.valorant-api.com/weaponskinlevels/4f5a6b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-guardian", name: "Neptune Guardian", weaponName: "Guardian", weaponId: "guardian", image: "https://media.valorant-api.com/weaponskinlevels/5a6b7c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d/displayicon.png", tier: "Premium", collection: "Neptune" },
  { id: "neptune-anchor", name: "Neptune Anchor", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/6b7c8d9e-0f1a-2b3c-4d5e-6f7a8b9c0d1e/displayicon.png", tier: "Premium", collection: "Neptune" },
  
  // ARAXYS COLLECTION
  { id: "araxys-vandal", name: "Araxys Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/7c8d9e0f-1a2b-3c4d-5e6f-7a8b9c0d1e2f/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-operator", name: "Araxys Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/8d9e0f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-bulldog", name: "Araxys Bulldog", weaponName: "Bulldog", weaponId: "bulldog", image: "https://media.valorant-api.com/weaponskinlevels/9e0f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-sheriff", name: "Araxys Sheriff", weaponName: "Sheriff", weaponId: "sheriff", image: "https://media.valorant-api.com/weaponskinlevels/0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c/displayicon.png", tier: "Ultra", collection: "Araxys" },
  { id: "araxys-tail", name: "Araxys Tail", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d/displayicon.png", tier: "Ultra", collection: "Araxys" },
  
  // MAGEPUNK COLLECTION
  { id: "magepunk-spectre", name: "Magepunk Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-ghost", name: "Magepunk Ghost", weaponName: "Ghost", weaponId: "ghost", image: "https://media.valorant-api.com/weaponskinlevels/3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-bucky", name: "Magepunk Bucky", weaponName: "Bucky", weaponId: "bucky", image: "https://media.valorant-api.com/weaponskinlevels/4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-ares", name: "Magepunk Ares", weaponName: "Ares", weaponId: "ares", image: "https://media.valorant-api.com/weaponskinlevels/5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b/displayicon.png", tier: "Premium", collection: "Magepunk" },
  { id: "magepunk-shock", name: "Magepunk Shock Gauntlet", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c/displayicon.png", tier: "Premium", collection: "Magepunk" },
  
  // PRELUDE TO CHAOS COLLECTION
  { id: "prelude-vandal", name: "Prelude to Chaos Vandal", weaponName: "Vandal", weaponId: "vandal", image: "https://media.valorant-api.com/weaponskinlevels/7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-operator", name: "Prelude to Chaos Operator", weaponName: "Operator", weaponId: "operator", image: "https://media.valorant-api.com/weaponskinlevels/8b9c0d1e-2f3a-4b5c-6d7e-8f9a0b1c2d3e/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-classic", name: "Prelude to Chaos Classic", weaponName: "Classic", weaponId: "classic", image: "https://media.valorant-api.com/weaponskinlevels/9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-spectre", name: "Prelude to Chaos Spectre", weaponName: "Spectre", weaponId: "spectre", image: "https://media.valorant-api.com/weaponskinlevels/0d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
  { id: "prelude-dagger", name: "Prelude to Chaos Dagger", weaponName: "Melee", weaponId: "knife", image: "https://media.valorant-api.com/weaponskinlevels/1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b/displayicon.png", tier: "Ultra", collection: "Prelude to Chaos" },
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

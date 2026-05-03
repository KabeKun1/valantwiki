export interface WeaponSkin {
  id: string;
  name: string;
  image: string;
  tier: "Select" | "Deluxe" | "Premium" | "Ultra" | "Exclusive";
}

export interface Weapon {
  id: string;
  name: string;
  category: "Sidearm" | "SMG" | "Shotgun" | "Rifle" | "Sniper" | "Machine Gun" | "Melee";
  cost: number;
  fireRate: number;
  magazineSize: number;
  wallPenetration: "Low" | "Medium" | "High";
  image: string;
  skins: WeaponSkin[];
}

export const weapons: Weapon[] = [
  // SIDEARMS
  {
    id: "classic",
    name: "Classic",
    category: "Sidearm",
    cost: 0,
    fireRate: 6.75,
    magazineSize: 12,
    wallPenetration: "Low",
    image: "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/displayicon.png",
    skins: [
      { id: "classic-default", name: "Default", image: "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/displayicon.png", tier: "Select" },
      { id: "classic-prime", name: "Prime Classic", image: "https://media.valorant-api.com/weaponskins/4c8863a9-4c76-7c1d-68b9-3298b28bf60a/displayicon.png", tier: "Premium" },
      { id: "classic-recon", name: "Recon Classic", image: "https://media.valorant-api.com/weaponskins/02538c73-4ef5-3bbe-96bb-1091c5c67b76/displayicon.png", tier: "Select" },
      { id: "classic-spectrum", name: "Spectrum Classic", image: "https://media.valorant-api.com/weaponskins/e0ed7c3a-413a-e993-d7ab-f2a6fd7e7db7/displayicon.png", tier: "Ultra" },
      { id: "classic-glitchpop", name: "Glitchpop Classic", image: "https://media.valorant-api.com/weaponskins/8cca52be-42ed-18f4-0706-6aa6efc7a01e/displayicon.png", tier: "Premium" },
    ],
  },
  {
    id: "shorty",
    name: "Shorty",
    category: "Sidearm",
    cost: 150,
    fireRate: 3.3,
    magazineSize: 2,
    wallPenetration: "Low",
    image: "https://media.valorant-api.com/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda/displayicon.png",
    skins: [
      { id: "shorty-default", name: "Default", image: "https://media.valorant-api.com/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda/displayicon.png", tier: "Select" },
      { id: "shorty-aerosol", name: "Aerosol Shorty", image: "https://media.valorant-api.com/weaponskinlevels/59e74f99-4e15-fe96-4b14-8793fd6a8553/displayicon.png", tier: "Deluxe" },
    ],
  },
  {
    id: "frenzy",
    name: "Frenzy",
    category: "Sidearm",
    cost: 450,
    fireRate: 10,
    magazineSize: 13,
    wallPenetration: "Low",
    image: "https://media.valorant-api.com/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3/displayicon.png",
    skins: [
      { id: "frenzy-default", name: "Default", image: "https://media.valorant-api.com/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3/displayicon.png", tier: "Select" },
      { id: "frenzy-prime", name: "Prime Frenzy", image: "https://media.valorant-api.com/weaponskinlevels/4f41e8c6-4e03-dc4e-b1ff-8d9f569b83a5/displayicon.png", tier: "Premium" },
      { id: "frenzy-rgx", name: "RGX 11z Pro Frenzy", image: "https://media.valorant-api.com/weaponskinlevels/8bf14ad3-437b-4f62-001c-cf8eb613e1bd/displayicon.png", tier: "Ultra" },
    ],
  },
  {
    id: "ghost",
    name: "Ghost",
    category: "Sidearm",
    cost: 500,
    fireRate: 6.75,
    magazineSize: 15,
    wallPenetration: "Medium",
    image: "https://media.valorant-api.com/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/displayicon.png",
    skins: [
      { id: "ghost-default", name: "Default", image: "https://media.valorant-api.com/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/displayicon.png", tier: "Select" },
      { id: "ghost-sovereign", name: "Sovereign Ghost", image: "https://media.valorant-api.com/weaponskins/8af2eeab-485e-0199-f29c-ddb1dce7c6bf/displayicon.png", tier: "Premium" },
      { id: "ghost-reaver", name: "Reaver Ghost", image: "https://media.valorant-api.com/weaponskins/2cab95f7-48ce-3a27-1e13-05bf92565588/displayicon.png", tier: "Premium" },
      { id: "ghost-ruination", name: "Ruination Ghost", image: "https://media.valorant-api.com/weaponskins/b3d8c519-4f4e-e3ec-c9db-64b2dcb59f6e/displayicon.png", tier: "Premium" },
      { id: "ghost-oni", name: "Oni Ghost", image: "https://media.valorant-api.com/weaponskins/21e43c5d-437a-3d10-b512-5abd79d12f9d/displayicon.png", tier: "Premium" },
    ],
  },
  {
    id: "sheriff",
    name: "Sheriff",
    category: "Sidearm",
    cost: 800,
    fireRate: 4,
    magazineSize: 6,
    wallPenetration: "High",
    image: "https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/displayicon.png",
    skins: [
      { id: "sheriff-default", name: "Default", image: "https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/displayicon.png", tier: "Select" },
      { id: "sheriff-ion", name: "Ion Sheriff", image: "https://media.valorant-api.com/weaponskinlevels/ca8d28df-4b9a-dd06-5d83-07959b71c5ab/displayicon.png", tier: "Premium" },
      { id: "sheriff-elderflame", name: "Elderflame Sheriff", image: "https://media.valorant-api.com/weaponskinlevels/88433d90-4816-65e3-d8a4-ab9a0f8e2ced/displayicon.png", tier: "Ultra" },
      { id: "sheriff-peacekeeper", name: "Peacekeeper Sheriff", image: "https://media.valorant-api.com/weaponskinlevels/15f8eb3c-4f8f-bb7a-caa3-a799faf3b56c/displayicon.png", tier: "Deluxe" },
    ],
  },
  // SMGs
  {
    id: "stinger",
    name: "Stinger",
    category: "SMG",
    cost: 950,
    fireRate: 18,
    magazineSize: 20,
    wallPenetration: "Low",
    image: "https://media.valorant-api.com/weapons/f7e1b454-4ad4-1063-ec0a-159e56b58941/displayicon.png",
    skins: [
      { id: "stinger-default", name: "Default", image: "https://media.valorant-api.com/weapons/f7e1b454-4ad4-1063-ec0a-159e56b58941/displayicon.png", tier: "Select" },
      { id: "stinger-nebula", name: "Nebula Stinger", image: "https://media.valorant-api.com/weaponskinlevels/4c20c5f0-4388-55e4-06dd-1c9327f14382/displayicon.png", tier: "Select" },
    ],
  },
  {
    id: "spectre",
    name: "Spectre",
    category: "SMG",
    cost: 1600,
    fireRate: 13.33,
    magazineSize: 30,
    wallPenetration: "Medium",
    image: "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png",
    skins: [
      { id: "spectre-default", name: "Default", image: "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png", tier: "Select" },
      { id: "spectre-oni", name: "Oni Spectre", image: "https://media.valorant-api.com/weaponskinlevels/a7e08c5a-41c6-9e32-8c3a-ffb1c4d2da03/displayicon.png", tier: "Premium" },
      { id: "spectre-singularity", name: "Singularity Spectre", image: "https://media.valorant-api.com/weaponskinlevels/06896a99-4a9f-2e00-aa2f-8c87dc498e45/displayicon.png", tier: "Ultra" },
      { id: "spectre-minima", name: "Minima Spectre", image: "https://media.valorant-api.com/weaponskinlevels/2a739ff8-420d-0f82-0d84-5fb1c0888135/displayicon.png", tier: "Deluxe" },
    ],
  },
  // SHOTGUNS
  {
    id: "bucky",
    name: "Bucky",
    category: "Shotgun",
    cost: 850,
    fireRate: 1.1,
    magazineSize: 5,
    wallPenetration: "Low",
    image: "https://media.valorant-api.com/weapons/910be174-449b-c412-ab22-d0873436b21b/displayicon.png",
    skins: [
      { id: "bucky-default", name: "Default", image: "https://media.valorant-api.com/weapons/910be174-449b-c412-ab22-d0873436b21b/displayicon.png", tier: "Select" },
      { id: "bucky-kingdom", name: "Kingdom Bucky", image: "https://media.valorant-api.com/weaponskinlevels/6070eead-48cd-6e71-fa97-bf9e3e78821a/displayicon.png", tier: "Select" },
    ],
  },
  {
    id: "judge",
    name: "Judge",
    category: "Shotgun",
    cost: 1850,
    fireRate: 3.5,
    magazineSize: 7,
    wallPenetration: "Medium",
    image: "https://media.valorant-api.com/weapons/ec845bf4-4f79-ddda-a3da-0db3774b2794/displayicon.png",
    skins: [
      { id: "judge-default", name: "Default", image: "https://media.valorant-api.com/weapons/ec845bf4-4f79-ddda-a3da-0db3774b2794/displayicon.png", tier: "Select" },
      { id: "judge-spectrum", name: "Spectrum Judge", image: "https://media.valorant-api.com/weaponskinlevels/ae1973a5-41c9-4dcf-2aab-ad9bdc60b004/displayicon.png", tier: "Ultra" },
    ],
  },
  // RIFLES
  {
    id: "bulldog",
    name: "Bulldog",
    category: "Rifle",
    cost: 2050,
    fireRate: 9.15,
    magazineSize: 24,
    wallPenetration: "Medium",
    image: "https://media.valorant-api.com/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7/displayicon.png",
    skins: [
      { id: "bulldog-default", name: "Default", image: "https://media.valorant-api.com/weapons/ae3de142-4d85-2547-dd26-4e90bed35cf7/displayicon.png", tier: "Select" },
      { id: "bulldog-prism", name: "Prism II Bulldog", image: "https://media.valorant-api.com/weaponskinlevels/a57c92da-408e-d837-51a6-92bcbb52e640/displayicon.png", tier: "Deluxe" },
    ],
  },
  {
    id: "guardian",
    name: "Guardian",
    category: "Rifle",
    cost: 2250,
    fireRate: 5.25,
    magazineSize: 12,
    wallPenetration: "High",
    image: "https://media.valorant-api.com/weapons/4ade7faa-4cf1-8376-95ef-39884480959b/displayicon.png",
    skins: [
      { id: "guardian-default", name: "Default", image: "https://media.valorant-api.com/weapons/4ade7faa-4cf1-8376-95ef-39884480959b/displayicon.png", tier: "Select" },
      { id: "guardian-reaver", name: "Reaver Guardian", image: "https://media.valorant-api.com/weaponskinlevels/75e648ab-4723-c16e-8a48-35b9d9f6f0f0/displayicon.png", tier: "Premium" },
      { id: "guardian-ion", name: "Ion Guardian", image: "https://media.valorant-api.com/weaponskinlevels/c96bc79b-4d42-0db1-3f31-e59e0afe0c15/displayicon.png", tier: "Premium" },
    ],
  },
  {
    id: "phantom",
    name: "Phantom",
    category: "Rifle",
    cost: 2900,
    fireRate: 11,
    magazineSize: 30,
    wallPenetration: "Medium",
    image: "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png",
    skins: [
      { id: "phantom-default", name: "Default", image: "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png", tier: "Select" },
      { id: "phantom-oni", name: "Oni Phantom", image: "https://media.valorant-api.com/weaponskins/fa0b37dc-4f93-6dd8-7e14-108aef5c2d1f/displayicon.png", tier: "Premium" },
      { id: "phantom-prime", name: "Prime Phantom", image: "https://media.valorant-api.com/weaponskins/0e273994-44d7-9cec-79ca-da9bae30959f/displayicon.png", tier: "Premium" },
      { id: "phantom-spectrum", name: "Spectrum Phantom", image: "https://media.valorant-api.com/weaponskins/b8118c0f-441c-0fa1-4b41-c990b8d38e16/displayicon.png", tier: "Ultra" },
      { id: "phantom-protocol", name: "Protocol 781-A Phantom", image: "https://media.valorant-api.com/weaponskins/50543ec3-4b98-da30-1e16-8c9a91dbf1c9/displayicon.png", tier: "Ultra" },
      { id: "phantom-ion", name: "Ion Phantom", image: "https://media.valorant-api.com/weaponskins/efe47ed6-4e04-e91a-d5d6-adb13d52ca7a/displayicon.png", tier: "Premium" },
      { id: "phantom-reaver", name: "Reaver Phantom", image: "https://media.valorant-api.com/weaponskins/6c1b4a7f-4fed-2e22-ccbe-cb82e91e97fb/displayicon.png", tier: "Premium" },
      { id: "phantom-glitchpop", name: "Glitchpop Phantom", image: "https://media.valorant-api.com/weaponskins/30e2a955-45ec-1d91-4b8f-6b9a55dee8cd/displayicon.png", tier: "Premium" },
    ],
  },
  {
    id: "vandal",
    name: "Vandal",
    category: "Rifle",
    cost: 2900,
    fireRate: 9.75,
    magazineSize: 25,
    wallPenetration: "Medium",
    image: "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png",
    skins: [
      { id: "vandal-default", name: "Default", image: "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png", tier: "Select" },
      { id: "vandal-elderflame", name: "Elderflame Vandal", image: "https://media.valorant-api.com/weaponskins/c5c0951c-4e95-9304-6ab3-45b5ec13a5ef/displayicon.png", tier: "Ultra" },
      { id: "vandal-prime", name: "Prime Vandal", image: "https://media.valorant-api.com/weaponskins/aa0f04fb-4e15-8de2-6a6c-1388e8f4d3b1/displayicon.png", tier: "Premium" },
      { id: "vandal-reaver", name: "Reaver Vandal", image: "https://media.valorant-api.com/weaponskins/e8d8d570-473a-1da2-c11c-e2a08d54dbd5/displayicon.png", tier: "Premium" },
      { id: "vandal-rgx", name: "RGX 11z Pro Vandal", image: "https://media.valorant-api.com/weaponskins/0e99ff0f-4ed6-d47e-3223-c89cdf5b1eaf/displayicon.png", tier: "Ultra" },
      { id: "vandal-champions", name: "Champions 2021 Vandal", image: "https://media.valorant-api.com/weaponskins/8a5f7079-4ebd-0cec-1e86-eca067578595/displayicon.png", tier: "Exclusive" },
      { id: "vandal-glitchpop", name: "Glitchpop Vandal", image: "https://media.valorant-api.com/weaponskins/abb2db62-4c1c-cfcb-14d7-2a8a6fbe3abc/displayicon.png", tier: "Premium" },
      { id: "vandal-ion", name: "Ion Vandal", image: "https://media.valorant-api.com/weaponskins/01c72d05-4b2e-54d5-baac-bc9fcec11a1e/displayicon.png", tier: "Premium" },
    ],
  },
  // SNIPERS
  {
    id: "marshal",
    name: "Marshal",
    category: "Sniper",
    cost: 950,
    fireRate: 1.5,
    magazineSize: 5,
    wallPenetration: "Medium",
    image: "https://media.valorant-api.com/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/displayicon.png",
    skins: [
      { id: "marshal-default", name: "Default", image: "https://media.valorant-api.com/weapons/c4883e50-4494-202c-3ec3-6b8a9284f00b/displayicon.png", tier: "Select" },
      { id: "marshal-glitchpop", name: "Glitchpop Marshal", image: "https://media.valorant-api.com/weaponskinlevels/de5cb32f-4a5c-af5c-6ac2-75be2fb04bd0/displayicon.png", tier: "Premium" },
      { id: "marshal-recon", name: "Recon Marshal", image: "https://media.valorant-api.com/weaponskinlevels/3a20aa7e-4d98-7b8a-2eb5-d3bba2a20b83/displayicon.png", tier: "Select" },
    ],
  },
  {
    id: "outlaw",
    name: "Outlaw",
    category: "Sniper",
    cost: 2400,
    fireRate: 0.75,
    magazineSize: 2,
    wallPenetration: "High",
    image: "https://media.valorant-api.com/weapons/5f0aaf7a-4289-3998-d5ff-eb9a5cf7f5c7/displayicon.png",
    skins: [
      { id: "outlaw-default", name: "Default", image: "https://media.valorant-api.com/weapons/5f0aaf7a-4289-3998-d5ff-eb9a5cf7f5c7/displayicon.png", tier: "Select" },
    ],
  },
  {
    id: "operator",
    name: "Operator",
    category: "Sniper",
    cost: 4700,
    fireRate: 0.6,
    magazineSize: 5,
    wallPenetration: "High",
    image: "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png",
    skins: [
      { id: "operator-default", name: "Default", image: "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png", tier: "Select" },
      { id: "operator-elderflame", name: "Elderflame Operator", image: "https://media.valorant-api.com/weaponskins/fec5d596-4c05-a1f9-fa8f-5cb4a1f9c47d/displayicon.png", tier: "Ultra" },
      { id: "operator-ion", name: "Ion Operator", image: "https://media.valorant-api.com/weaponskins/1e89d00a-4b66-eec0-7ded-069b938ae595/displayicon.png", tier: "Premium" },
      { id: "operator-glitchpop", name: "Glitchpop Operator", image: "https://media.valorant-api.com/weaponskins/e4e15d56-4bf8-e18f-e78f-c9901ff7eaf7/displayicon.png", tier: "Premium" },
      { id: "operator-origin", name: "Origin Operator", image: "https://media.valorant-api.com/weaponskins/6ce45f7a-4e3a-fc3d-4c54-9dacffd5fc78/displayicon.png", tier: "Ultra" },
      { id: "operator-reaver", name: "Reaver Operator", image: "https://media.valorant-api.com/weaponskins/3e04bef3-48c8-c6bd-ad79-b988f93c0b2d/displayicon.png", tier: "Premium" },
      { id: "operator-singularity", name: "Singularity Operator", image: "https://media.valorant-api.com/weaponskins/cc26bb8f-4b16-2afe-25d9-09abe31dc6b6/displayicon.png", tier: "Ultra" },
    ],
  },
  // MACHINE GUNS
  {
    id: "ares",
    name: "Ares",
    category: "Machine Gun",
    cost: 1600,
    fireRate: 13,
    magazineSize: 50,
    wallPenetration: "High",
    image: "https://media.valorant-api.com/weapons/55d8a0f4-4274-ca67-fe2c-06ab45efdf58/displayicon.png",
    skins: [
      { id: "ares-default", name: "Default", image: "https://media.valorant-api.com/weapons/55d8a0f4-4274-ca67-fe2c-06ab45efdf58/displayicon.png", tier: "Select" },
      { id: "ares-forsaken", name: "Forsaken Ares", image: "https://media.valorant-api.com/weaponskinlevels/e21cdad7-43cc-2c27-6a52-3aaeb68c6c63/displayicon.png", tier: "Premium" },
    ],
  },
  {
    id: "odin",
    name: "Odin",
    category: "Machine Gun",
    cost: 3200,
    fireRate: 12,
    magazineSize: 100,
    wallPenetration: "High",
    image: "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png",
    skins: [
      { id: "odin-default", name: "Default", image: "https://media.valorant-api.com/weapons/63e6c2b6-4a8e-869c-3d4c-e38355226584/displayicon.png", tier: "Select" },
      { id: "odin-origin", name: "Origin Odin", image: "https://media.valorant-api.com/weaponskinlevels/c8f70ddd-4831-4cc6-ef6c-1698c6f87b8c/displayicon.png", tier: "Ultra" },
    ],
  },
  // MELEE
  {
    id: "knife",
    name: "Tactical Knife",
    category: "Melee",
    cost: 0,
    fireRate: 0,
    magazineSize: 0,
    wallPenetration: "Low",
    image: "https://media.valorant-api.com/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7/displayicon.png",
    skins: [
      { id: "knife-default", name: "Default", image: "https://media.valorant-api.com/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7/displayicon.png", tier: "Select" },
      { id: "knife-elderflame", name: "Elderflame Dagger", image: "https://media.valorant-api.com/weaponskins/8c396fec-4aab-9434-c4c5-e9b2c9b1e3a9/displayicon.png", tier: "Ultra" },
      { id: "knife-prime", name: "Prime Axe", image: "https://media.valorant-api.com/weaponskins/d33d690e-44f2-0c1f-8e19-afb55ec9d99d/displayicon.png", tier: "Premium" },
      { id: "knife-reaver", name: "Reaver Karambit", image: "https://media.valorant-api.com/weaponskins/de43d4dd-4b9e-fa5c-db76-f5ae1d5cb8e8/displayicon.png", tier: "Premium" },
      { id: "knife-rgx", name: "RGX 11z Pro Blade", image: "https://media.valorant-api.com/weaponskins/65f8b8c4-4ebd-8c07-ff5c-70a4e18d3f02/displayicon.png", tier: "Ultra" },
      { id: "knife-champions", name: "Champions 2022 Butterfly Knife", image: "https://media.valorant-api.com/weaponskins/4c7da88b-47d1-f568-f2e5-d994af75e392/displayicon.png", tier: "Exclusive" },
      { id: "knife-oni", name: "Oni Claw", image: "https://media.valorant-api.com/weaponskins/23d9b08a-4eb0-05f6-d80f-8db9faaf6557/displayicon.png", tier: "Premium" },
      { id: "knife-ion", name: "Ion Energy Sword", image: "https://media.valorant-api.com/weaponskins/a7dcdf69-4e1e-3bec-8e3f-1db8a17a4b96/displayicon.png", tier: "Premium" },
      { id: "knife-glitchpop", name: "Glitchpop Dagger", image: "https://media.valorant-api.com/weaponskins/b3e9f5d8-45cd-de86-1c4f-3abe3f54cef5/displayicon.png", tier: "Premium" },
      { id: "knife-singularity", name: "Singularity Knife", image: "https://media.valorant-api.com/weaponskins/74de7f04-4a8a-c34e-1a37-d89aba9f92b4/displayicon.png", tier: "Ultra" },
    ],
  },
];

export const categories = [
  { id: "all", name: "All Weapons", count: weapons.length },
  { id: "Sidearm", name: "Sidearms", count: weapons.filter(w => w.category === "Sidearm").length },
  { id: "SMG", name: "SMGs", count: weapons.filter(w => w.category === "SMG").length },
  { id: "Shotgun", name: "Shotguns", count: weapons.filter(w => w.category === "Shotgun").length },
  { id: "Rifle", name: "Rifles", count: weapons.filter(w => w.category === "Rifle").length },
  { id: "Sniper", name: "Snipers", count: weapons.filter(w => w.category === "Sniper").length },
  { id: "Machine Gun", name: "Machine Guns", count: weapons.filter(w => w.category === "Machine Gun").length },
  { id: "Melee", name: "Melee", count: weapons.filter(w => w.category === "Melee").length },
];

export const skinTiers = {
  Select: { color: "#5A9A64", label: "Select Edition" },
  Deluxe: { color: "#009587", label: "Deluxe Edition" },
  Premium: { color: "#D1548D", label: "Premium Edition" },
  Ultra: { color: "#FAD663", label: "Ultra Edition" },
  Exclusive: { color: "#F5955B", label: "Exclusive Edition" },
};

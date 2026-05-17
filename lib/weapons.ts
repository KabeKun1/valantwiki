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
      { id: "classic-prime", name: "Prime Classic", image: "https://media.valorant-api.com/weaponskinlevels/c7695ce7-4fc9-1c79-64b3-8c8f9e21571c/displayicon.png", tier: "Premium" },
      { id: "classic-recon", name: "Recon Classic", image: "https://media.valorant-api.com/weaponskins/02538c73-4ef5-3bbe-96bb-1091c5c67b76/displayicon.png", tier: "Select" },
      { id: "classic-spectrum", name: "Spectrum Classic", image: "https://media.valorant-api.com/weaponskinlevels/fe32e4bd-420f-b4cc-de37-febb78df9e16/displayicon.png", tier: "Ultra" },
      { id: "classic-glitchpop", name: "Glitchpop Classic", image: "https://media.valorant-api.com/weaponskinlevels/25cb63cd-416e-ab23-2377-d18638679871/displayicon.png", tier: "Premium" },
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
      { id: "shorty-aerosol", name: "Aerosol Shorty", image: "https://media.valorant-api.com/weaponskinlevels/1db941af-4587-c6a4-5885-dbb77fefcb32/displayicon.png", tier: "Deluxe" },
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
      { id: "frenzy-prime", name: "Prime Frenzy", image: "https://media.valorant-api.com/weaponskinlevels/2607b2c6-45f7-e75e-94f8-58a738773d5c/displayicon.png", tier: "Premium" },
      { id: "frenzy-rgx", name: "RGX 11z Pro Frenzy", image: "https://media.valorant-api.com/weaponskinlevels/6f2aefab-439d-140a-4dc6-87818e2d72cd/displayicon.png", tier: "Ultra" },
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
      { id: "ghost-sovereign", name: "Sovereign Ghost", image: "https://media.valorant-api.com/weaponskinlevels/ed8a1109-4e48-f077-636b-e98dd332bfcc/displayicon.png", tier: "Premium" },
      { id: "ghost-reaver", name: "Reaver Ghost", image: "https://media.valorant-api.com/weaponskinlevels/a6fe7710-4edc-5e23-223d-aeaef3d17866/displayicon.png", tier: "Premium" },
      { id: "ghost-ruination", name: "Ruination Ghost", image: "https://media.valorant-api.com/weaponskinlevels/5e1f5465-40cd-2c0f-33ab-398c5367d080/displayicon.png", tier: "Premium" },
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
      { id: "sheriff-ion", name: "Ion Sheriff", image: "https://media.valorant-api.com/weaponskinlevels/2b555f97-46bb-5949-3531-979f5bc817f0/displayicon.png", tier: "Premium" },
      { id: "sheriff-elderflame", name: "Elderflame Sheriff", image: "https://media.valorant-api.com/weaponskinlevels/5c273d0e-47fa-bb8c-d914-728de95da30e/displayicon.png", tier: "Ultra" },
      { id: "sheriff-peacekeeper", name: "Peacekeeper Sheriff", image: "https://media.valorant-api.com/weaponskinlevels/ec570f46-4751-eeb6-7739-069bcbb8d05a/displayicon.png", tier: "Deluxe" },
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
      { id: "spectre-oni", name: "Oni Spectre", image: "https://media.valorant-api.com/weaponskinlevels/c00e786e-4e6f-0ef7-0ce3-32ba9918ba41/displayicon.png", tier: "Premium" },
      { id: "spectre-singularity", name: "Singularity Spectre", image: "https://media.valorant-api.com/weaponskinlevels/3b955119-421c-3319-50cc-1aaf06b42338/displayicon.png", tier: "Ultra" },
      { id: "spectre-minima", name: "Minima Spectre", image: "https://media.valorant-api.com/weaponskinlevels/1fdbe6f8-42ca-deb2-33da-caa2c4200544/displayicon.png", tier: "Deluxe" },
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
      { id: "bucky-kingdom", name: "Kingdom Bucky", image: "https://media.valorant-api.com/weaponskinlevels/4caa7fb0-4751-52f3-6eed-6ab6232be131/displayicon.png", tier: "Select" },
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
      { id: "judge-spectrum", name: "Spectrum Judge", image: "https://media.valorant-api.com/weaponskinlevels/43854c54-4263-571c-9be6-52b6d50d3190/displayicon.png", tier: "Ultra" },
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
      { id: "guardian-reaver", name: "Reaver Guardian", image: "https://media.valorant-api.com/weaponskinlevels/c9f0ea7f-4bed-b10e-62d2-0394444feed1/displayicon.png", tier: "Premium" },
      { id: "guardian-ion", name: "Ion Guardian", image: "https://media.valorant-api.com/weaponskinlevels/8af83962-4e2f-f58e-588e-ef85e4882b79/displayicon.png", tier: "Premium" },
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
      { id: "phantom-oni", name: "Oni Phantom", image: "https://media.valorant-api.com/weaponskinlevels/c00e786e-4e6f-0ef7-0ce3-32ba9918ba41/displayicon.png", tier: "Premium" },
      { id: "phantom-prime", name: "Prime Phantom", image: "https://media.valorant-api.com/weaponskinlevels/c9678d8c-4327-f397-b0ec-dca3c3d6fb15/displayicon.png", tier: "Premium" },
      { id: "phantom-spectrum", name: "Spectrum Phantom", image: "https://media.valorant-api.com/weaponskinlevels/82db01d1-4192-167b-9f53-78ba374c39ac/displayicon.png", tier: "Ultra" },
      { id: "phantom-protocol", name: "Protocol 781-A Phantom", image: "https://media.valorant-api.com/weaponskinlevels/a7cf8684-41a0-3dd4-e30c-6f9b4b34e635/displayicon.png", tier: "Ultra" },
      { id: "phantom-ion", name: "Ion Phantom", image: "https://media.valorant-api.com/weaponskinlevels/b8bb264c-4578-2410-8dfa-6aacfeb318b0/displayicon.png", tier: "Premium" },
      { id: "phantom-reaver", name: "Reaver Phantom", image: "https://media.valorant-api.com/weaponskinlevels/4c18d802-409d-ec20-f630-d3abfcaa37c7/displayicon.png", tier: "Premium" },
      { id: "phantom-glitchpop", name: "Glitchpop Phantom", image: "https://media.valorant-api.com/weaponskinlevels/9f6e4612-433b-aea9-1683-3db7aee90848/displayicon.png", tier: "Premium" },
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
      { id: "vandal-elderflame", name: "Elderflame Vandal", image: "https://media.valorant-api.com/weaponskinlevels/b3d3ff38-4202-20d8-2f41-c783477e5636/displayicon.png", tier: "Ultra" },
      { id: "vandal-prime", name: "Prime Vandal", image: "https://media.valorant-api.com/weaponskinlevels/c9678d8c-4327-f397-b0ec-dca3c3d6fb15/displayicon.png", tier: "Premium" },
      { id: "vandal-reaver", name: "Reaver Vandal", image: "https://media.valorant-api.com/weaponskinlevels/ba42fe63-457a-78ce-4499-47950a698129/displayicon.png", tier: "Premium" },
      { id: "vandal-rgx", name: "RGX 11z Pro Vandal", image: "https://media.valorant-api.com/weaponskinlevels/4e435234-49a2-1444-4640-908692c855b8/displayicon.png", tier: "Ultra" },
      { id: "vandal-champions", name: "Champions 2021 Vandal", image: "https://media.valorant-api.com/weaponskinlevels/9f51da57-4623-415a-6313-f49588297d0e/displayicon.png", tier: "Exclusive" },
      { id: "vandal-glitchpop", name: "Glitchpop Vandal", image: "https://media.valorant-api.com/weaponskinlevels/7e44fc1b-44fa-cdda-8491-f8a5bca1cfa3/displayicon.png", tier: "Premium" },
      { id: "vandal-ion", name: "Ion Vandal", image: "https://media.valorant-api.com/weaponskinlevels/a8c10620-46a8-794e-be55-a0a13edb8d44/displayicon.png", tier: "Premium" },
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
      { id: "marshal-glitchpop", name: "Glitchpop Marshal", image: "https://media.valorant-api.com/weaponskinlevels/d92a6ee6-4073-8b7f-e944-f1a55606a28a/displayicon.png", tier: "Premium" },
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
    image: "https://media.valorant-api.com/weapons/5f0aaf7a-4289-3998-d5ff-eb9a5cf7ef5c/displayicon.png",
    skins: [
      { id: "outlaw-default", name: "Default", image: "https://media.valorant-api.com/weapons/5f0aaf7a-4289-3998-d5ff-eb9a5cf7ef5c/displayicon.png", tier: "Select" },
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
      { id: "operator-elderflame", name: "Elderflame Operator", image: "https://media.valorant-api.com/weaponskinlevels/5c273d0e-47fa-bb8c-d914-728de95da30e/displayicon.png", tier: "Ultra" },
      { id: "operator-ion", name: "Ion Operator", image: "https://media.valorant-api.com/weaponskinlevels/24c73c29-443c-2440-d6db-838086f2451a/displayicon.png", tier: "Premium" },
      { id: "operator-glitchpop", name: "Glitchpop Operator", image: "https://media.valorant-api.com/weaponskinlevels/d92a6ee6-4073-8b7f-e944-f1a55606a28a/displayicon.png", tier: "Premium" },
      { id: "operator-origin", name: "Origin Operator", image: "https://media.valorant-api.com/weaponskinlevels/4d19c241-4350-6658-f5a6-5c99ca8e5e99/displayicon.png", tier: "Ultra" },
      { id: "operator-reaver", name: "Reaver Operator", image: "https://media.valorant-api.com/weaponskinlevels/7bfab387-4e97-d815-4488-c491e3a5520c/displayicon.png", tier: "Premium" },
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
      { id: "ares-forsaken", name: "Forsaken Ares", image: "https://media.valorant-api.com/weaponskinlevels/daa73753-4b56-9d21-d73e-f3b3f4c9b1a6/displayicon.png", tier: "Premium" },
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
      { id: "odin-origin", name: "Origin Odin", image: "https://media.valorant-api.com/weaponskinlevels/c96d991e-4807-5eee-0289-90b82f9be205/displayicon.png", tier: "Ultra" },
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
      { id: "knife-elderflame", name: "Elderflame Dagger", image: "https://media.valorant-api.com/weaponskinlevels/f3594bcc-43a9-4a74-8c40-98a4e4a4569a/displayicon.png", tier: "Ultra" },
      { id: "knife-prime", name: "Prime Axe", image: "https://media.valorant-api.com/weaponskinlevels/249b0e46-4a11-f045-51bb-649151cd802a/displayicon.png", tier: "Premium" },
      { id: "knife-reaver", name: "Reaver Karambit", image: "https://media.valorant-api.com/weaponskinlevels/5ac106cd-45ef-a26f-2058-f382f20c64db/displayicon.png", tier: "Premium" },
      { id: "knife-rgx", name: "RGX 11z Pro Blade", image: "https://media.valorant-api.com/weaponskinlevels/a1762ed3-45bf-2dd5-776f-a18a33171e6f/displayicon.png", tier: "Ultra" },
      { id: "knife-champions", name: "Champions 2022 Butterfly Knife", image: "https://media.valorant-api.com/weaponskinlevels/ba0abff4-41e4-4036-980d-90a55837b692/displayicon.png", tier: "Exclusive" },
      { id: "knife-oni", name: "Oni Claw", image: "https://media.valorant-api.com/weaponskinlevels/e34039b6-441d-3e17-2773-bdaf5c3d2faa/displayicon.png", tier: "Premium" },
      { id: "knife-ion", name: "Ion Energy Sword", image: "https://media.valorant-api.com/weaponskinlevels/21ceb4b1-480f-dddb-1422-8aad73519181/displayicon.png", tier: "Premium" },
      { id: "knife-glitchpop", name: "Glitchpop Dagger", image: "https://media.valorant-api.com/weaponskinlevels/48ce4a70-4207-623b-4739-bfb937812432/displayicon.png", tier: "Premium" },
      { id: "knife-singularity", name: "Singularity Knife", image: "https://media.valorant-api.com/weaponskinlevels/ea441610-42da-e46f-8d7b-1b9759c105cd/displayicon.png", tier: "Ultra" },
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

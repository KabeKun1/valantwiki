export interface Agent {
  id: string;
  name: string;
  role: "Duelist" | "Controller" | "Initiator" | "Sentinel";
  origin: string;
  biography: string;
  abilities: {
    name: string;
    description: string;
    type: "Basic" | "Signature" | "Ultimate";
  }[];
  quote: string;
  color: string;
  image: string;
}

export const agents: Agent[] = [
  {
    id: "jett",
    name: "Jett",
    role: "Duelist",
    origin: "South Korea",
    biography:
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them. A former radiant who once worked as a chef, Jett's life changed when the First Light event awakened her abilities. Now she channels the wind itself, becoming a blur on the battlefield.",
    abilities: [
      {
        name: "Cloudburst",
        description:
          "Throw a cloud of fog that obscures vision on impact. Hold the ability key to bend the cloud's in-flight trajectory.",
        type: "Basic",
      },
      {
        name: "Updraft",
        description:
          "Propel yourself upwards after a brief wind-up, gaining height advantage instantly.",
        type: "Basic",
      },
      {
        name: "Tailwind",
        description:
          "Activate to dash in the direction you're moving. If stationary, dash forward.",
        type: "Signature",
      },
      {
        name: "Blade Storm",
        description:
          "Equip a set of highly accurate throwing knives that recharge on killing an enemy.",
        type: "Ultimate",
      },
    ],
    quote: "Watch this!",
    color: "#58C8D4",
    image: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    role: "Duelist",
    origin: "United Kingdom",
    biography:
      "Hailing from the UK, Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms. Phoenix was a struggling musician in London before the First Light gave him his fiery abilities. His confidence borders on arrogance, but his passion for his team is undeniable.",
    abilities: [
      {
        name: "Blaze",
        description:
          "Cast out a flame wall that blocks vision and damages enemies. You can bend the wall by holding the ability key.",
        type: "Basic",
      },
      {
        name: "Curveball",
        description:
          "Cast a curving flare that bursts into brilliant light, temporarily blinding all looking at it.",
        type: "Basic",
      },
      {
        name: "Hot Hands",
        description:
          "Throw a fireball that explodes after a delay or upon impact. The fire zone damages enemies and heals you.",
        type: "Signature",
      },
      {
        name: "Run It Back",
        description:
          "Mark your current location. If you die during this ability's duration, or when this ability's duration expires, you'll be reborn at the marked location with full health.",
        type: "Ultimate",
      },
    ],
    quote: "Come on, let's go!",
    color: "#FE8040",
    image: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
  },
  {
    id: "sage",
    name: "Sage",
    role: "Sentinel",
    origin: "China",
    biography:
      "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish battlefield. Before joining the VALORANT Protocol, Sage was a healer who used her radiant abilities to help those in need across China. Her calm demeanor masks a deep determination to protect the innocent.",
    abilities: [
      {
        name: "Barrier Orb",
        description:
          "Conjure a large, solid wall that rotates before casting. The wall can be destroyed by enemy fire.",
        type: "Basic",
      },
      {
        name: "Slow Orb",
        description:
          "Cast out an orb that creates a lingering field, slowing all caught inside of it.",
        type: "Basic",
      },
      {
        name: "Healing Orb",
        description:
          "Heal an ally or yourself over a short period of time.",
        type: "Signature",
      },
      {
        name: "Resurrection",
        description:
          "Target a friendly corpse. After a short delay, revive them with full health.",
        type: "Ultimate",
      },
    ],
    quote: "I am both shield and sword.",
    color: "#47D9A0",
    image: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png",
  },
  {
    id: "sova",
    name: "Sova",
    role: "Initiator",
    origin: "Russia",
    biography:
      "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide. Sova grew up as a hunter in the frozen wilderness, and the First Light amplified his already impressive tracking abilities. He joined VALORANT to protect his homeland from interdimensional threats.",
    abilities: [
      {
        name: "Owl Drone",
        description:
          "Deploy a pilotable drone that can fire tracking darts at enemies.",
        type: "Basic",
      },
      {
        name: "Shock Bolt",
        description:
          "Fire an explosive bolt that emits a damaging pulse of static energy upon impact.",
        type: "Basic",
      },
      {
        name: "Recon Bolt",
        description:
          "Fire a bolt that deploys a sonar emitter. The sonar pings reveal the location of nearby enemies.",
        type: "Signature",
      },
      {
        name: "Hunter's Fury",
        description:
          "Fire up to three deadly energy blasts that spear across the entire map. Each hit enemy takes damage and is marked.",
        type: "Ultimate",
      },
    ],
    quote: "Nowhere to run.",
    color: "#2463C4",
    image: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
  },
  {
    id: "viper",
    name: "Viper",
    role: "Controller",
    origin: "United States",
    biography:
      "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will. Dr. Sabine Callas was a brilliant scientist before tragedy struck her life. Now she channels her grief and genius into deadly chemical warfare, seeking revenge against those who wronged her while protecting her new family at VALORANT.",
    abilities: [
      {
        name: "Snake Bite",
        description:
          "Fire a projectile that explodes into a pool of damaging acid.",
        type: "Basic",
      },
      {
        name: "Poison Cloud",
        description:
          "Throw a gas emitter that creates a toxic cloud at the cost of fuel. The emitter can be picked up and redeployed.",
        type: "Basic",
      },
      {
        name: "Toxic Screen",
        description:
          "Deploy a long line of gas emitters that creates a wall of toxic gas at the cost of fuel.",
        type: "Signature",
      },
      {
        name: "Viper's Pit",
        description:
          "Emit a massive toxic cloud in a large area that lasts as long as Viper stays inside the cloud.",
        type: "Ultimate",
      },
    ],
    quote: "Don't stand in my way.",
    color: "#3AE25A",
    image: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
  },
  {
    id: "cypher",
    name: "Cypher",
    role: "Sentinel",
    origin: "Morocco",
    biography:
      "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching. His true identity remains shrouded in mystery, but his past is marked by loss and betrayal. He joined VALORANT not for glory, but to ensure no one else suffers the fate of those he couldn't protect.",
    abilities: [
      {
        name: "Trapwire",
        description:
          "Place a stealthed tripwire between two walls. Triggered enemies are tethered, revealed, and dazed.",
        type: "Basic",
      },
      {
        name: "Cyber Cage",
        description:
          "Toss a remote activation trap. Reactivate to create a cage that slows enemies who pass through it.",
        type: "Basic",
      },
      {
        name: "Spycam",
        description:
          "Place a remote camera. After placing, reactivate to view video feed. Left click while in camera to fire a tracking dart.",
        type: "Signature",
      },
      {
        name: "Neural Theft",
        description:
          "Use on a dead enemy player to reveal the location of all living enemies.",
        type: "Ultimate",
      },
    ],
    quote: "I know exactly where you are.",
    color: "#D1B46A",
    image: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
  },
  {
    id: "omen",
    name: "Omen",
    role: "Controller",
    origin: "Unknown",
    biography:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next. Omen's true identity and origin are lost to time. What remains is a shadow of his former self, bound to the physical world by mysterious forces. His memories are fragmented, but his purpose is clear: to find answers about what he has become.",
    abilities: [
      {
        name: "Shrouded Step",
        description:
          "After a delay, teleport to a marked location within a short distance.",
        type: "Basic",
      },
      {
        name: "Paranoia",
        description:
          "Send out a shadow that passes through walls, reducing the vision range and deafening all players it touches.",
        type: "Basic",
      },
      {
        name: "Dark Cover",
        description:
          "Cast an orb that bursts into an obscuring sphere of shadow at its final location. Can be charged to extend range.",
        type: "Signature",
      },
      {
        name: "From the Shadows",
        description:
          "Select anywhere on the map to teleport and reform. When arriving, appear as a Shade, that will go back to your original location if killed.",
        type: "Ultimate",
      },
    ],
    quote: "They don't know what hit them.",
    color: "#5F5BA0",
    image: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
  },
  {
    id: "killjoy",
    name: "Killjoy",
    role: "Sentinel",
    origin: "Germany",
    biography:
      "The genius of Germany, Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them. A prodigy from a young age, Killjoy's inventions were recognized by the VALORANT Protocol early on. She joined to use her gadgets for good, protecting the world from the chaos unleashed by the First Light.",
    abilities: [
      {
        name: "Nanoswarm",
        description:
          "Throw a grenade that lands and goes covert. Activate to deploy a damaging swarm of nanobots.",
        type: "Basic",
      },
      {
        name: "Alarmbot",
        description:
          "Deploy a bot that hunts down enemies in range. After reaching its target, the bot explodes and applies Vulnerable.",
        type: "Basic",
      },
      {
        name: "Turret",
        description:
          "Deploy a turret that fires at enemies in a 180 degree cone.",
        type: "Signature",
      },
      {
        name: "Lockdown",
        description:
          "Deploy a device that winds up over time and detains all enemies caught in its radius.",
        type: "Ultimate",
      },
    ],
    quote: "Relax, I've already thought of everything.",
    color: "#FFD700",
    image: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
  },
  {
    id: "reyna",
    name: "Reyna",
    role: "Duelist",
    origin: "Mexico",
    biography:
      "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capabilities are only limited by her raw skill, making her highly dependent on performance. Reyna's powers are fueled by the souls of her enemies. Her origin story is one of tragedy and vengeance, as she seeks to destroy those who experimented on her and her sister. She fights not for glory, but for revenge.",
    abilities: [
      {
        name: "Leer",
        description:
          "Cast a destructible ethereal eye that nearsights all enemies who look at it.",
        type: "Basic",
      },
      {
        name: "Devour",
        description:
          "Instantly consume a nearby soul orb, rapidly healing for a short duration.",
        type: "Basic",
      },
      {
        name: "Dismiss",
        description:
          "Instantly consume a nearby soul orb, becoming intangible for a short duration.",
        type: "Signature",
      },
      {
        name: "Empress",
        description:
          "Enter a frenzy, increasing fire rate, equip and reload speed dramatically. Score a kill to renew the duration.",
        type: "Ultimate",
      },
    ],
    quote: "They have no idea what they're facing.",
    color: "#A55BA0",
    image: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
  },
  {
    id: "breach",
    name: "Breach",
    role: "Initiator",
    origin: "Sweden",
    biography:
      "The bionic Swede, Breach fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair. Erik Torsten lost both his arms in an accident and replaced them with powerful bionic augments. His criminal past is behind him now, but his aggressive nature makes him a formidable force on the battlefield.",
    abilities: [
      {
        name: "Aftershock",
        description:
          "Equip a fusion charge. Fire to send a slow-acting burst through the wall.",
        type: "Basic",
      },
      {
        name: "Flashpoint",
        description:
          "Equip a blinding charge. Fire to set a fast-acting burst through the wall, blinding all players looking at it.",
        type: "Basic",
      },
      {
        name: "Fault Line",
        description:
          "Equip a seismic blast. Hold Fire to increase the distance. Release to set off a quake, dazing all players in its zone.",
        type: "Signature",
      },
      {
        name: "Rolling Thunder",
        description:
          "Equip a seismic charge. Fire to send a cascading quake through all terrain in a large cone.",
        type: "Ultimate",
      },
    ],
    quote: "Let's go!",
    color: "#CF6A41",
    image: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png",
  },
  {
    id: "raze",
    name: "Raze",
    role: "Duelist",
    origin: "Brazil",
    biography:
      "Raze explodes out of Brazil with her big personality and bigger guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of boom. A demolitions expert from Salvador, Raze brings chaos and creativity to every fight. Her love of explosions and loud music makes her the life of any party—or battlefield.",
    abilities: [
      {
        name: "Boom Bot",
        description:
          "Equip a Boom Bot. Fire to deploy the bot, causing it to travel in a straight line bouncing off walls. The bot locks onto enemies in its frontal cone and chases them.",
        type: "Basic",
      },
      {
        name: "Blast Pack",
        description:
          "Instantly throw a Blast Pack that will stick to surfaces. Re-use the ability to detonate, damaging and moving anything hit.",
        type: "Basic",
      },
      {
        name: "Paint Shells",
        description:
          "Equip a cluster grenade. Fire to throw it, which does damage and creates sub-munitions, each doing damage to anyone in their range.",
        type: "Signature",
      },
      {
        name: "Showstopper",
        description:
          "Equip a rocket launcher. Fire to shoot a rocket that does massive area damage on contact with anything.",
        type: "Ultimate",
      },
    ],
    quote: "Here comes the party!",
    color: "#D97F42",
    image: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
  },
  {
    id: "skye",
    name: "Skye",
    role: "Initiator",
    origin: "Australia",
    biography:
      "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy and her power to heal, the team is always set up to push forward. Skye grew up connected to nature, and the First Light amplified her bond with the animals around her. She can now summon spectral creatures to aid her in battle.",
    abilities: [
      {
        name: "Regrowth",
        description:
          "Equip a healing trinket. Hold fire to channel, healing allies in range and line of sight.",
        type: "Basic",
      },
      {
        name: "Trailblazer",
        description:
          "Equip a Tasmanian tiger trinket. Fire to send out and take control of the predator. When in control, Fire to leap forward, exploding in a concussive blast.",
        type: "Basic",
      },
      {
        name: "Guiding Light",
        description:
          "Equip a hawk trinket. Fire to send it forward. Re-use while in flight to transform the hawk into a flash.",
        type: "Signature",
      },
      {
        name: "Seekers",
        description:
          "Equip a Seeker trinket. Fire to send out three Seekers to track down the three closest enemies.",
        type: "Ultimate",
      },
    ],
    quote: "You're in my sights.",
    color: "#77C843",
    image: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
  },
  {
    id: "yoru",
    name: "Yoru",
    role: "Duelist",
    origin: "Japan",
    biography:
      "Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets behind enemy lines and strikes before they know where to look. Yoru comes from a lineage of dimensional rift wielders. He seeks to master his ancestral powers while hunting down those who wronged his family.",
    abilities: [
      {
        name: "Fakeout",
        description:
          "Equip an echo that mimics footsteps when activated. Fire to activate and send the echo forward.",
        type: "Basic",
      },
      {
        name: "Blindside",
        description:
          "Equip to rip an unstable dimensional fragment from reality. Fire to throw the fragment, activating a flash that turns away from the point of impact.",
        type: "Basic",
      },
      {
        name: "Gatecrash",
        description:
          "Equip a rift tether. Fire to send the tether forward. Alternate Fire to place a stationary tether. Activate to teleport to the tether's location.",
        type: "Signature",
      },
      {
        name: "Dimensional Drift",
        description:
          "Equip a mask that can see between dimensions. Fire to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.",
        type: "Ultimate",
      },
    ],
    quote: "I'll handle this.",
    color: "#325BB0",
    image: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png",
  },
  {
    id: "astra",
    name: "Astra",
    role: "Controller",
    origin: "Ghana",
    biography:
      "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and target in sight, she pulls the strings of fate and bends them to her will. Astra was born under a rare celestial alignment, granting her a connection to cosmic forces. She sees the battlefield from a higher perspective, manipulating stars themselves.",
    abilities: [
      {
        name: "Gravity Well",
        description:
          "Place a star in Astral Form. Activate to form a gravity well that pulls players in and explodes, making all players still trapped inside fragile.",
        type: "Basic",
      },
      {
        name: "Nova Pulse",
        description:
          "Place a star in Astral Form. Activate to detonate, briefly charging then striking, concussing all players in its area.",
        type: "Basic",
      },
      {
        name: "Nebula",
        description:
          "Place a star in Astral Form. Activate to transform into a Nebula (smoke). Use Dissipate to return it to a star to be reused.",
        type: "Signature",
      },
      {
        name: "Cosmic Divide",
        description:
          "Activate to enter Astral Form where you can place stars. Cosmic Divide - Select two locations. An infinite Cosmic Divide connects the two points you select.",
        type: "Ultimate",
      },
    ],
    quote: "The stars are aligned.",
    color: "#9D44B5",
    image: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png",
  },
  {
    id: "kayo",
    name: "KAY/O",
    role: "Initiator",
    origin: "Unknown (Machine)",
    biography:
      "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge. Created in an alternate future to combat the radiant threat, KAY/O was sent back in time to prevent a catastrophic war. His memories of the future drive his relentless mission.",
    abilities: [
      {
        name: "FRAG/ment",
        description:
          "Equip an explosive fragment. Fire to throw. The fragment sticks to the floor and explodes multiple times.",
        type: "Basic",
      },
      {
        name: "FLASH/drive",
        description:
          "Equip a flash grenade. Fire to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
        type: "Basic",
      },
      {
        name: "ZERO/point",
        description:
          "Equip a suppression blade. Fire to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
        type: "Signature",
      },
      {
        name: "NULL/cmd",
        description:
          "Instantly overload with polarized radianite energy that pulses from KAY/O, suppressing enemies in a large radius. KAY/O is energized and can be re-stabilized if downed.",
        type: "Ultimate",
      },
    ],
    quote: "Hostiles eliminated.",
    color: "#4D7FB8",
    image: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
  },
  {
    id: "chamber",
    name: "Chamber",
    role: "Sentinel",
    origin: "France",
    biography:
      "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan. A perfectionist and a connoisseur, Chamber's elegant exterior hides a calculating mind. His past as an arms dealer is shrouded in mystery.",
    abilities: [
      {
        name: "Trademark",
        description:
          "Place a trap that scans for enemies. When a visible enemy comes in range, it creates a lingering field that slows players.",
        type: "Basic",
      },
      {
        name: "Headhunter",
        description:
          "Activate to equip a heavy pistol. Alt fire with the pistol equipped to aim down sights.",
        type: "Basic",
      },
      {
        name: "Rendezvous",
        description:
          "Place two teleport anchors. While on the ground and in range of an anchor, reactivate to quickly teleport to the other anchor.",
        type: "Signature",
      },
      {
        name: "Tour De Force",
        description:
          "Activate to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players.",
        type: "Ultimate",
      },
    ],
    quote: "They are so dead.",
    color: "#F8B855",
    image: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
  },
  {
    id: "neon",
    name: "Neon",
    role: "Duelist",
    origin: "Philippines",
    biography:
      "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard then strikes them down quicker than lightning. Neon discovered her powers during a thunderstorm that should have killed her. Instead, she absorbed the lightning and now channels it in battle.",
    abilities: [
      {
        name: "Fast Lane",
        description:
          "Fire two energy lines that extend a short distance. The lines rise into walls of static electricity that block vision.",
        type: "Basic",
      },
      {
        name: "Relay Bolt",
        description:
          "Instantly throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
        type: "Basic",
      },
      {
        name: "High Gear",
        description:
          "Instantly channel Neon's power for increased speed. When charged, Alt Fire to trigger an electric slide.",
        type: "Signature",
      },
      {
        name: "Overdrive",
        description:
          "Unleash Neon's full power and speed for a short duration. Fire to channel the power into a deadly lightning beam with high movement accuracy.",
        type: "Ultimate",
      },
    ],
    quote: "Let's go! Let's go! Let's go!",
    color: "#1894D4",
    image: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png",
  },
  {
    id: "fade",
    name: "Fade",
    role: "Initiator",
    origin: "Turkey",
    biography:
      "Turkish bounty hunter Fade unleashes the power of raw nightmares to seize enemy secrets. Attuned to terror itself, she hunts targets and reveals their deepest fears before crushing them in the dark. Fade's powers manifested through trauma, giving her the ability to tap into the nightmare realm. She uses her gift to hunt down those who hide in the shadows.",
    abilities: [
      {
        name: "Prowler",
        description:
          "Equip a Prowler. Fire to send the Prowler forward. The Prowler will travel in a straight line, following the trail of anyone it gets close to.",
        type: "Basic",
      },
      {
        name: "Seize",
        description:
          "Equip an orb of nightmare ink. Fire to throw the orb which will plummet and create a zone in which enemies cannot escape.",
        type: "Basic",
      },
      {
        name: "Haunt",
        description:
          "Equip a watcher. Fire to throw. The watcher will travel in the direction it is thrown, and will reveal enemies caught in its line of sight.",
        type: "Signature",
      },
      {
        name: "Nightfall",
        description:
          "Equip the power of Fear. Fire to send out a wave of nightmare energy that can traverse through walls. The wave Deafens and Decays enemies.",
        type: "Ultimate",
      },
    ],
    quote: "There's nowhere to hide.",
    color: "#5A5C6E",
    image: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
  },
  {
    id: "harbor",
    name: "Harbor",
    role: "Controller",
    origin: "India",
    biography:
      "Hailing from India's coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies while he rushes into the fight. Harbor discovered an ancient artifact that grants him control over water. He now uses this power to protect the innocent and fight against those who would misuse radiant technology.",
    abilities: [
      {
        name: "Cascade",
        description:
          "Equip a wave of water. Fire to send the wave rolling forward and through walls. Re-use to stop the wave.",
        type: "Basic",
      },
      {
        name: "Cove",
        description:
          "Equip a sphere of shielding water. Fire to throw. Alt fire to underhand throw. Upon impacting the ground, spawn a destructible water shield.",
        type: "Basic",
      },
      {
        name: "High Tide",
        description:
          "Equip a wall of water. Fire to send the water forward along the ground. Hold fire to guide the water in the direction of your crosshair.",
        type: "Signature",
      },
      {
        name: "Reckoning",
        description:
          "Equip the full power of your artifact. Fire to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes.",
        type: "Ultimate",
      },
    ],
    quote: "The tide rises.",
    color: "#00B4B4",
    image: "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayicon.png",
  },
  {
    id: "gekko",
    name: "Gekko",
    role: "Initiator",
    origin: "United States (Los Angeles)",
    biography:
      "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko rushing in to clean up what's left. Gekko found his creature companions in the aftermath of a radianite spill. Now inseparable, they work together to fight for justice and have a good time doing it.",
    abilities: [
      {
        name: "Mosh Pit",
        description:
          "Equip Mosh. Fire to throw Mosh like a grenade. Mosh duplicates across a large area, then after a short delay, explodes.",
        type: "Basic",
      },
      {
        name: "Wingman",
        description:
          "Equip Wingman. Fire to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees.",
        type: "Basic",
      },
      {
        name: "Dizzy",
        description:
          "Equip Dizzy. Fire to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight.",
        type: "Signature",
      },
      {
        name: "Thrash",
        description:
          "Equip Thrash. Fire to link with Thrash's mind and steer her through enemy territory. Activate to lunge forward and explode, detaining enemies in range.",
        type: "Ultimate",
      },
    ],
    quote: "Let's do this, amigos!",
    color: "#91C743",
    image: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png",
  },
  {
    id: "deadlock",
    name: "Deadlock",
    role: "Sentinel",
    origin: "Norway",
    biography:
      "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her deadly methods. A survivor of a radiant attack on her village, Deadlock now uses advanced technology to hunt down threats and protect the innocent.",
    abilities: [
      {
        name: "GravNet",
        description:
          "Equip a GravNet grenade. Fire to throw. Alt fire to lob the grenade underhand. The GravNet detonates upon landing, forcing anyone caught to crouch and move slowly.",
        type: "Basic",
      },
      {
        name: "Sonic Sensor",
        description:
          "Equip a Sonic Sensor. Fire to deploy. The sensor monitors an area for enemies making sound. It concusses enemies in the area when triggered.",
        type: "Basic",
      },
      {
        name: "Barrier Mesh",
        description:
          "Equip a Barrier Mesh disc. Fire to throw forward. Upon landing, the disc generates barriers from the origin point that block character movement.",
        type: "Signature",
      },
      {
        name: "Annihilation",
        description:
          "Equip a Nanowire Accelerator. Fire to unleash a pulse of nanowires that captures the first enemy contacted.",
        type: "Ultimate",
      },
    ],
    quote: "No one gets away.",
    color: "#7A8B99",
    image: "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/displayicon.png",
  },
  {
    id: "iso",
    name: "Iso",
    role: "Duelist",
    origin: "China",
    biography:
      "Chinese fixer Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he engages the enemy on even terms. A hitman with a moral code, Iso operates in a world of shadows. His abilities let him enter a state of perfect focus, making him nearly unstoppable in combat.",
    abilities: [
      {
        name: "Undercut",
        description:
          "Equip a molecular bolt. Fire to send the bolt forward, applying Vulnerable to all players it touches.",
        type: "Basic",
      },
      {
        name: "Contingency",
        description:
          "Equip to assemble prismatic energy. Fire to push an indestructible wall of energy forward that blocks bullets.",
        type: "Basic",
      },
      {
        name: "Double Tap",
        description:
          "Start a focus timer. Once completed, enter a flow state during which downed enemies generate an energy orb. Shooting this orb grants you a shield.",
        type: "Signature",
      },
      {
        name: "Kill Contract",
        description:
          "Equip an interdimensional arena. Fire to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena for a 1v1.",
        type: "Ultimate",
      },
    ],
    quote: "One shot. One kill.",
    color: "#8B5CF6",
    image: "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/displayicon.png",
  },
  {
    id: "clove",
    name: "Clove",
    role: "Controller",
    origin: "Scotland",
    biography:
      "Scottish troublemaker Clove makes mischief for their enemies—even from beyond the grave. Their clever tricks create chaotic distractions that keep foes guessing. Clove's connection to the realm between life and death gives them unique abilities that persist even after they fall in battle.",
    abilities: [
      {
        name: "Pick-Me-Up",
        description:
          "After getting a kill, Clove can absorb the life force of a fallen enemy, gaining temporary health and a brief speed boost.",
        type: "Basic",
      },
      {
        name: "Meddle",
        description:
          "Equip a fragment of immortality essence. Fire to throw, which after a short delay decays all targets caught inside.",
        type: "Basic",
      },
      {
        name: "Ruse",
        description:
          "Equip to view the battlefield. Fire to set the locations where Clove's clouds will settle. The clouds can be created after dying.",
        type: "Signature",
      },
      {
        name: "Not Dead Yet",
        description:
          "After dying, Clove can activate this ability to gain the chance to stay in the fight. Get a kill or damaging assist to return to life.",
        type: "Ultimate",
      },
    ],
    quote: "I'm not done yet!",
    color: "#A855F7",
    image: "https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa07571acc6/displayicon.png",
  },
];

export const roles = [
  {
    name: "Duelist",
    description:
      "Self-sufficient fraggers who seek out engagements and open up sites for their team.",
    color: "#FF4655",
  },
  {
    name: "Controller",
    description:
      "Experts in slicing up dangerous territory to set their team up for success.",
    color: "#47D9A0",
  },
  {
    name: "Initiator",
    description:
      "Challenge angles by setting up their team to enter contested ground and push defenders away.",
    color: "#58C8D4",
  },
  {
    name: "Sentinel",
    description:
      "Defensive experts who can lock down areas and watch flanks, both on attacker and defender side.",
    color: "#FFD700",
  },
];

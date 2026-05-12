// ── WEDDING GUEST LIST ──
// key: what goes in the URL (?guest=KEY)
// name: displayed on the invite
// options: dropdown choices for RSVP guest count

const GUESTS = {
  "rinad": {
    name: "Rinad & Jaffar",
    options: [
      { value: "Rinad & Jaffar (2)", label: "Both of us" },
      { value: "Rinad only (1)",     label: "Rinad only" },
      { value: "Jaffar only (1)",    label: "Jaffar only" }
    ]
  },
  "rawand": {
    name: "Rawand & Adam",
    options: [
      { value: "Rawand & Adam (2)", label: "Both of us" },
      { value: "Rawand only (1)",   label: "Rawand only" },
      { value: "Adam only (1)",     label: "Adam only" }
    ]
  },
  "rana-riad": {
    name: "Rana & Riad",
    options: [
      { value: "Rana & Riad (2)", label: "Both of us" },
      { value: "Rana only (1)",   label: "Rana only" },
      { value: "Riad only (1)",   label: "Riad only" }
    ]
  },
  "zee": {
    name: "Zee, Moe & Nada",
    options: [
      { value: "Zee, Moe & Nada (3)", label: "All three of us" },
      { value: "Zee & Moe (2)",       label: "Zee & Moe only" },
      { value: "Zee only (1)",        label: "Zee only" }
    ]
  },
  "rana": {
    name: "Rana",
    options: [
      { value: "Rana (1)", label: "Just me" }
    ]
  },
  "dima": {
    name: "Dima",
    options: [
      { value: "Dima (1)", label: "Just me" }
    ]
  },
  "noor": {
    name: "Noor",
    options: [
      { value: "Noor (1)", label: "Just me" }
    ]
  },
  "ravin": {
    name: "Ravin & Ravin's Mom",
    options: [
      { value: "Ravin & Mom (2)", label: "Both of us" },
      { value: "Ravin only (1)",  label: "Ravin only" },
      { value: "Mom only (1)",    label: "Mom only" }
    ]
  },
  "mace": {
    name: "Mace & Ibrahim",
    options: [
      { value: "Mace & Ibrahim (2)", label: "Both of us" },
      { value: "Mace only (1)",      label: "Mace only" },
      { value: "Ibrahim only (1)",   label: "Ibrahim only" }
    ]
  },
  "toma": {
    name: "Toma & Saif",
    options: [
      { value: "Toma & Saif (2)", label: "Both of us" },
      { value: "Toma only (1)",   label: "Toma only" },
      { value: "Saif only (1)",   label: "Saif only" }
    ]
  },
  "humam": {
    name: "Humam & Baji",
    options: [
      { value: "Humam & Baji (2)", label: "Both of us" },
      { value: "Humam only (1)",   label: "Humam only" },
      { value: "Baji only (1)",    label: "Baji only" }
    ]
  },
  "shemo": {
    name: "Shemo",
    options: [
      { value: "Shemo (1)", label: "Just me" }
    ]
  },
  "roaa": {
    name: "Roaa & Husband",
    options: [
      { value: "Roaa & Husband (2)", label: "Both of us" },
      { value: "Roaa only (1)",      label: "Roaa only" },
      { value: "Husband only (1)",   label: "Husband only" }
    ]
  },
  "merwa": {
    name: "Merwa",
    options: [
      { value: "Merwa (1)", label: "Just me" }
    ]
  },
  "iptisam": {
    name: "Iptisam, Haneen & Aya",
    options: [
      { value: "Iptisam, Haneen & Aya (3)", label: "All three of us" },
      { value: "Iptisam & Haneen (2)",      label: "Iptisam & Haneen" },
      { value: "Iptisam & Aya (2)",         label: "Iptisam & Aya" },
      { value: "Iptisam only (1)",          label: "Iptisam only" }
    ]
  },
  "abooddad": {
    name: "Abood's Dad",
    options: [
      { value: "Abood's Dad (1)", label: "Just me" }
    ]
  },
  "aboodmom": {
    name: "Abood's Mom & Esam",
    options: [
      { value: "Abood's Mom & Esam (2)", label: "Both of us" },
      { value: "Abood's Mom only (1)",   label: "Mom only" },
      { value: "Esam only (1)",          label: "Esam only" }
    ]
  },
  "tutu": {
    name: "TuTu",
    options: [
      { value: "TuTu (1)", label: "Just me" }
    ]
  },
  "abdullah": {
    name: "Abdullah",
    options: [
      { value: "Abdullah (1)", label: "Just me" }
    ]
  },
  "marwa-ammar": {
    name: "Marwa, Ammar, Tina & Anmar",
    options: [
      { value: "Marwa, Ammar, Tina & Anmar (4)", label: "All four of us" },
      { value: "Marwa & Ammar (2)",              label: "Marwa & Ammar only" },
      { value: "Marwa only (1)",                 label: "Marwa only" }
    ]
  },
  "saif-zainab": {
    name: "Saif & Zainab",
    options: [
      { value: "Saif, Zainab & guest (3)", label: "All three of us" },
      { value: "Saif & Zainab (2)",        label: "Just the two of us" },
      { value: "Saif only (1)",            label: "Saif only" },
      { value: "Zainab only (1)",          label: "Zainab only" }
    ]
  },
  "nuha": {
    name: "Nuha & Faris",
    options: [
      { value: "Nuha & Faris (2)", label: "Both of us" },
      { value: "Nuha only (1)",    label: "Nuha only" },
      { value: "Faris only (1)",   label: "Faris only" }
    ]
  },
  "sinan": {
    name: "Sinan & Marwa",
    options: [
      { value: "Sinan, Marwa & 2 kids (4)", label: "All of us (4)" },
      { value: "Sinan & Marwa (2)",         label: "Sinan & Marwa only" },
      { value: "Sinan, Marwa & 1 kid (3)",  label: "Us + 1 child" }
    ]
  },
  "yousif": {
    name: "Yousif",
    options: [
      { value: "Yousif (1)", label: "Just me" }
    ]
  },
  "mayar": {
    name: "Mayar",
    options: [
      { value: "Mayar (1)", label: "Just me" }
    ]
  },
  "fahad": {
    name: "Fahad & Laith",
    options: [
      { value: "Fahad & Laith (2)", label: "Both of us" },
      { value: "Fahad only (1)",    label: "Fahad only" },
      { value: "Laith only (1)",    label: "Laith only" }
    ]
  },
  "jabar": {
    name: "Jabar",
    options: [
      { value: "Jabar (1)", label: "Just me" }
    ]
  },
  "anthony": {
    name: "Anthony",
    options: [
      { value: "Anthony (1)", label: "Just me" }
    ]
  },
  "basem": {
    name: "Basem",
    options: [
      { value: "Basem (1)", label: "Just me" }
    ]
  },
  "layan": {
    name: "Layan",
    options: [
      { value: "Layan (1)", label: "Just me" }
    ]
  },
  "nada": {
    name: "Nada",
    options: [
      { value: "Nada (1)", label: "Just me" }
    ]
  },
  "shakir": {
    name: "Shakir & Wife",
    options: [
      { value: "Shakir & Wife (2)", label: "Both of us" },
      { value: "Shakir only (1)",   label: "Shakir only" },
      { value: "Wife only (1)",     label: "Wife only" }
    ]
  },
  "jaffarfriend": {
    name: "Jaffar's Friend",
    options: [
      { value: "Jaffar's Friend (1)", label: "Just me" }
    ]
  },
  "narmin": {
    name: "Narmin",
    options: [
      { value: "Narmin (1)", label: "Just me" }
    ]
  },
  "haydar": {
    name: "Haydar",
    options: [
      { value: "Haydar (1)", label: "Just me" }
    ]
  },
  "maysa": {
    name: "Maysa",
    options: [
      { value: "Maysa (1)", label: "Just me" }
    ]
  },
  "meso": {
    name: "Meso",
    options: [
      { value: "Meso (1)", label: "Just me" }
    ]
  },
  "dumar": {
    name: "Dumar",
    options: [
      { value: "Dumar (1)", label: "Just me" }
    ]
  },
  "wassan": {
    name: "Wassan",
    options: [
      { value: "Wassan (1)", label: "Just me" }
    ]
  },
  "jaffarfarman": {
    name: "Jaffar Farman",
    options: [
      { value: "Jaffar Farman (1)", label: "Just me" }
    ]
  },
  "nabil": {
    name: "Nabil & Sarwa",
    options: [
      { value: "Nabil & Sarwa (2)", label: "Both of us" },
      { value: "Nabil only (1)",    label: "Nabil only" },
      { value: "Sarwa only (1)",    label: "Sarwa only" }
    ]
  }
};

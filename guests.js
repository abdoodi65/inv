// ── WEDDING GUEST LIST ──
// key: what goes in the URL (?guest=KEY)
// name: displayed on the invite
// options: dropdown choices for RSVP guest count

const GUESTS = {
  "rinad": {
    name: "Jaffar & Rinad",
    options: [
      { value: "Jaffar & Rinad (2)", label: "Both of us" },
      { value: "Jaffar only (1)",    label: "Jaffar only" },
      { value: "Rinad only (1)",     label: "Rinad only" }
    ]
  },
  "rawand": {
    name: "Adam & Rawand",
    options: [
      { value: "Adam & Rawand (2)", label: "Both of us" },
      { value: "Adam only (1)",     label: "Adam only" },
      { value: "Rawand only (1)",   label: "Rawand only" }
    ]
  },
  "rana-riad": {
    name: "Riad & Rana",
    options: [
      { value: "Riad & Rana (2)", label: "Both of us" },
      { value: "Riad only (1)",   label: "Riad only" },
      { value: "Rana only (1)",   label: "Rana only" }
    ]
  },
  "zee": {
    name: "Mohammed, Zainab & Rana",
    options: [
      { value: "Mohammed, Zainab & Rana (3)", label: "All three of us" },
      { value: "Mohammed & Zainab (2)",       label: "Mohammed & Zainab" },
      { value: "Mohammed only (1)",           label: "Mohammed only" }
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
    name: "Muwafaq Al-Fahdli",
    options: [
      { value: "Muwafaq Al-Fahdli (1)", label: "Just me" }
    ]
  },
  "aboodmom": {
    name: "Esam & Jawthwa",
    options: [
      { value: "Esam & Jawthwa (2)", label: "Both of us" },
      { value: "Esam only (1)",      label: "Esam only" },
      { value: "Jawthwa only (1)",   label: "Jawthwa only" }
    ]
  },
  "tutu": {
    name: "Shoula Alhalafi",
    options: [
      { value: "Shoula Alhalafi (1)", label: "Just me" }
    ]
  },
  "abdullah": {
    name: "Abdullah Yahya",
    options: [
      { value: "Abdullah Yahya (1)", label: "Just me" }
    ]
  },
  "marwa-ammar": {
    name: "Ammar, Marwa, Anmar & Tina",
    options: [
      { value: "Ammar, Marwa, Anmar & Tina (4)", label: "All four of us" },
      { value: "Ammar & Marwa (2)",              label: "Ammar & Marwa only" },
      { value: "Ammar only (1)",                 label: "Ammar only" }
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
    name: "Faris & Nuha",
    options: [
      { value: "Faris & Nuha (2)", label: "Both of us" },
      { value: "Faris only (1)",   label: "Faris only" },
      { value: "Nuha only (1)",    label: "Nuha only" }
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
    name: "Yousif Maeen",
    options: [
      { value: "Yousif Maeen (1)", label: "Just me" }
    ]
  },
  "mayar": {
    name: "Mayar Elkazzaz",
    options: [
      { value: "Mayar Elkazzaz (1)", label: "Just me" }
    ]
  },
  "fahad": {
    name: "Fahad & Laith Aziza",
    options: [
      { value: "Fahad & Laith (2)", label: "Both of us" },
      { value: "Fahad only (1)",    label: "Fahad only" },
      { value: "Laith only (1)",    label: "Laith only" }
    ]
  },
  "jabar": {
    name: "Abduljabar Mohamad",
    options: [
      { value: "Abduljabar Mohamad (1)", label: "Just me" }
    ]
  },
  "anthony": {
    name: "Anthony Abdul Ahad",
    options: [
      { value: "Anthony Abdul Ahad (1)", label: "Just me" }
    ]
  },
  "basem": {
    name: "Basem Yassa",
    options: [
      { value: "Basem Yassa (1)", label: "Just me" }
    ]
  },
  "layan": {
    name: "Layan Bashi",
    options: [
      { value: "Layan Bashi (1)", label: "Just me" }
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
  "waseem": {
    name: "Waseem Hasan",
    options: [
      { value: "Waseem Hasan (1)", label: "Just me" }
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

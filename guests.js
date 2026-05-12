// ── WEDDING GUEST LIST ──
// key:  what goes in the URL (?guest=KEY)
// name: displayed on the invite
// lang: "ar" opens in Arabic first, "en" opens in English first
// options: dropdown choices for RSVP guest count

const GUESTS = {
  "rinad": {
    name: "Jaffar & Rinad", lang: "en",
    options: [
      { value: "Jaffar & Rinad (2)", label: "Both of us" },
      { value: "Jaffar only (1)",    label: "Jaffar only" },
      { value: "Rinad only (1)",     label: "Rinad only" }
    ]
  },
  "rawand": {
    name: "Adam & Rawand", lang: "en",
    options: [
      { value: "Adam & Rawand (2)", label: "Both of us" },
      { value: "Adam only (1)",     label: "Adam only" },
      { value: "Rawand only (1)",   label: "Rawand only" }
    ]
  },
  "rana-riad": {
    name: "Riad & Rana", lang: "en",
    options: [
      { value: "Riad & Rana (2)", label: "Both of us" },
      { value: "Riad only (1)",   label: "Riad only" },
      { value: "Rana only (1)",   label: "Rana only" }
    ]
  },
  "zee": {
    name: "Mohammed, Zainab & Rana", lang: "en",
    options: [
      { value: "Mohammed, Zainab & Rana (3)", label: "All three of us" },
      { value: "Mohammed & Zainab (2)",       label: "Mohammed & Zainab" },
      { value: "Mohammed only (1)",           label: "Mohammed only" }
    ]
  },
  "rana": {
    name: "Rana", lang: "en",
    options: [
      { value: "Rana (1)", label: "Just me" }
    ]
  },
  "dima": {
    name: "Dima", lang: "en",
    options: [
      { value: "Dima (1)", label: "Just me" }
    ]
  },
  "noor": {
    name: "Noor", lang: "en",
    options: [
      { value: "Noor (1)", label: "Just me" }
    ]
  },
  "ravin": {
    name: "Ravin & Ravin's Mom", lang: "en",
    options: [
      { value: "Ravin & Mom (2)", label: "Both of us" },
      { value: "Ravin only (1)",  label: "Ravin only" },
      { value: "Mom only (1)",    label: "Mom only" }
    ]
  },
  "mace": {
    name: "Mace & Ibrahim", lang: "en",
    options: [
      { value: "Mace & Ibrahim (2)", label: "Both of us" },
      { value: "Mace only (1)",      label: "Mace only" },
      { value: "Ibrahim only (1)",   label: "Ibrahim only" }
    ]
  },
  "toma": {
    name: "Toma & Saif", lang: "en",
    options: [
      { value: "Toma & Saif (2)", label: "Both of us" },
      { value: "Toma only (1)",   label: "Toma only" },
      { value: "Saif only (1)",   label: "Saif only" }
    ]
  },
  "humam": {
    name: "Humam & Baji", lang: "en",
    options: [
      { value: "Humam & Baji (2)", label: "Both of us" },
      { value: "Humam only (1)",   label: "Humam only" },
      { value: "Baji only (1)",    label: "Baji only" }
    ]
  },
  "shemo": {
    name: "Shemo", lang: "en",
    options: [
      { value: "Shemo (1)", label: "Just me" }
    ]
  },
  "roaa": {
    name: "Roaa & Husband", lang: "en",
    options: [
      { value: "Roaa & Husband (2)", label: "Both of us" },
      { value: "Roaa only (1)",      label: "Roaa only" },
      { value: "Husband only (1)",   label: "Husband only" }
    ]
  },
  "merwa": {
    name: "Merwa", lang: "en",
    options: [
      { value: "Merwa (1)", label: "Just me" }
    ]
  },
  "iptisam": {
    name: "Iptisam, Haneen & Aya", lang: "en",
    options: [
      { value: "Iptisam, Haneen & Aya (3)", label: "All three of us" },
      { value: "Iptisam & Haneen (2)",      label: "Iptisam & Haneen" },
      { value: "Iptisam & Aya (2)",         label: "Iptisam & Aya" },
      { value: "Iptisam only (1)",          label: "Iptisam only" }
    ]
  },
  "abooddad": {
    name: "Muwafaq Al-Fahdli", lang: "ar",
    options: [
      { value: "Muwafaq Al-Fahdli (1)", label: "Just me" }
    ]
  },
  "aboodmom": {
    name: "Esam & Jawthwa", lang: "en",
    options: [
      { value: "Esam & Jawthwa (2)", label: "Both of us" },
      { value: "Esam only (1)",      label: "Esam only" },
      { value: "Jawthwa only (1)",   label: "Jawthwa only" }
    ]
  },
  "tutu": {
    name: "Shoula Alhalafi", lang: "ar",
    options: [
      { value: "Shoula Alhalafi (1)", label: "Just me" }
    ]
  },
  "abdullah": {
    name: "Abdullah Yahya", lang: "en",
    options: [
      { value: "Abdullah Yahya (1)", label: "Just me" }
    ]
  },
  "marwa-ammar": {
    name: "Ammar, Marwa, Anmar & Tina", lang: "en",
    options: [
      { value: "Ammar, Marwa, Anmar & Tina (4)", label: "All four of us" },
      { value: "Ammar & Marwa (2)",              label: "Ammar & Marwa only" },
      { value: "Ammar only (1)",                 label: "Ammar only" }
    ]
  },
  "saif-zainab": {
    name: "Saif & Zainab", lang: "en",
    options: [
      { value: "Saif, Zainab & guest (3)", label: "All three of us" },
      { value: "Saif & Zainab (2)",        label: "Just the two of us" },
      { value: "Saif only (1)",            label: "Saif only" },
      { value: "Zainab only (1)",          label: "Zainab only" }
    ]
  },
  "nuha": {
    name: "Faris & Nuha", lang: "en",
    options: [
      { value: "Faris & Nuha (2)", label: "Both of us" },
      { value: "Faris only (1)",   label: "Faris only" },
      { value: "Nuha only (1)",    label: "Nuha only" }
    ]
  },
  "sinan": {
    name: "Sinan & Marwa", lang: "en",
    options: [
      { value: "Sinan, Marwa & 2 kids (4)", label: "All of us (4)" },
      { value: "Sinan & Marwa (2)",         label: "Sinan & Marwa only" },
      { value: "Sinan, Marwa & 1 kid (3)",  label: "Us + 1 child" }
    ]
  },
  "yousif": {
    name: "Yousif Maeen", lang: "en",
    options: [
      { value: "Yousif Maeen (1)", label: "Just me" }
    ]
  },
  "mayar": {
    name: "Mayar Elkazzaz", lang: "en",
    options: [
      { value: "Mayar Elkazzaz (1)", label: "Just me" }
    ]
  },
  "fahad": {
    name: "Fahad & Laith Aziza", lang: "en",
    options: [
      { value: "Fahad & Laith (2)", label: "Both of us" },
      { value: "Fahad only (1)",    label: "Fahad only" },
      { value: "Laith only (1)",    label: "Laith only" }
    ]
  },
  "jabar": {
    name: "Abdul Jabar Mohamed", lang: "en",
    options: [
      { value: "Abdul Jabar Mohamed (1)", label: "Just me" }
    ]
  },
  "anthony": {
    name: "Anthony Abdul Ahad", lang: "en",
    options: [
      { value: "Anthony Abdul Ahad (1)", label: "Just me" }
    ]
  },
  "basem": {
    name: "Basem Yassa", lang: "en",
    options: [
      { value: "Basem Yassa (1)", label: "Just me" }
    ]
  },
  "layan": {
    name: "Layan Bashi", lang: "en",
    options: [
      { value: "Layan Bashi (1)", label: "Just me" }
    ]
  },
  "nada": {
    name: "Nada", lang: "en",
    options: [
      { value: "Nada (1)", label: "Just me" }
    ]
  },
  "shakir": {
    name: "Shakir & Wife", lang: "en",
    options: [
      { value: "Shakir & Wife (2)", label: "Both of us" },
      { value: "Shakir only (1)",   label: "Shakir only" },
      { value: "Wife only (1)",     label: "Wife only" }
    ]
  },
  "jaffarfriend": {
    name: "Jaffar's Friend", lang: "en",
    options: [
      { value: "Jaffar's Friend (1)", label: "Just me" }
    ]
  },
  "narmin": {
    name: "Narmin", lang: "en",
    options: [
      { value: "Narmin (1)", label: "Just me" }
    ]
  },
  "haydar": {
    name: "Haydar", lang: "en",
    options: [
      { value: "Haydar (1)", label: "Just me" }
    ]
  },
  "maysa": {
    name: "Maysa", lang: "en",
    options: [
      { value: "Maysa (1)", label: "Just me" }
    ]
  },
  "meso": {
    name: "Meso", lang: "en",
    options: [
      { value: "Meso (1)", label: "Just me" }
    ]
  },
  "dumar": {
    name: "Dumar", lang: "en",
    options: [
      { value: "Dumar (1)", label: "Just me" }
    ]
  },
  "wassan": {
    name: "Wassan", lang: "en",
    options: [
      { value: "Wassan (1)", label: "Just me" }
    ]
  },
  "jaffarfarman": {
    name: "Jaffar Farman", lang: "en",
    options: [
      { value: "Jaffar Farman (1)", label: "Just me" }
    ]
  },
  "waseem": {
    name: "Waseem Hasan", lang: "en",
    options: [
      { value: "Waseem Hasan (1)", label: "Just me" }
    ]
  },
  "nabil": {
    name: "Nabil & Sarwa", lang: "ar",
    options: [
      { value: "Nabil & Sarwa (2)", label: "Both of us" },
      { value: "Nabil only (1)",    label: "Nabil only" },
      { value: "Sarwa only (1)",    label: "Sarwa only" }
    ]
  }
};

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
      { value: "Jaffar only (1)", label: "Jaffar only" },
      { value: "Rinad only (1)", label: "Rinad only" }
    ]
  },
  "rawand": {
    name: "Adam & Rawand", lang: "en",
    options: [
      { value: "Adam & Rawand (2)", label: "Both of us" },
      { value: "Adam only (1)", label: "Adam only" },
      { value: "Rawand only (1)", label: "Rawand only" }
    ]
  },
  "rana-riad": {
    name: "Riad & Rana", lang: "en",
    options: [
      { value: "Riad & Rana (2)", label: "Both of us" },
      { value: "Riad only (1)", label: "Riad only" },
      { value: "Rana only (1)", label: "Rana only" }
    ]
  },
  "zee": {
    name: "Mohammed & Zeinab & Nada", lang: "en",
    options: [
      { value: "Mohammed, Zeinab & Nada (3)", label: "All three of us" },
      { value: "Mohammed & Zeinab (2)", label: "Mohammed & Zeinab" },
      { value: "Mohammed & Nada (2)", label: "Mohammed & Nada" },
      { value: "Zeinab & Nada (2)", label: "Zeinab & Nada" },
      { value: "Mohammed only (1)", label: "Mohammed only" },
      { value: "Zeinab only (1)", label: "Zeinab only" },
      { value: "Nada only (1)", label: "Nada only" }
    ]
  },
  "rana": {
    name: "Raana Khalife", lang: "en",
    options: [
      { value: "Raana Khalife (1)", label: "Just me" }
    ]
  },
  "dima": {
    name: "Dima Nassar", lang: "en",
    options: [
      { value: "Dima Nassar (1)", label: "Just me" }
    ]
  },
  "noor": {
    name: "Noor Nassar", lang: "en",
    options: [
      { value: "Noor Nassar (1)", label: "Just me" }
    ]
  },
  "ravin": {
    name: "Ravin and Bahar Ola", lang: "en",
    options: [
      { value: "Ravin & Bahar Ola (2)", label: "Both of us" },
      { value: "Ravin only (1)", label: "Ravin only" },
      { value: "Bahar Ola only (1)", label: "Bahar Ola only" }
    ]
  },
  "mace": {
    name: "Mace & Ibrahim", lang: "ar",
    options: [
      { value: "Mace & Ibrahim (2)", label: "Both of us" },
      { value: "Mace only (1)", label: "Mace only" },
      { value: "Ibrahim only (1)", label: "Ibrahim only" }
    ]
  },
  "toma": {
    name: "Toma & Saif", lang: "ar",
    options: [
      { value: "Toma & Saif (2)", label: "Both of us" },
      { value: "Toma only (1)", label: "Toma only" },
      { value: "Saif only (1)", label: "Saif only" }
    ]
  },
  "humam": {
    name: "Humam & Baji", lang: "ar",
    options: [
      { value: "Humam & Baji (2)", label: "Both of us" },
      { value: "Humam only (1)", label: "Humam only" },
      { value: "Baji only (1)", label: "Baji only" }
    ]
  },
  "shemo": {
    name: "Shayma Al Ghrairie", lang: "ar",
    options: [
      { value: "Shayma Al Ghrairie (1)", label: "Just me" }
    ]
  },
  "roaa": {
    name: "Roaa & Ibrahim", lang: "en",
    options: [
      { value: "Roaa & Ibrahim (2)", label: "Both of us" },
      { value: "Roaa only (1)", label: "Roaa only" },
      { value: "Ibrahim only (1)", label: "Ibrahim only" }
    ]
  },
  "merwa": {
    name: "Merwa Amer", lang: "ar",
    options: [
      { value: "Merwa Amer (1)", label: "Just me" }
    ]
  },
  "iptisam": {
    name: "Iptisam, Haneen, Aya", lang: "ar",
    options: [
      { value: "Iptisam, Haneen & Aya (3)", label: "All three of us" },
      { value: "Iptisam & Haneen (2)", label: "Iptisam & Haneen" },
      { value: "Iptisam & Aya (2)", label: "Iptisam & Aya" },
      { value: "Haneen & Aya (2)", label: "Haneen & Aya" },
      { value: "Iptisam only (1)", label: "Iptisam only" },
      { value: "Haneen only (1)", label: "Haneen only" },
      { value: "Aya only (1)", label: "Aya only" }
    ]
  },
  "abooddad": {
    name: "Muwafaq Al-Fahdli", lang: "ar",
    options: [
      { value: "Muwafaq Al-Fahdli (1)", label: "Just me" }
    ]
  },
  "aboodmom": {
    name: "Esam & Jathwa", lang: "en",
    options: [
      { value: "Esam & Jathwa (2)", label: "Both of us" },
      { value: "Esam only (1)", label: "Esam only" },
      { value: "Jathwa only (1)", label: "Jathwa only" }
    ]
  },
  "tutu": {
    name: "Shoulla Al Halaafi", lang: "ar",
    options: [
      { value: "Shoulla Al Halaafi (1)", label: "Just me" }
    ]
  },
  "abdullah": {
    name: "Abdullah Yahya", lang: "en",
    options: [
      { value: "Abdullah Yahya (1)", label: "Just me" }
    ]
  },
  "marwa-ammar": {
    name: "Ammar & Marwa & Anmar & Tina", lang: "en",
    options: [
      { value: "Ammar, Marwa, Anmar & Tina (4)", label: "All four of us" },
      { value: "Marwa, Anmar & Tina (3)", label: "Without Ammar" },
      { value: "Ammar, Anmar & Tina (3)", label: "Without Marwa" },
      { value: "Ammar, Marwa & Tina (3)", label: "Without Anmar" },
      { value: "Ammar, Marwa & Anmar (3)", label: "Without Tina" },
      { value: "Ammar only (1)", label: "Ammar only" },
      { value: "Marwa only (1)", label: "Marwa only" },
      { value: "Anmar only (1)", label: "Anmar only" },
      { value: "Tina only (1)", label: "Tina only" }
    ]
  },
  "saif-zainab": {
    name: "Saif & Zineb", lang: "en",
    options: [
      { value: "Saif & Zineb + 1 guest (3)", label: "Both of us + 1 guest" },
      { value: "Saif & Zineb (2)", label: "Both of us" },
      { value: "Saif only (1)", label: "Saif only" },
      { value: "Zineb only (1)", label: "Zineb only" }
    ]
  },
  "nuha": {
    name: "Faris & Nuha", lang: "en",
    options: [
      { value: "Faris & Nuha (2)", label: "Both of us" },
      { value: "Faris only (1)", label: "Faris only" },
      { value: "Nuha only (1)", label: "Nuha only" }
    ]
  },
  "sinan": {
    name: "Sinan & Marwa", lang: "en",
    options: [
      { value: "Sinan & Marwa + 2 guests (4)", label: "Both of us + 2 guests" },
      { value: "Sinan & Marwa + 1 guest (3)",  label: "Both of us + 1 guest" },
      { value: "Sinan & Marwa (2)", label: "Both of us" },
      { value: "Sinan only (1)", label: "Sinan only" },
      { value: "Marwa only (1)", label: "Marwa only" }
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
      { value: "Fahad & Laith Aziza (2)", label: "Both of us" },
      { value: "Fahad only (1)", label: "Fahad only" },
      { value: "Laith Aziza only (1)", label: "Laith Aziza only" }
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
    name: "Shakir & Azhar", lang: "en",
    options: [
      { value: "Shakir & Azhar (2)", label: "Both of us" },
      { value: "Shakir only (1)", label: "Shakir only" },
      { value: "Azhar only (1)", label: "Azhar only" }
    ]
  },
  "jaffarfriend": {
    name: "Izzy Santos", lang: "en",
    options: [
      { value: "Izzy Santos (1)", label: "Just me" }
    ]
  },
  "narmin": {
    name: "Narmin Mortagy", lang: "en",
    options: [
      { value: "Narmin Mortagy (1)", label: "Just me" }
    ]
  },
  "haydar": {
    name: "Haider Bahjat", lang: "ar",
    options: [
      { value: "Haydar (1)", label: "Just me" }
    ]
  },
  "maysa": {
    name: "Maysa Yassin", lang: "en",
    options: [
      { value: "Maysa Yassin (1)", label: "Just me" }
    ]
  },
  "dumar": {
    name: "Dumar Yassin", lang: "en",
    options: [
      { value: "Dumar Yassin (1)", label: "Just me" }
    ]
  },
  "wassan": {
    name: "Wassan Al-Saleh", lang: "en",
    options: [
      { value: "Wassan Al-Saleh (1)", label: "Just me" }
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
  "mustafa": {
    name: "Mustafa & Nadine", lang: "ar",
    options: [
      { value: "Mustafa & Nadine (2)", label: "Both of us" },
      { value: "Mustafa only (1)", label: "Mustafa only" },
      { value: "Nadine only (1)", label: "Nadine only" }
    ]
  },
  "mackenzie": {
    name: "Mackenzie Brooks", lang: "en",
    options: [
      { value: "Mackenzie Brooks (1)", label: "Just me" }
    ]
  },
  "chris": {
    name: "Chris Bees", lang: "en",
    options: [
      { value: "Chris Bees (1)", label: "Just me" }
    ]
  },
  "omar": {
    name: "Omar Hasan", lang: "en",
    options: [
      { value: "Omar Hasan (2)", label: "Both of us" },
      { value: "Omar Hasan only (1)", label: "Just me" }
    ]
  },
  "sara": {
    name: "Sara Alshukur", lang: "en",
    options: [
      { value: "Sara Alshukur (1)", label: "Just me" }
    ]
  },
  "lejla": {
    name: "Lejla Rahe", lang: "en",
    options: [
      { value: "Lejla Rahe (1)", label: "Just me" }
    ]
  },
  "omar-slavice": {
    name: "Omar & Slavice", lang: "en",
    options: [
      { value: "Omar & Slavice (2)", label: "Both of us" },
      { value: "Omar only (1)", label: "Omar only" },
      { value: "Slavice only (1)", label: "Slavice only" }
    ]
  },
  "salam": {
    name: "Salam & Fadwa", lang: "ar",
    options: [
      { value: "Salam & Fadwa (2)", label: "Both of us" },
      { value: "Salam only (1)", label: "Salam only" },
      { value: "Fadwa only (1)", label: "Fadwa only" }
    ]
  },
  "souad": {
    name: "Souad, Sameer, Ahmed & Hisham", lang: "ar",
    options: [
      { value: "Souad, Sameer, Ahmed & Hisham (4)", label: "All four of us" },
      { value: "Sameer, Ahmed & Hisham (3)", label: "Without Souad" },
      { value: "Souad, Ahmed & Hisham (3)", label: "Without Sameer" },
      { value: "Souad, Sameer & Hisham (3)", label: "Without Ahmed" },
      { value: "Souad, Sameer & Ahmed (3)", label: "Without Hisham" },
      { value: "Souad only (1)", label: "Souad only" },
      { value: "Sameer only (1)", label: "Sameer only" },
      { value: "Ahmed only (1)", label: "Ahmed only" },
      { value: "Hisham only (1)", label: "Hisham only" }
    ]
  },
  "nabil": {
    name: "Nabil & Sarwa", lang: "ar",
    options: [
      { value: "Nabil & Sarwa (2)", label: "Both of us" },
      { value: "Nabil only (1)", label: "Nabil only" },
      { value: "Sarwa only (1)", label: "Sarwa only" }
    ]
  },
  "suham": {
    name: "Suham Al Shaikhly", lang: "ar",
    options: [
      { value: "Suham Al Shaikhly (1)", label: "Just me" }
    ]
  },
  "yassir": {
    name: "Yassir Alkhayat", lang: "en",
    options: [
      { value: "Yassir Alkhayat (1)", label: "Just me" }
    ]
  },
  "sulekh": {
    name: "Sulekh & Alysha Khindria", lang: "en",
    options: [
      { value: "Sulekh & Alysha Khindria (2)", label: "Both of us" },
      { value: "Sulekh only (1)", label: "Sulekh only" },
      { value: "Alysha only (1)", label: "Alysha only" }
    ]
  },
  "joshua": {
    name: "Joshua & Maddie Khindria", lang: "en",
    options: [
      { value: "Joshua & Maddie Khindria (2)", label: "Both of us" },
      { value: "Joshua only (1)", label: "Joshua only" },
      { value: "Maddie only (1)", label: "Maddie only" }
    ]
  },
  "ahmed": {
    name: "Ahmed & Esraa", lang: "en",
    options: [
      { value: "Ahmed & Esraa (2)", label: "Both of us" },
      { value: "Ahmed only (1)", label: "Ahmed only" },
      { value: "Esraa only (1)", label: "Esraa only" }
    ]
  },
  "ban": {
    name: "Ban Baraya & Ria Saridar", lang: "en",
    options: [
      { value: "Ban Baraya & Ria Saridar (2)", label: "Both of us" },
      { value: "Ban only (1)", label: "Ban only" },
      { value: "Ria only (1)", label: "Ria only" }
    ]
  },
  "maeen": {
    name: "Maeen Bolous & Silva Afram", lang: "ar",
    options: [
      { value: "Maeen Bolous & Silva Afram (2)", label: "Both of us" },
      { value: "Maeen Bolous only (1)", label: "Maeen Bolous only" },
      { value: "Silva Afram only (1)", label: "Silva Afram only" }
    ]
  },
  "nada-alqudsi": {
    name: "Nada Alqudsi", lang: "ar",
    options: [
      { value: "Nada Alqudsi (1)", label: "Just me" }
    ]
  },
  "yusur": {
    name: "Yusur Alaloosi", lang: "en",
    options: [
      { value: "Yusur Alaloosi (1)", label: "Just me" }
    ]
  }
};

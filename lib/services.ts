export type ServicePackage = {
  name: string;
  price: string;
  duration: string;
  revisions: string;
  features: string[];
  deliverables: string[];
};

export const packages: ServicePackage[] = [
  {
    name: "Basic",
    price: "Rp1,4 jt",
    duration: "5 hari",
    revisions: "2 Berapa kali",
    features: [
      "Pembuatan 1-5 halaman website (Landing Page)",
      "Desain responsive (desktop & mobile)",
      "Struktur rapi & clean",
      "Cocok untuk personal / UMKM / company profile sederhana",
    ],
    deliverables: [
      "Halaman website (HTML/CSS/JS atau sesuai kesepakatan)",
      "Source code",
      "File siap upload ke hosting",
      "Tampilan responsive",
      "Minor revisi (2x)",
    ],
  },
  {
    name: "Pro",
    price: "Rp2,0 jt",
    duration: "7 hari",
    revisions: "3 Berapa kali",
    features: [
      "Pembuatan website hingga 5-8 halaman",
      "Desain modern & profesional",
      "Struktur website lebih optimal",
      "Cocok untuk company profile & bisnis berkembang",
    ],
    deliverables: [
      "Halaman website (HTML/CSS/JS atau sesuai kesepakatan)",
      "Desain responsive & user friendly",
      "Source code lengkap",
      "Optimasi struktur & layout",
      "Revisi hingga 3x",
      "Bantuan upload ke hosting",
    ],
  },
  {
    name: "Custom",
    price: "Rp1,4 jt",
    duration: "7 hari",
    revisions: "Tak terbatas",
    features: [
      "Website sesuai kebutuhan klien",
      "Bisa landing page / company profile / custom fitur",
      "Teknologi & desain menyesuaikan kebutuhan",
    ],
    deliverables: [
      "Website sesuai brief",
      "Source code",
      "Desain responsive",
      "Fitur sesuai permintaan",
      "Revisi fleksibel",
      "Konsultasi sebelum & selama pengerjaan",
    ],
  },
];

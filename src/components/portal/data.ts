// [DEMO DATA - MORADABAD PILOT] — sample records; replace with verified database entries.

export const trending = [
  "Flood Housing Relief",
  "DigiLocker Document Recovery",
  "Lost Ration Card Reprint",
  "Moradabad Relief Camps",
  "Crop Damage Compensation",
  "Death / Injury Relief Grant",
];

export const categories = [
  "All Categories",
  "Financial Compensation",
  "Housing Relief",
  "Document Recovery",
  "Medical Help",
  "Office Directory",
  "Active Alerts",
];

// Honest prototype facts — no fabricated impact numbers.
export const stats = [
  { v: "6", l: "Relief Schemes Mapped" },
  { v: "5", l: "Tehsils Covered" },
  { v: "6", l: "Nodal Offices Listed" },
  { v: "4-Step", l: "Recovery Roadmap" },
  { v: "2", l: "Languages Supported" },
  { v: "0", l: "Cost to Citizens" },
];

export type Scheme = {
  name: string;
  dept: "Revenue" | "Agriculture" | "Social Welfare";
  category: "Cash" | "Material" | "Reconstruction";
  eligibility: "Small Farmer" | "BPL" | "Urban Resident";
  ministry: string;
  benefit: string;
};

export const schemes: Scheme[] = [
  {
    name: "UP Disaster Relief & House Reconstruction Assistance",
    dept: "Revenue",
    category: "Reconstruction",
    eligibility: "BPL",
    ministry: "Department of Disaster Management & Relief, Govt. of UP",
    benefit: "Up to ₹1,20,000 for fully damaged houses",
  },
  {
    name: "SDRF Agricultural Input Subsidy (Crop Loss)",
    dept: "Agriculture",
    category: "Cash",
    eligibility: "Small Farmer",
    ministry: "Department of Agriculture, Govt. of UP",
    benefit: "₹8,500 per hectare (rainfed), up to 2 ha",
  },
  {
    name: "Ex-Gratia Assistance for Loss of Life",
    dept: "Revenue",
    category: "Cash",
    eligibility: "BPL",
    ministry: "Revenue Department, Collectorate Moradabad",
    benefit: "₹4,00,000 to next of kin",
  },
  {
    name: "Emergency Dry Ration & Relief Kit Distribution",
    dept: "Social Welfare",
    category: "Material",
    eligibility: "Urban Resident",
    ministry: "Food & Civil Supplies Department, Govt. of UP",
    benefit: "15-day ration kit per affected household",
  },
  {
    name: "Clothing & Utensil Loss Assistance",
    dept: "Social Welfare",
    category: "Cash",
    eligibility: "Urban Resident",
    ministry: "Department of Disaster Management & Relief, Govt. of UP",
    benefit: "₹2,500 + ₹2,500 per family",
  },
  {
    name: "Pucca / Kuccha House Partial Damage Grant",
    dept: "Revenue",
    category: "Reconstruction",
    eligibility: "Small Farmer",
    ministry: "Revenue Department, Govt. of UP",
    benefit: "₹6,500 (pucca) / ₹4,000 (kuccha)",
  },
];

export const tehsils = ["Moradabad Sadar", "Kanth", "Bilari", "Thakurdwara", "Chandausi"] as const;

export const offices = [
  { tehsil: "Moradabad Sadar", name: "Tehsil Office, Moradabad Sadar", officer: "Tehsildar (Sadar) — Nodal Relief Officer", address: "Civil Lines, Moradabad, UP 244001", phone: "0591-2410XXX", wa: "+91 94XXX XXX01", hours: "10:00 – 17:00, Mon–Sat" },
  { tehsil: "Moradabad Sadar", name: "District Emergency Operations Centre", officer: "ADM (Finance & Revenue)", address: "Collectorate Campus, Moradabad", phone: "1077", wa: "+91 94XXX XXX02", hours: "24 × 7" },
  { tehsil: "Kanth", name: "Tehsil Office, Kanth", officer: "Tehsildar Kanth / Lekhpal Cell", address: "Main Road, Kanth, Moradabad", phone: "0591-2601XXX", wa: "+91 94XXX XXX03", hours: "10:00 – 17:00, Mon–Sat" },
  { tehsil: "Bilari", name: "Block Development Office, Bilari", officer: "BDO Bilari", address: "Bilari Town, Moradabad", phone: "0591-2700XXX", wa: "+91 94XXX XXX04", hours: "10:00 – 17:00, Mon–Sat" },
  { tehsil: "Thakurdwara", name: "Tehsil Office, Thakurdwara", officer: "Tehsildar Thakurdwara", address: "Kashipur Road, Thakurdwara", phone: "0591-2800XXX", wa: "+91 94XXX XXX05", hours: "10:00 – 17:00, Mon–Sat" },
  { tehsil: "Chandausi", name: "Relief Coordination Desk, Chandausi", officer: "Naib Tehsildar (Relief)", address: "Station Road, Chandausi", phone: "05921-25XXXX", wa: "+91 94XXX XXX06", hours: "09:00 – 18:00, Daily" },
];

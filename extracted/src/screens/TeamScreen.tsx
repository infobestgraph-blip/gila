import React, { useState, useMemo } from 'react';
import { 
  Mail, 
  Phone, 
  Users, 
  Globe, 
  Shield, 
  Award, 
  Search, 
  Play, 
  X, 
  MessageSquare, 
  Check, 
  Sparkles, 
  Filter,
  ArrowRight,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TeamMember {
  name: string;
  role: string;
  subRole?: string;
  specialty?: string;
  department: 'management' | 'sales' | 'operations' | 'technical' | 'service' | 'suppliers';
  photo: string;
  whatsapp?: string;
  email?: string;
  languages?: string[];
}

export default function TeamScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<'all' | 'management' | 'sales' | 'operations' | 'technical' | 'service' | 'suppliers'>('all');
  const [activeVideoModal, setActiveVideoModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showStoryModal, setShowStoryModal] = useState(false);

  // Raw team members data as illustrated in original designs
  const teamMembers: TeamMember[] = [
    // MANAGEMENT
    {
      name: "Maher Tahmasebi",
      role: "Managing Director",
      subRole: "CEO of Sabz Gostaran Gilan Fruit and the GilaFruit brand",
      department: "management",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      whatsapp: "+989900978002",
      email: "maher.tahmasebi@gilafruit.com",
      languages: ["Persian", "English", "Russian"]
    },
    {
      name: "Soheyl Tahmasebi",
      role: "Board of Directors",
      subRole: "Logistics, transportation, sorting, packaging, warehousing, and customs clearance",
      department: "management",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      whatsapp: "+989900978002",
      email: "soheyl.t@gilafruit.com",
      languages: ["Persian", "Turkish"]
    },
    {
      name: "Alireza Yousefi",
      role: "Board of Directors",
      subRole: "Head of domestic and international sales, marketing manager, e-commerce sales",
      department: "management",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      whatsapp: "+989900978002",
      email: "alireza.yousefi@gilafruit.com",
      languages: ["Persian", "English", "Arabic"]
    },
    {
      name: "Alireza Dabiri",
      role: "Board of Directors",
      subRole: "Supervisor of Information Technology and Website Systems, Support and Technical Team",
      department: "management",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      whatsapp: "+989900978002",
      email: "alireza.dabiri@gilafruit.com",
      languages: ["Persian", "English"]
    },

    // SALES
    {
      name: "Mohammad Ranjbar",
      role: "International Sales Manager",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      whatsapp: "+989113893051",
      email: "ranjbar@gilafruit.com",
      languages: ["Persian", "English", "Russian"]
    },
    {
      name: "Semen Karpov",
      role: "Commercial Manager of Eurasia",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      languages: ["Russian", "English"]
    },
    {
      name: "Nili Bahadori",
      role: "Commercial Manager of Arab Countries",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      languages: ["Persian", "Arabic", "English"]
    },
    {
      name: "Ahldin Dehghan Ov",
      role: "Commercial Manager of Uzbekistan and Tajikistan",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
      languages: ["Uzbek", "Tajik", "Russian"]
    },
    {
      name: "Shayan Hemati",
      role: "Commercial Manager of Türkiye, Greece, Bulgaria",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
      languages: ["Turkish", "Persian", "English"]
    },
    {
      name: "Hossein Gheybi",
      role: "Commercial Manager of Uzbekistan, Kyrgyzstan",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1542156822-6924d1a71aba?auto=format&fit=crop&q=80&w=400",
      languages: ["Uzbek", "Russian"]
    },
    {
      name: "Javad Miri",
      role: "Commercial Manager of Uzbekistan and Turkmenistan",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400",
      languages: ["Turkmen", "Russian"]
    },
    {
      name: "Sara Shabanpour",
      role: "Commercial Manager of Armenia and Georgia",
      department: "sales",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
      languages: ["Georgian", "Armenian", "English"]
    },

    // OPERATIONS
    {
      name: "Alireza Jafarian",
      role: "Customs Clearance & Documentation",
      department: "operations",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
      languages: ["Persian", "English"]
    },
    {
      name: "Mohammad Reza Habibi",
      role: "Customs Transportation Logistics",
      department: "operations",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
      languages: ["Persian", "Turkish"]
    },
    {
      name: "Reza Tabadoli",
      role: "Sorting, Packaging & Quality Control",
      department: "operations",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Erfan Karami",
      role: "Sea Freight & Clearance",
      department: "operations",
      photo: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Morteza Yousefi",
      role: "Loading & Controlling Refrigerated Trucks",
      department: "operations",
      photo: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Mahsa Ahmadi",
      role: "Clearance Expert & Transportation Support",
      department: "operations",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Heydar Mousavi",
      role: "Control of Product Health Approvals & QA",
      department: "operations",
      photo: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&q=80&w=400"
    },

    // TECHNICAL
    {
      name: "Alireza Dabiri",
      role: "IT Systems & Web Development Leader",
      department: "technical",
      photo: "https://images.unsplash.com/photo-1504257401700-1a6158a6967d?auto=format&fit=crop&q=80&w=400",
      languages: ["Persian", "English"]
    },
    {
      name: "Qasem Arabzadeh",
      role: "Website Support & Devops Server Expert",
      department: "technical",
      photo: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Payam Dibai",
      role: "Head of Social Media Unit & Press",
      department: "technical",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "AliAkbar Azizi",
      role: "Head of Content Production Department",
      department: "technical",
      photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400"
    },

    // SERVICE
    {
      name: "Hamid Danishyar",
      role: "Domestic Transportation Lead",
      department: "service",
      photo: "https://images.unsplash.com/photo-1541577140430-959c581176ae?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hamed Mohammadpour",
      role: "Transportation & Global Cargo Insurance",
      department: "service",
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Reza Shafakar",
      role: "Inspection & Phytosanitary Liaison",
      department: "service",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ebrahim Mokhtarpour",
      role: "Procurement & Strategic Product Labeling",
      department: "service",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },

    // SUPPLIERS
    {
      name: "Soheil Khodkar",
      role: "Supplier Partner",
      specialty: "Iceberg, cabbage, cauliflower, celery, Romano",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Javid Heydamia",
      role: "Supplier Partner",
      specialty: "Fresh dill and parsley",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hossein Rajabi",
      role: "Supplier Partner",
      specialty: "Iceberg, cabbage, cauliflower, celery, romaine",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Saeed Kokabpour",
      role: "Supplier Partner",
      specialty: "Kiwi, watermelon, cantaloupe, tomatoes",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Saman Zahedi",
      role: "Supplier Partner",
      specialty: "Celery, broccoli, Chinese lettuce",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hamid Bahri",
      role: "Supplier Partner",
      specialty: "Grapes, cherries, apples, sour cherries, apricots, peaches, nectarines",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1542156822-6924d1a71aba?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ms. Bashirzadeh",
      role: "Supplier Partner",
      specialty: "Sorting & premium packaging of salad products",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Vahid Ghorbani",
      role: "Supplier Partner",
      specialty: "Kiwi varieties, premium orange farms",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Amir Ghorbanpour",
      role: "Supplier Partner",
      specialty: "Fresh aromatic dill, savory parsley, coriander",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ali Moslehi",
      role: "Supplier Partner",
      specialty: "Premium Grapes, fresh pomegranates, export apples",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ali Mohammadi",
      role: "Supplier Partner",
      specialty: "Iceberg, organic celery, crisp Romano, broccoli, Chinese lettuce",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Iman Isapare",
      role: "Supplier Partner",
      specialty: "Sweet watermelon, cantaloupe and yellow melon",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Majid Namjor",
      role: "Supplier Partner",
      specialty: "Traditional fresh dill, parsley, and select coriander",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Mohsen Farjami",
      role: "Supplier Partner",
      specialty: "Export Kiwi, sweet watermelon, fresh peach, nectarine",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hossein Delirian",
      role: "Supplier Partner",
      specialty: "Premium sweet table grapes",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hossein Sarbolandi",
      role: "Supplier Partner",
      specialty: "Sweet local Peach, white nectarine, red watermelon",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hassan Sarbolandi",
      role: "Supplier Partner",
      specialty: "Aromatic Peach, golden nectarine, sweet watermelon",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Eissa Shojaei",
      role: "Supplier Partner",
      specialty: "Plump black Cherry, sweet sour cherry, apricot, peach, nectarine",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ali Sultan Kazemi",
      role: "Supplier Partner",
      specialty: "High-yield white cauliflower, green cabbage varieties",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Elyas Madani",
      role: "Supplier Partner",
      specialty: "Crispy Iceberg, tall celery, robust Romano lettuce",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hamze Mohammadi",
      role: "Supplier Partner",
      specialty: "Organic seedless grapes and crimson pomegranates",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Mojtaba Razaqmanesh",
      role: "Supplier Partner",
      specialty: "Various kiwis, specialized warehouse sorting and packing",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1542156822-6924d1a71aba?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Firuz Noapour",
      role: "Supplier Partner",
      specialty: "Sweet Corn, big eggplant, juicy tomato, orange pumpkin",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ebrahim Hashemi",
      role: "Supplier Partner",
      specialty: "Crisp cucumber, red & yellow bell pepper varieties",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Amir Nemati",
      role: "Supplier Partner",
      specialty: "Wide variety of premium summer vegetable crops",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Rasool Pourmand",
      role: "Supplier Partner",
      specialty: "Striped watermelon, juicy honey melon",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Reza Moslehi",
      role: "Supplier Partner",
      specialty: "Premium sweet grapes, rubicund pomegranates, red apples",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Freibors Mohammadi",
      role: "Supplier Partner",
      specialty: "Crunchy Iceberg, organic celery, premium Romano lettuce",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Aliakbar Amankhah",
      role: "Supplier Partner",
      specialty: "Premium Iceberg, local celery, green Romano, broccoli",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1527983359383-4758693f760c?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Khayyam Hakimian",
      role: "Supplier Partner",
      specialty: "Classic Romano lettuce, healthy broccoli, Chinese lettuce",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Maqsoud Durkhah",
      role: "Supplier Partner",
      specialty: "Fresh citrus, oranges, aromatic tangerines",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Gholam Aghajani",
      role: "Supplier Partner",
      specialty: "High starch potatoes, dried & fresh purple garlic",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Amir Moussavian",
      role: "Supplier Partner",
      specialty: "Kiwifruit varieties, sweet pears, summer peaches",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1541577140430-959c581176ae?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Milad Majidi",
      role: "Supplier Partner",
      specialty: "Eclectical varieties of premium ripe summer fruits",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ibrahim Doglou",
      role: "Supplier Partner",
      specialty: "High-grade Iranian kiwis, organic pungent garlic",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Amir Khanjani",
      role: "Supplier Partner",
      specialty: "Premium golden & green Kiwi, organic mixed salad crops",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Farhad Razi",
      role: "Master Kiwi Farmer",
      specialty: "Heritage kiwi orchards, premium handpicked exports",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Kaveh Beyhaqi",
      role: "Master Kiwi Farmer",
      specialty: "Precision agriculture kiwi grower under organic codes",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Arash Khawarizmi",
      role: "Master Kiwi Farmer",
      specialty: "Controlled environment kiwi vineyard pioneer",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Adam Pourhatam",
      role: "Master Kiwi Farmer",
      specialty: "Aesthetic kiwi gardens of high moisture coastal fields",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Mahmoud Karjo",
      role: "Master Kiwi Farmer",
      specialty: "Generational kiwi grower in Astara's supreme belt",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Parsa Ferdowsi",
      role: "Master Kiwi Farmer",
      specialty: "Bio-certified high grade Hayward kiwi agriculturalist",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Hamid Eslami",
      role: "Master Kiwi Farmer",
      specialty: "Sustainable smart water kiwi orchard proprietor",
      department: "suppliers",
      photo: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  // Group and count stats for dynamic tabs
  const deptCounters = useMemo(() => {
    const counts = {
      all: teamMembers.length,
      management: 0,
      sales: 0,
      operations: 0,
      technical: 0,
      service: 0,
      suppliers: 0
    };
    teamMembers.forEach(m => {
      counts[m.department] += 1;
    });
    return counts;
  }, [teamMembers]);

  // Combined search + department filter
  const filteredTeam = useMemo(() => {
    return teamMembers.filter(m => {
      const matchesDept = selectedDept === 'all' || m.department === selectedDept;
      const cleanSearch = searchTerm.toLowerCase().trim();
      const matchesName = m.name.toLowerCase().includes(cleanSearch);
      const matchesRole = m.role.toLowerCase().includes(cleanSearch);
      const matchesSpecialty = m.specialty?.toLowerCase().includes(cleanSearch) || false;
      const matchesSubrole = m.subRole?.toLowerCase().includes(cleanSearch) || false;

      return matchesDept && (matchesName || matchesRole || matchesSpecialty || matchesSubrole);
    });
  }, [searchTerm, selectedDept, teamMembers]);

  const departmentsConfig = [
    { id: 'all', name: 'All Members', label: 'All', color: 'border-emerald-600' },
    { id: 'management', name: 'Management', label: 'Management', color: 'border-amber-500' },
    { id: 'sales', name: 'Sales & Commercial', label: 'Sales & Commercial', color: 'border-teal-500' },
    { id: 'operations', name: 'Operations & Logistics', label: 'Operations', color: 'border-blue-500' },
    { id: 'technical', name: 'IT Support & Tech', label: 'Technical Support', color: 'border-indigo-500' },
    { id: 'service', name: 'Service Providers', label: 'Service Providers', color: 'border-purple-500' },
    { id: 'suppliers', name: 'Suppliers & Farmers', label: 'Suppliers & Farmers', color: 'border-emerald-500' }
  ];

  // Ordered sections corresponding to original design for beautiful modern sectionized layout
  const orderedSections = [
    { id: 'management', name: 'MANAGEMENT', subtitle: 'Management', desc: 'CEO, senior executives, and department managers' },
    { id: 'sales', name: 'SALES', subtitle: 'Sales', desc: 'Domestic and international sales teams, marketing, and online sales' },
    { id: 'operations', name: 'OPERATIONS', subtitle: 'Operations', desc: 'Logistics, transportation, sorting and packaging, warehousing, and customs clearance' },
    { id: 'technical', name: 'TECHNICAL', subtitle: 'Technical Support', desc: 'IT systems and website support team' },
    { id: 'service', name: 'SERVICE', subtitle: 'Service Providers', desc: 'Transportation companies, product inspection companies, insurance companies, and more' },
    { id: 'suppliers', name: 'SUPPLIERS', subtitle: 'Suppliers & Farmers', desc: "GilaFruit's Supply Chain Personnel, including Growers, Farmers and Greenhouse" }
  ];

  // Premium High-Impact Large Card Renderer
  const renderMemberCard = (member: TeamMember, index: number) => {
    const initials = member.name.split(' ').map(n => n[0]).join('');
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.25) }}
        key={member.name + member.role}
        onClick={() => setSelectedMember(member)}
        className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-950/5 hover:border-emerald-800/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer text-left"
      >
        {/* Massive elegant portrait ratio photo */}
        <div className="w-full aspect-[3/4] sm:aspect-[4/5] relative overflow-hidden bg-slate-50 flex-shrink-0">
          {member.photo ? (
            <img 
              src={member.photo} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-emerald-900 to-[#01261d] text-white flex items-center justify-center font-bold text-3xl font-sans">
              {initials}
            </div>
          )}
          
          {/* Elegant overlay shadow inside picture */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
          
          {/* Upper tags and details floating gracefully on the image */}
          <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest font-mono font-black px-2.5 py-1.5 bg-[#01261d]/85 text-amber-400 rounded-xl backdrop-blur-md border border-emerald-800/30 shadow-md">
            {member.department}
          </span>
          
          {/* Subtle live signal pulsing bulb */}
          <span className="absolute top-4 right-4 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          <div className="absolute bottom-4 left-4 right-4 text-white z-10 block lg:hidden group-hover:block transition-all duration-500">
            <span className="text-[10px] font-mono tracking-wider text-amber-400 font-bold uppercase transition-transform">Click to View Bio</span>
          </div>
        </div>

        {/* Text information */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <h3 className="font-display font-black text-[#01261d] text-lg sm:text-xl tracking-tight leading-snug group-hover:text-emerald-800 transition-colors">
              {member.name}
            </h3>
            
            <p className="text-[#1a8a42] font-black text-[11px] sm:text-xs uppercase tracking-wider leading-none">
              {member.role}
            </p>
            
            {member.subRole && (
              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 text-justify font-sans pt-1">
                {member.subRole}
              </p>
            )}

            {member.specialty && (
              <div className="pt-2">
                <span className="text-[9px] tracking-wider text-slate-400 font-black uppercase block mb-1">Crops & Specialties:</span>
                <p className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-100/50 px-2.5 py-1 text-left rounded-lg inline-block leading-snug">
                  🌿 {member.specialty}
                </p>
              </div>
            )}
          </div>

          {member.languages && member.languages.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {member.languages.map(lang => (
                <span 
                  key={lang} 
                  className="px-2 py-0.5 bg-slate-50 text-slate-500 border border-slate-200/40 rounded text-[9px] font-bold"
                >
                  🗣️ {lang}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Hover activation footer */}
        <div className="px-6 py-4.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 group-hover:text-emerald-950 font-black flex items-center gap-1 transition-colors">
            Contact & Bio
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </span>

          {member.whatsapp ? (
            <a 
              href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-emerald-50 hover:bg-[#1a8a42] hover:text-white text-[#1a8a42] p-2 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm flex items-center justify-center border border-emerald-100 hover:rotate-6"
              title="Message on WhatsApp"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMember(member);
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-600 p-2 rounded-2xl transition-all duration-300 shadow-sm flex items-center justify-center border border-slate-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </motion.div>
    );
  };

  const currentDeptTitle = departmentsConfig.find(d => d.id === selectedDept)?.name || "GilaFruit Team";

  return (
    <div className="bg-[#fbfcfa] min-h-screen pt-24 sm:pt-28 md:pt-[148px] pb-24 text-slate-800 font-sans" id="team-screen-view">
      
      {/* 1. BREADCRUMBS BLOCK HEADER */}
      <div className="bg-[#f2f4f1] border-y border-slate-200/60 py-4 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-slate-500">
          <span className="font-bold uppercase tracking-wider text-[#01261d] font-sans">Our Family</span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <a href="#/" className="hover:text-emerald-800 transition-colors">Home</a>
            <span className="text-slate-400">/</span>
            <span className="font-medium text-slate-400">Our Team</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Narrative Intro Part: GilaFruit Young Team */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-200/50 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full filter blur-3xl -z-0" />
          
          <div className="lg:col-span-6 space-y-6 text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1a8a42]/10 text-[#1a8a42] rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Empowered by Youth
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#01261d] tracking-tight leading-none text-balance">
              GilaFruit: Where Youth Shapes the Future of Iranian Agriculture
            </h1>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>GilaFruit</strong>, relying on its young and passionate workforce, has become the first youth-led team in Iran to push the boundaries of agricultural exports. By combining cutting-edge knowledge, youthful innovation, and the experience of local growers, we successfully introduce high-grade Iranian produce to competitive global markets.
              </p>
              <p>
                At GilaFruit, we believe that young people are the vibrant future of sustainable farming. Our dynamic, technology-first team of experts meets the highest quality standards, sorting products precisely, and routing them safely across major Eurasian shipping channels.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
                <Users className="w-4 h-4 text-[#1a8a42]" />
                <span className="text-xs font-bold text-slate-700">70+ Active Staff & Partners</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
                <Globe className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-700">Multi-Language Sales Units</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 w-full relative z-10">
            <div className="grid grid-cols-3 gap-2 p-2 rounded-2xl bg-slate-100/80 border border-slate-205/60 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent rounded-2xl pointer-events-none z-10" />
              
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1542156822-6924d1a71aba?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl aspect-square shadow-sm group">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250" alt="Team member" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
              </div>

              {/* Action Video Button Overlay */}
              <button 
                onClick={() => setActiveVideoModal(true)}
                className="absolute inset-0 m-auto w-36 h-12 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-extrabold rounded-2xl shadow-xl flex items-center justify-center gap-2 border border-amber-400 z-20 cursor-pointer transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current text-white" />
                <span className="text-xs uppercase tracking-wider">Watch Video</span>
              </button>
            </div>
            <div className="text-center mt-3 text-slate-450 font-mono text-[10.5px]">
              See our dynamic sorting lines and export hubs in action
            </div>
          </div>
        </div>

        {/* 2. CEO SPOTLIGHT - GORGEOUS DARK EMERALD SECTION */}
        <div className="relative bg-gradient-to-br from-[#01251d] via-[#011b15] to-[#00100c] text-white rounded-[40px] shadow-2xl overflow-hidden border border-emerald-900/40 p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-990/40 rounded-full filter blur-3xl opacity-20 -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full filter blur-3xl opacity-30 -ml-24 -mb-24" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* CEO Image overlapping with frame decoration */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative">
                {/* Visual Accent Rings */}
                <div className="absolute -inset-4 rounded-[32px] border border-amber-500/20 animate-pulse" />
                <div className="absolute -inset-2 rounded-[30px] border border-emerald-500/20" />
                
                {/* Photo frame */}
                <div className="w-72 sm:w-80 h-96 rounded-[24px] overflow-hidden bg-emerald-950 border-4 border-amber-500 p-2 shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                    alt="CEO Maher Tahmasebi Choobar" 
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                  
                  {/* Flag Ribbon Overlay precisely like image reference */}
                  <div className="absolute top-4 left-4 bg-[#01261d]/90 border border-emerald-800 backdrop-blur-md px-3 py-1 rounded-xl flex items-center gap-1.5 shadow">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 font-bold uppercase">GilaFruit CEO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Text Message */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-510/10 text-amber-411 rounded-xl text-xs font-bold uppercase tracking-widest border border-amber-500/20">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Leader Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-none font-display">
                CEO: <span className="text-amber-400">Maher Tahmasebi Choobar</span>
              </h2>
              
              <div className="space-y-4 text-emerald-100/90 text-sm sm:text-base leading-relaxed text-left">
                <p>
                  Mr. Maher Tahmasebi, an energetic entrepreneur from Gilan, has been interested in exporting Iranian fruits and vegetables since his teenage years. After years of hard work and gaining experience, he founded GilaFruit with a group of dedicated young people.
                </p>
                <p>
                  GilaFruit has been successfully exporting high-quality Iranian produce to global markets with a customer-centric approach and the best packaging and quality control methods. Tahmasebi and his team have worked tirelessly to establish Iran's reputation in the international agricultural market.
                </p>
                <p>
                  The story of GilaFruit is one of perseverance and dedication to fulfill a long-held dream. Starting from a small orchard in Gilan, GilaFruit has grown into a global agricultural brand. With a focus on quality, innovation, and sustainability, GilaFruit is a leading exporter of Iranian fruits and vegetables.
                </p>
              </div>

              {/* Signature and CTA button block */}
              <div className="pt-6 border-t border-emerald-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="block text-[10px] text-emerald-400 font-mono uppercase tracking-widest leading-none mb-1">Founder Handwritten Trust</span>
                  <div className="font-serif italic text-2xl font-light text-amber-300 font-sans tracking-wide">
                    Maher Tahmasebi
                  </div>
                </div>

                <button 
                  onClick={() => setShowStoryModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 transition-all text-emerald-950 font-black rounded-2xl text-xs shadow-xl tracking-wider cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
                >
                  <span>The Story Behind Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 3. DYNAMIC TEAM DIRECTORY BLOCK */}
        <div className="space-y-8">
          
          <div className="text-left space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#01261d]-950">
              Interactive Team Directory
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Filter through our specialized divisions, management nodes, commercial managers, logistics staff, and local supplier farmers to access specific contact points directly.
            </p>
          </div>

          {/* Search bar & Category select */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-4 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                placeholder="Search by name, role, language, or crop..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2.5 pl-11 pr-4 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-emerald-800 focus:bg-white transition-all font-sans"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Compact Category helper info */}
            <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-2 text-xs">
              <span className="text-slate-400 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                Departments Filter:
              </span>
              <div className="flex flex-wrap gap-1">
                {departmentsConfig.map(d => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setSelectedDept(d.id as any);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                      selectedDept === d.id 
                        ? 'bg-[#1a8a42] text-white shadow' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-605 border border-slate-202'
                    }`}
                  >
                    {d.label} <span className="opacity-60 text-[10px] ml-0.5">({deptCounters[d.id as keyof typeof deptCounters]})</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Active Filtering Stats */}
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Showing {filteredTeam.length} / {teamMembers.length} team members</span>
            {searchTerm && <span>Search result for "{searchTerm}"</span>}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredTeam.length > 0 ? (
              selectedDept === 'all' && searchTerm === '' ? (
                <div className="space-y-20 mt-8">
                  {orderedSections.map((section) => {
                    const sectionMembers = teamMembers.filter(m => m.department === section.id);
                    if (sectionMembers.length === 0) return null;
                    return (
                      <div key={section.id} className="space-y-6 text-left border-b border-slate-100 pb-12 last:border-b-0">
                        {/* Section header matching the screenshot mock perfectly */}
                        <div className="border-b border-slate-200/50 pb-4 mb-8">
                          <span className="text-[28px] tracking-[4px] text-[#01261d]/15 font-black uppercase block leading-none font-sans">
                            {section.name}
                          </span>
                          <h2 className="text-xl sm:text-2xl font-black text-[#01261d] tracking-tight mt-1">
                            {section.subtitle}
                          </h2>
                          <p className="text-xs text-slate-400 mt-1 max-w-2xl font-medium font-sans">
                            {section.desc}
                          </p>
                        </div>

                        <motion.div 
                          layout
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                          {sectionMembers.map((member, index) => renderMemberCard(member, index))}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-6 mt-8 text-left">
                  {/* Visual Divider / Section Tag of selected department */}
                  <div className="text-center py-4 relative mb-4">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200 -z-10" />
                    <span className="bg-[#fbfcfa] px-6 text-xs uppercase tracking-widest font-black text-emerald-800 font-sans border border-slate-200 py-1.5 rounded-full inline-block">
                      {currentDeptTitle}
                    </span>
                  </div>

                  <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                  >
                    {filteredTeam.map((member, index) => renderMemberCard(member, index))}
                  </motion.div>
                </div>
              )
            ) : (
              <div className="bg-slate-100 rounded-3xl border border-dashed border-slate-300 py-16 text-center text-slate-500 max-w-xl mx-auto space-y-3 mt-8">
                <Users className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="text-base font-black text-slate-800">No matching members found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  We couldn't locate any person matching your keywords. Try searching for "kiwi", "sales", "customs", or clear search filtering.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDept('all');
                  }}
                  className="px-4 py-2 bg-slate-200 text-slate-800 rounded-xl text-xs font-bold hover:bg-slate-300 cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </AnimatePresence>

        </div>

        {/* Culture Guarantee Block */}
        <div className="bg-[#01261d] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/30 rounded-full filter blur-3xl -mr-16 -mt-16 -z-0" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Our Guarantee of Diligent Collaboration
              </h3>
              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-4xl">
                Every team member at Sabz Gostaran Gilan Fruit Co. operates under a strict code of mutual customer support and premium delivery schedules. By keeping open contact channels across Persian, English, Russian, and Turkish languages, we reduce customs friction and bridge communication boundaries across our dynamic trade routes from Iran to global EAEU hubs.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3 font-mono text-xs text-emerald-200">
              <div className="flex items-center gap-1.5 bg-emerald-950/60 px-4 py-2.5 rounded-2xl border border-emerald-800/40">
                <Globe className="w-5 h-5 text-amber-500" />
                <span>Multilingual Support</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-950/60 px-4 py-2.5 rounded-2xl border border-emerald-800/40">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span>Premium Quality Standards</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* WATCH VIDEO INTERACTIVE MODAL */}
      <AnimatePresence>
        {activeVideoModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#02211a] border border-emerald-850 text-white rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl relative"
            >
              <div className="p-4 bg-emerald-950/80 border-b border-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-xs uppercase tracking-widest font-black text-amber-400 font-sans">
                    GilaFruit Packhouse & Team Documentary
                  </span>
                </div>
                <button 
                  onClick={() => setActiveVideoModal(false)}
                  className="p-1 px-2 hover:bg-emerald-900 rounded-lg text-slate-300 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Fake Video Screen Presentation */}
              <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=1200" 
                  alt="Video playing background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none filter blur-xs"
                />
                
                {/* Audio Waves Simulation */}
                <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-0.5 h-16 opacity-30">
                  <div className="w-1 bg-emerald-500 h-8 animate-pulse" />
                  <div className="w-1 bg-emerald-500 h-14 animate-pulse delay-75" />
                  <div className="w-1 bg-emerald-500 h-6 animate-pulse delay-150" />
                  <div className="w-1 bg-[#1a8a42] h-16 animate-pulse delay-200" />
                  <div className="w-1 bg-[#1a8a42] h-10 animate-pulse delay-300" />
                  <div className="w-1 bg-amber-500 h-16 animate-pulse delay-75" />
                  <div className="w-1 bg-amber-500 h-14 animate-pulse delay-150" />
                  <div className="w-1 bg-emerald-555 h-8 animate-pulse" />
                </div>

                <div className="relative z-10 text-center space-y-4 max-w-md px-6">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-emerald-950 flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-white font-sans">
                    Sabz Gostaran Gilan Fruit Co.
                  </h3>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    This video presentation highlights our smart packing processes, our refrigerated containers, and kiwi quality grading system in Gilan, Astara city packhouse.
                  </p>
                  <div className="inline-flex items-center gap-1 text-[11px] bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-800 text-slate-300">
                    <MapPin className="w-3 h-3 text-[#1a8a42]" />
                    <span>Astara Main Highway Node, Iran</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-950/50 text-slate-400 text-center text-xs border-t border-emerald-900 flex justify-between items-center px-6">
                <span>Duration: 4m 12s</span>
                <span className="text-[#1a8a42] font-semibold text-[11px]">Streamed in High Contrast</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* THE STORY BEHIND US DIALOG MODAL */}
      <AnimatePresence>
        {showStoryModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-slate-800 rounded-3xl overflow-hidden w-full max-w-xl shadow-2xl relative text-left"
            >
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800 font-sans">
                  GilaFruit Founded Chronicles
                </span>
                <button 
                  onClick={() => setShowStoryModal(false)}
                  className="p-1 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors pointer-events-auto"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-[#01261d] tracking-tight">
                    Establishment & Growth Path
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">ESTABLISHED IN 2001 • GILAN PROVINCE</p>
                </div>

                <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-justify">
                  <p>
                    Over 25 years ago, in the mineral-rich, high-moisture agricultural belt of northern Iran (Gilan Province), <strong>Maher Tahmasebi</strong> laid the groundworks for what would evolve into Sabz Gostaran Gilan Fruit. Fascinated by the unparalleled quality of local kiwis and table vegetables, he envisioned of establishing a streamlined international route mapping Gilan's premium harvests safely onto Eurasian tables.
                  </p>
                  <p>
                    Today, backed by state-of-the-art grading equipment, custom packing houses, and strict compliance inspectors, our dynamic youth-led organization has successfully bridged gaps across CIS regions, Arabian Gulf markets, and European import terminals under the GilaFruit brand.
                  </p>
                </div>

                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-xs text-[#1a8a42] font-semibold leading-relaxed">
                  "At GilaFruit, our legacy is measured not just in tonnage exported, but in the sustainable enrichment of Gilan’s historical farming communities."
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
                <button 
                  onClick={() => setShowStoryModal(false)}
                  className="px-6 py-2 bg-[#01261d] hover:bg-[#021f18] text-white rounded-xl text-xs font-bold shadow cursor-pointer transition-colors"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CORPORATE MEMBER DETAIL DRAWER/MODAL POPOUT */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-white text-slate-800 rounded-3xl overflow-hidden w-full max-w-md shadow-2xl relative text-left"
            >
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#1a8a42] font-sans">
                  Official Communication Record
                </span>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="p-1 hover:bg-slate-200 rounded-lg text-slate-400 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                
                {/* Visual Header Block */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-205/60 relative flex-shrink-0">
                    {selectedMember.photo ? (
                      <img 
                        src={selectedMember.photo} 
                        alt={selectedMember.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#01261d] text-white flex items-center justify-center font-bold text-2xl font-sans">
                        {selectedMember.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-[#01261d] tracking-tight">
                      {selectedMember.name}
                    </h3>
                    <p className="text-[#1a8a42] text-xs font-black uppercase tracking-wider">
                      {selectedMember.role}
                    </p>
                    <span className="inline-block text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      div: {selectedMember.department}
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 border-t border-slate-100 pt-4">
                  
                  {selectedMember.subRole && (
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block">Core Mandates:</span>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans text-justify">
                        {selectedMember.subRole}
                      </p>
                    </div>
                  )}

                  {selectedMember.specialty && (
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block">Assigned Fruits / Crops:</span>
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs font-bold text-[#1a8a42] leading-relaxed">
                        🌿 {selectedMember.specialty}
                      </div>
                    </div>
                  )}

                  {selectedMember.languages && selectedMember.languages.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-wider text-slate-400 font-bold uppercase block">Spoken Languages:</span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {selectedMember.languages.map(lang => (
                          <span 
                            key={lang} 
                            className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-bold"
                          >
                            🗣️ {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Direct Action triggers */}
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  {selectedMember.whatsapp ? (
                    <a 
                      href={`https://wa.me/${selectedMember.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 w-full bg-[#1a8a42] hover:bg-[#157135] text-white font-extrabold rounded-2xl text-xs transition-colors cursor-pointer shadow-lg hover:shadow-emerald-900/10"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Start Instant WhatsApp Message</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ) : (
                    <a 
                      href="https://wa.me/989900978002"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 w-full bg-[#1a8a42] hover:bg-[#157135] text-white font-extrabold rounded-2xl text-xs transition-colors cursor-pointer shadow-lg hover:shadow-emerald-900/10"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Message GilaFruit Central Line</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}

                  {selectedMember.email ? (
                    <a 
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center justify-center gap-2 py-2.5 w-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-205 font-bold rounded-2xl text-xs transition-colors"
                    >
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span className="font-mono text-slate-650">{selectedMember.email}</span>
                    </a>
                  ) : (
                    <a 
                      href="mailto:info@gilafruit.com"
                      className="flex items-center justify-center gap-2 py-2.5 w-full bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-205 font-bold rounded-2xl text-xs transition-colors"
                    >
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span className="font-mono text-slate-650">info@gilafruit.com</span>
                    </a>
                  )}

                </div>

              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Close profile
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

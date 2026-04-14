export interface Service {
  id: number
  number: string
  name: string
  desc: string
  tag: string
  icon: string
  price: string
  tech: string[]
}

export interface ProcessStep {
  number: string
  title: string
  desc: string
  icon: string
}

export interface Project {
  id: string
  title: string
  client?: string          // opsional — kosong = personal project
  isPersonal?: boolean     // flag eksplisit personal/side project
  category: 'Web' | 'Mobile' | 'AI' | 'IoT' | 'Enterprise' | 'Landing'
  desc: string
  tech: string[]
  year: string
  featured?: boolean
  color: string
}

export interface TrackerProject {
  id: string
  name: string
  client: string
  startDate: string
  estimatedEnd: string
  progress: number
  steps: TrackerStep[]
}

export interface TrackerStep {
  title: string
  status: 'done' | 'active' | 'pending'
  date?: string
}

export interface BriefFormData {
  // Step 1
  nama: string
  whatsapp: string
  email: string
  perusahaan?: string
  // Step 2
  jenis: string
  paket: 'Standard' | 'Pro' | 'Enterprise'
  budget: string
  deadline: string
  // Step 3
  cerita: string
  masalah: string
  fitur: string
  // Step 4
  tone: string
  warna: string
  referensi?: string
  // Step 5
  hak_kepemilikan: 'A' | 'B'
  setuju: boolean
}

import { create } from 'zustand'

type IProfileData = {
  name: string,
  age: string,
  gender: string
}

interface RegistrationStore {
  currentStep: number
  profileData: IProfileData
  steps: string[]
  setProfileData: (field: string, value: string) => void
  nextStep: () => void
  prevStep: () => void
}

export const useRegistration = create<RegistrationStore>((set) => ({
  currentStep: 0,
  profileData: {
    name: '',
    age: '',
    gender: ''
  },
  steps: ['Welcome', 'Name', 'Age', 'Gender'],

  setProfileData: (field, value) => (
    set((state) => ({
      profileData: { ...state.profileData, [field]: value }
    }))
  ),

  nextStep: () => (
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.steps.length - 1)
    }))
  ),

  prevStep: () => (
    set((set) => ({
      currentStep: Math.max(set.currentStep - 1, 0)
    }))
  )
}))
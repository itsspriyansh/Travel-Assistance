import {create} from 'zustand';

const useCityStore = create((set) => ({
    city_name : "",
    addCity: (city) => set((state) => ({ city_name: city })),

  }))

export default useCityStore;
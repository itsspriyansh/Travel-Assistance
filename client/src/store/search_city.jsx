import {create} from 'zustand';

const useCityStore = create((set) => ({
    isLoading : 0,
    city_name : "",
    temp: "",
    latitude: "",
    longitude: "",
    addCity: (city) => set((state) => ({ city_name: city })),
    addTemp :(temp)=> set((state) => ({ temp: temp })),
    addLatitude :(latitude)=> set((state) => ({ latitude: latitude })),
    addLongitude :(longitude)=> set((state) => ({ longitude: longitude })),
    changeIsLoading : ()=> set(state => ({isLoading : state.isLoading + 1})),
    resetIsLoading : ()=>set(state => ({isLoading : 0}))

  }))

export default useCityStore;


import {create} from 'zustand';

const useCityStore = create((set) => ({
    isLoading : 0,
    city_name : "",
    temp: "",
    latitude: "",
    longitude: "",
    restaurants : [],
    description : "",
    addRestaurant : (restaurant) => set(state => [...state.restaurants, restaurant]),
    addCity: (city) => set((state) => ({ city_name: city })),
    addTemp :(temp)=> set((state) => ({ temp: temp })),
    addLatitude :(latitude)=> set((state) => ({ latitude: latitude })),
    addLongitude :(longitude)=> set((state) => ({ longitude: longitude })),
    setDescription : (description)=>set(state => ({description : description})),
    changeIsLoading : ()=> set(state => ({isLoading : state.isLoading + 1})),
    resetIsLoading : ()=>set(state => ({isLoading : 0})),
  }))

export default useCityStore;


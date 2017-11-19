import Api from '@/services/Api'

export default {
    getAllAdvertisements(){
        return Api().get('advertisements')
    },
    createAdvertisement(advertisement){
        
        return Api().post('advertisements',advertisement)
    }
}
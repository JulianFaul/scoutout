import Api from '@/services/Api'

export default {
    getAllAdvertisements(){
        return Api().get('advertisements')
    },
    createAdvertisement(advertisement){
        return Api().post('advertisements',advertisement)
    },
    show(advertisementId){
        return Api().get(`advertisements/${advertisementId}`)
    },
    put(advertisement){
        return Api().put(`advertisements/${advertisement.id}`,advertisement)
    }
}
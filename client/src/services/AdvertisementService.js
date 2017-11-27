import Api from '@/services/Api'

export default {
    getAllAdvertisements(search){
        return Api().get('advertisements',{
            params:{
                search:search
            }
        })
    },
    createAdvertisement(advertisement){
        return Api().post('advertisements',advertisement)
    },
    show(advertisementId){
        return Api().get(`advertisements/${advertisementId}`)
    },
    put(advertisement){
        return Api().put(`advertisements/${advertisement.id}`,advertisement)
    },
    delete(advertisementId) {
        return Api().delete(`advertisements/${advertisementId}`)
    }
}
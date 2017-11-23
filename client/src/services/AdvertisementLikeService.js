import Api from '@/services/Api'

export default {
    getAllAdvertisementLikes(params) {
        return Api().get('advertisementlikes', {
            params: params
        })
    },
    post(advertisementLike) {
        return Api().post('advertisementlikes', advertisementLike)
    },
    delete(advertisementLikeId) {
        return Api().delete(`advertisementlikes/${advertisementLikeId}`)
    }
}
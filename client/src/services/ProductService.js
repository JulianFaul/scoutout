import Api from '@/services/Api'

export default {
    getAllProducts(params){
        return Api().get('product', {
            params: params
        })
    },
    createProduct(product){
        return Api().post('product',product)
    }
}
import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
    // eslint-disable-next-line import/no-named-as-default-member
    return new Vuex.Store({
        state: {
            Duans: [],
            Duan: {},
            SanPham: [],
            Blog: [],
            Blo: {},
            Blogg: [],
            Anh: {}

        },
        mutations: {
            GET_DUANS(state, Duans) {
                state.Duans = Duans
            },
            GET_DUAN(state, Duan) {
                state.Duan = Duan
            },
            GET_SP(state, SanPham) {
                state.SanPham = SanPham
            },
            GET_GIDAY(state, Anh) {
                state.Anh = Anh
            }
            ,
            GET_BLOG(state, Blog) {
                state.Blog = Blog
            },
            GET_BLOGG(state, Blogg) {
                state.Blogg = Blogg
            },
            GET_BYIDBLOG(state, Blo) {
                state.Blo = Blo
            },

        },
        getters: {
            Duans(state) {
                return state.Duans
            },
            Duan(state) {
                return state.Duan
            },
            SanPham(state) {
                return state.SanPham
            },
            Anh(state) {
                return state.Anh
            },
            Blog(state) {
                return state.Blog
            },
            Blogg(state) {
                return state.Blogg
            },
            Blo(state) {
                return state.Blo
            },

        },
        actions: {
            async getDuans({ commit }) {
                try {
                    const response = await axios.get(process.env.baseApiUrl + `DuAn`)
                    commit("GET_DUANS", response.data)
                    // eslint-disable-next-line no-console
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async getbyidDuan({ commit }, id) {
                try {
                    const response = await axios.get(process.env.baseApiUrl + `DuAn/id?id=${id}`)
                    commit("GET_DUAN", response.data)
                } catch (error) {
                    // eslint-disable-next-line no-console
                    console.log(error);
                }
            },
            async getSanPham({ commit }) {
                try {
                    const response = await axios.get(process.env.baseApiUrl + `SanPham`)
                    commit("GET_SP", response.data)
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async getSPById({ commit }, id) {
                try {
                    const response = await axios.get(process.env.baseApiUrl + `SanPham/detail/id?id=${id}`)
                    commit("GET_GIDAY", response.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async getBlog({ commit }, params) {
                try {
                    const response = await axios.post(process.env.baseApiUrl + `Blog/getall`, params)
                    commit("GET_BLOG", response.data)

                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async getBlogSide({ commit }, params) {
                try {
                    const response = await axios.post(process.env.baseApiUrl + `Blog/getall`, params)
                    commit("GET_BLOGG", response.data)

                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async getByIdBlog({ commit }, id) {
                try {
                    const response = await axios.get(process.env.baseApiUrl + `Blog/get/id?id=${id}`)
                    commit("GET_BYIDBLOG", response.data)
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            }
        }
    })
}
export default createStore 
import { get, post } from './axios'

export const get_ip = () => get('https://api.ipify.org?format=json')
// /article/index 首頁，所有工程進度列表
export const get_article = ({ limit = 8, page = 1 }) => get('/article/index', { limit, page, })

// /article/categories 所屬建案的工程進度列表
export const get_article_categories = ({ limit = 99, page = 1, category_id = 0 }) => get('/article/categories', { limit, page, category_id })

// /article/detail 工程進度詳情
export const get_article_detail = ({ id }) => get('/article/detail', { id })

// /category/index 所有建案列表
export const get_category = () => get('/category/index', {})

// /category/get_all_with_user 會員所屬建案列表
export const get_category_by_user = () => get('/category/get_all_with_user', {})

// /exclusive/index 檔案下載首頁
export const get_files = ({ category_id }) => get('/exclusive/index', { category_id })

// 登入
export const user_login = ({
  email = '', password = ''
}) => post('/user/signin', {
  email, password
})

// /user 會員資訊
export const get_user_info = () => get('/user', {})


import { ApiRequestSet } from "@/libs/request";
import { ref } from "vue"
// 接口数据的缓存时间。
const cacheTime = 60 * 1000 * 60
export type useRequestPageListOptsType = {
	isEmpty ?: boolean,
	isError ?: boolean,
	isLoading ?: boolean,
	isMore ?: boolean,
	keyword ?: string | null,
	pageSize ?: number,
	pageNum ?: number,
	sort ?: string | null,
	order ?: string | null,
}

export const useRequestPageList = (config ?: useRequestPageListOptsType) => {
	const isEmpty = ref(config?.isEmpty ?? false)
	const isLoading = ref(config?.isLoading ?? false)
	const isError = ref(config?.isError ?? false)
	const isMore = ref(config?.isMore ?? true)
	const keyword = ref(config?.keyword ?? "")
	const pageSize = ref(config?.pageSize ?? 20)
	const pageNum = ref(config?.pageNum ?? 1)
	const sort = ref(config?.sort ?? 'id')
	const order = ref(config?.order ?? 'desc')

	const list = ref(<Array<Record<string, any>>>[]);

	const reset = (isclearKeyword ?: boolean) => {
		isEmpty.value = false
		isError.value = false
		isLoading.value = false
		isMore.value = true
		keyword.value = isclearKeyword == true ? "" : keyword.value
		pageSize.value = config?.pageSize ?? 12
		pageNum.value = 1
		sort.value = "id"
		order.value = "desc"
		list.value = []
	}

	const getListData = async (url : string, customData ?: Record<string, any>) => {
		if (!isMore.value || isLoading.value) {
			uni.stopPullDownRefresh()
			return null;
		}

		const req = ApiRequestSet({ showLoading: true, showSuccess: false, showError: true })
		try {
			isLoading.value = true;
			isError.value = false;
			isEmpty.value = false;
			isMore.value = true;
			const result = await req.post(url, {
				page: pageNum.value || 1,
				page_size: pageSize.value || 12,
				sort: sort.value || "id",
				order: order.value || "desc",
				keyword: keyword.value || "",
				...(customData ?? {}),
			})

			const dlist = result.data?.data.list ?? [];
			if (dlist.length == 0 || dlist.length < pageSize.value) {
				isMore.value = false;
			}
			isLoading.value = false;
			pageNum.value += 1;
			list.value.push(...dlist)

			if (list.value.length == 0) {
				isEmpty.value = true;
			}
		} catch (e) {
			isLoading.value = false;
			isError.value = true;
		}
	}


	return {
		isLoading,
		isEmpty,
		isError,
		isMore,
		keyword,
		pageSize,
		pageNum,
		sort,
		order,
		reset,
		getListData,
		list
	}
}


/**
 * API 接口集合
 * @namespace api
 */
export const api = {
	async getTestApi() {
		const res = await ApiRequestSet({ showLoading: false }).post<ResponseData<any>>(`/test/api`);
		return res.data.data;
	},
	getPageListRouter() {
		return "/api/list";
	},

}

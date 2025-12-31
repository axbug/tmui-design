// 存储防抖函数的键值映射
const debounceKeys = new Map<string, { timer: number | null; lastArgs: any }>()

/**
 * 防抖函数
 * @param key 唯一标识符，用于区分不同的防抖函数
 * @param func 需要防抖的函数
 * @param delay 延迟执行的时间（毫秒）
 * @param immediate 是否立即执行
 */
export function debounce(
	key: string,
	func: (...args: any[]) => void | Promise<void>,
	delay: number = 300,
	immediate: boolean = false
): void {
	// 获取或创建该key对应的记录
	const record = debounceKeys.get(key) || { timer: null, lastArgs: null }

	// 清除之前的定时器
	if (record.timer !== null) {
		clearTimeout(record.timer)
	}

	// 如果需要立即执行
	if (immediate) {
		// 如果没有定时器，立即执行
		if (record.timer === null) {
			func()
		}
		// 设置新的定时器
		record.timer = setTimeout(() => {
			record.timer = null
		}, delay)
	} else {
		// 设置新的定时器
		record.timer = setTimeout(() => {
			func()
			record.timer = null
		}, delay)
	}

	// 更新映射
	debounceKeys.set(key, record)
}

// 存储节流函数的键值映射
const throttleKeys = new Map<string, { timer: number | null; lastExecTime: number }>()

/**
 * 节流函数
 * @param key 唯一标识符，用于区分不同的节流函数
 * @param func 需要节流的函数
 * @param delay 执行间隔时间（毫秒）
 */
export function throttle(
	key: string,
	func: (...args: any[]) => void | Promise<void>,
	delay: number = 300
): void {
	const now = Date.now()
	// 获取或创建该key对应的记录
	const record = throttleKeys.get(key) || { timer: null, lastExecTime: 0 }

	// 如果距离上次执行时间不足delay，则不执行
	if (now - record.lastExecTime < delay) {
		return
	}

	// 清除之前的定时器
	if (record.timer !== null) {
		clearTimeout(record.timer)
	}

	// 执行函数
	func()
	record.lastExecTime = now

	// 更新映射
	throttleKeys.set(key, record)
}


export function findParentView<T>(parent: any,name:string): T|null {
	if (parent == null) return null;
	if (parent.$parent?.$options?.name == name) return parent.$parent as T;
	let parents = findParentView(parent.$parent,name);
	// @ts-ignore
	if (parents?.$options?.name == name) return parents as T;
	return null;
}

<template>
  <list
    :style="{ width: `${defaultProps.width}rpx`, height: `${defaultProps.height}rpx` }"
  >
    <header
      v-if="_showHeader"
      class="tableBox flex flex-row"
      :style="{
        width: `${defaultProps.width}rpx`,
        height: `${defaultProps.headerHeight}rpx`,
      }"
    >
      <view v-if="_fixed.length > 0 && defaultProps.showFixed">
        <tm-sheet
          :border="_showBottomBorder ? 1 : 0"
          border-direction="bottom"
          :color="_fixed[0].bgColor"
          :text="_fixed[0].light"
          :_class="'flex flex-col ' + _fixed[0].align"
          :height="defaultProps.headerHeight - 6"
          :width="_fixed[0].width - 10"
          :margin="[0, 0]"
          :padding="[10, 6]"
          @click="headerClick(_fixed[0].key, _fixed[0].sort)"
        >
          <view
            :userInteractionEnabled="false"
            :style="{
              width: _fixed[0].width - 10 + 'rpx',
              height: defaultProps.headerHeight - 6 + 'rpx',
            }"
            class="flex flex-row-center-center flex-row"
            :class="[_fixed[0].align]"
          >
            <view>
              <tm-text
                :font-size="26"
                _class="text-weight-b text-align-center"
                :label="_fixed[0].title"
              >
              </tm-text>
            </view>
            <view v-if="_fixed[0].sort" class="flex flex-col flex-col-center-center">
              <tm-icon
                :lineHeight="11"
                :_class="
                  _fixed[0].sortType == 'asce' || _fixed[0].sortType == 'none'
                    ? ''
                    : 'opacity-6'
                "
                :font-size="20"
                name="tmicon-sort-up"
              ></tm-icon>
              <tm-icon
                :lineHeight="11"
                :_class="
                  _fixed[0].sortType == 'desc' || _fixed[0].sortType == 'none'
                    ? ''
                    : 'opacity-6'
                "
                :font-size="20"
                name="tmicon-sort-down"
              ></tm-icon>
            </view>
          </view>
        </tm-sheet>
      </view>

      <scroller
        ref="scrolleHead"
        :scrollable="false"
        class="tableRight flex flex-row flex-1"
        scroll-direction="horizontal"
      >
        <view class="flex flex-row">
          <view v-for="(item, index) in _col" :key="index">
            <tm-sheet
              v-if="item.key != _fixedKey"
              :border="_showBottomBorder ? 1 : 0"
              border-direction="bottom"
              :color="item.bgColor"
              :text="item.light"
              :_class="'flex flex-col ' + item.align"
              :height="defaultProps.headerHeight - 6"
              :width="item.width - 10"
              :margin="[0, 0]"
              :padding="[10, 6]"
              @click="headerClick(item.key, item.sort)"
            >
              <view
                :userInteractionEnabled="false"
                :style="{
                  width: item.width - 10 + 'rpx',
                  height: defaultProps.headerHeight - 6 + 'rpx',
                }"
                class="flex flex-row-center-center flex-row"
                :class="[item.align]"
              >
                <view>
                  <tm-text
                    :font-size="26"
                    _class="text-weight-b text-align-center"
                    :label="item.title"
                  >
                  </tm-text>
                </view>
                <view v-if="item.sort" class="flex flex-col flex-col-center-center">
                  <tm-icon
                    :lineHeight="11"
                    :_class="
                      item.sortType == 'asce' || item.sortType == 'none'
                        ? ''
                        : 'opacity-6'
                    "
                    :font-size="20"
                    name="tmicon-sort-up"
                  ></tm-icon>
                  <tm-icon
                    :lineHeight="11"
                    :_class="
                      item.sortType == 'desc' || item.sortType == 'none'
                        ? ''
                        : 'opacity-6'
                    "
                    :font-size="20"
                    name="tmicon-sort-down"
                  ></tm-icon>
                </view>
              </view>
            </tm-sheet>
          </view>
        </view>
      </scroller>
    </header>
    <cell class="tableBox flex flex-row" :style="{ width: `${defaultProps.width}rpx` }">
      <view v-if="_fixed.length > 1 && defaultProps.showFixed">
        <view v-for="(item, index) in _fixed" :key="index">
          <tm-sheet
            :border="_showBottomBorder ? 1 : 0"
            border-direction="bottom"
            v-if="index != 0"
            :color="item.bgColor"
            :text="item.light"
            :_class="'flex flex-col ' + item.align"
            :height="defaultProps.cellHeight - 6"
            :width="item.width - 10"
            :margin="[0, 0]"
            :padding="[10, 6]"
            @click="headerClick(item.key, item.sort)"
          >
            <view
              :userInteractionEnabled="false"
              :style="{
                width: item.width - 10 + 'rpx',
                height: defaultProps.cellHeight - 6 + 'rpx',
              }"
              class="flex flex-row-center-center flex-row"
              :class="[item.align]"
            >
              <view>
                <tm-text
                  :font-size="26"
                  _class="text-weight-b text-align-center"
                  :label="item.title"
                >
                </tm-text>
              </view>
            </view>
          </tm-sheet>
        </view>
      </view>
      <scroller
        ref="scrollerRight"
        class="tableRight flex-1 flex-row flex"
        scroll-direction="horizontal"
      >
        <view>
          <view v-for="(item2, index2) in _tabel" :key="index2" class="flex-row flex">
            <block v-for="(item, index) in item2.data" :key="index">
              <tm-sheet
                :border="_showBottomBorder ? 1 : 0"
                v-if="item.key != _fixedKey"
                border-direction="bottom"
                :margin="[0, 0]"
                :color="item.color"
                :text="item.light"
                :_class="'flex ' + item2.align"
                :height="defaultProps.cellHeight - 6"
                :width="item.width - 10"
                :padding="[10, 6]"
              >
                <tm-text
                  v-if="item.type == 'text'"
                  :font-size="24"
                  :label="item.text"
                ></tm-text>
                <tm-button
                  @click="rowClick(index2, index)"
                  :margin="[0, 0]"
                  size="small"
                  :color="_col[index]?.bgColor"
                  :width="item.width - 16"
                  v-if="item.type == 'button'"
                  :font-size="24"
                  :label="item.text"
                ></tm-button>
              </tm-sheet>
            </block>
          </view>
        </view>
      </scroller>
    </cell>
  </list>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  Ref,
  getCurrentInstance,
  onMounted,
  nextTick,
  onBeforeUnmount,
  PropType,
  watch,
} from "vue";
import type { headresItem, cellItem, dataTypeArray, FixedItemType } from "../interface";
import tmIcon from "../tm-icon/tm-icon.vue";
import tmText from "../tm-text/tm-text.vue";
import tmSheet from "../tm-sheet/tm-sheet.vue";
import tmButton from "../tm-button/tm-button.vue";
// #ifdef APP-PLUS-NVUE
var dom = weex.requireModule("dom");
const Binding = uni.requireNativePlugin("bindingx");
const animation = uni.requireNativePlugin("animation");
// #endif
const proxy = getCurrentInstance()?.proxy ?? null;
const props = defineProps({
  width: {
    type: Number,
    default: 750,
  },
  height: {
    type: Number,
    default: 750,
  },
  fixedWidth: {
    type: Number,
    default: 200,
  },
  headerHeight: {
    type: Number,
    default: 90,
  },
  cellWidth: {
    type: Number,
    default: 200,
  },

  showHeader: {
    type: Boolean,
    default: true,
  },
  header: {
    type: Array as PropType<Array<headresItem>>,
    default: () => [],
  },
  tableData: {
    type: Array as PropType<Array<cellItem>>,
    default: () => [],
    required: true,
  },
  //单元格的高度。
  cellHeight: {
    type: Number,
    default: 72,
  },
  showBottomBorder: {
    type: Boolean,
    default: true,
  },
  showFixed: {
    type: Boolean,
    default: false,
  },
});
let bindingx_token = null;
const defaultProps = computed(() => {
  return {
    width: props.width,
    height: props.height,
    cellHeight: props.cellHeight,
    headerHeight: props.headerHeight,
    fixedWidth: props.fixedWidth,
    showFixed: props.showFixed,
  };
});
const _col: Ref<Array<headresItem>> = ref([]);
const _tabel: Ref<Array<cellItem>> = ref([]);
const _fixed: Ref<Array<FixedItemType>> = ref([]);
const _fixedKey = ref("");
const _showBottomBorder = computed(() => props.showBottomBorder);
const _showHeader = computed(() => props.showHeader);
watch(
  [() => props.tableData, () => props.header],
  () => {
    setColData();
  },
  { deep: true }
);

function setColData() {
  _col.value = [];
  _tabel.value = [];
  _fixed.value = [];
  let defaultSort = "none";
  props.header.forEach((el, index) => {
    //这里的目的是，当有一列数据默认有排序，那么它后面全部默认都不能排序了，只能优先排序第一个数据。后期需要界面点击切换。
    let defaultSort = el?.sortType ?? "none";
    if (defaultSort != "none") {
      defaultSort = "none";
    }
    let isFixed = el?.fixed ?? false;
    _col.value.push({
      title: el?.title ?? "",
      width: el?.width ?? 145,
      align: "flex-row-center-" + (el?.align || "center"),
      sort: el?.sort ?? false,
      bgColor: el?.bgColor ?? "white",
      cellColor: el?.cellColor ?? "white",
      light: el?.light ?? false,
      key: el?.key ?? String(index),
      fixed: isFixed,
      sortType: defaultSort,
    });
  });

  props.tableData.forEach((el, index) => {
    let d = el?.data ?? {};
    let keys = Object.keys(d);
    for (let ik = 0, len = keys.length; ik < len; ik++) {
      if (typeof _col.value[ik] == "undefined") {
        _col.value.push({
          title: String(ik),
          width: el?.width ?? 145,
          align: "flex-col-center-" + (el?.align || "center"),
          sort: false,
          bgColor: "white",
          cellColor: "white",
          light: false,
          key: String(ik),
          fixed: false,
          sortType: "none",
        });
      }
    }
    let dataRuslt: Array<dataTypeArray> = [];
    _col.value.forEach((el2, index) => {
      let color = "white";
      let light = false;
      if (typeof d[el2.key] !== "object") {
        color = el?.color || _col.value[index]?.cellColor || color;
        light = el?.light || _col.value[index]?.light || light;
      } else {
        color = d[el2.key]?.color || el?.color || _col.value[index]?.color || color;
        light = d[el2.key]?.light || el?.light || _col.value[index]?.light || light;
      }
      let cel: dataTypeArray = {
        key: el2.key,
        text: typeof d[el2.key] !== "object" ? d[el2.key] : d[el2.key]?.text ?? "",
        type: typeof d[el2.key] !== "object" ? "text" : d[el2.key]?.type ?? "text",
        width: _col.value[index]?.width ?? 145,
        light: light,
        color: color,
        fixed: typeof d[el2.key] !== "object" ? false : d[el2.key]?.fixed ?? false,
      };
      if (typeof d[el.key] === "object") {
        cel = { ...cel, ...d[el.key] };
      }

      dataRuslt.push(cel);
    });
    _tabel.value.push({
      data: dataRuslt,
      align: el?.align ?? _col.value[index]?.align ?? "flex-row-center-center",
      key: el?.key ?? String(index),
    });
  });

  // 检查是否固定在左侧的内容。头和数据。
  let headerIndex = 0;
  let headerIndexFixed = _col.value.find((el, index) => {
    headerIndex = index;
    return el.fixed == true;
  });
  if (typeof headerIndexFixed !== "undefined") {
    let headerkey = headerIndexFixed.key;
    _fixedKey.value = headerkey;
    _fixed.value.push({ ...headerIndexFixed });
    let cellIndex = 0;
    _tabel.value.forEach((el, index2) => {
      el.data.forEach((cel, index) => {
        if (cel.key == headerkey) {
          _fixed.value.push({
            title: cel.text,
            key: cel?.key ?? String(index2 + 1),
            width: cel.width,
            align: headerIndexFixed?.align ?? "flex-row-center-center",
            sort: false, //是否显示排序,默认false
            bgColor: cel.color ?? "", //当前头的背景色。默认grey
            cellColor: cel.color ?? "", //当前列的背景色。,如果为"",则使用行数据的背景，如果行背景也没有提供，使用white.
            light: cel.light ?? false, //背景色是否是浅色
            sortType: "", //desc降序，升序asce,none,无排序
            fixed: true, //是否固定在左侧端
          });
        }
      });
    });
  }
}

onMounted(() => {
  setTimeout(function () {
    setColData();
    bindingXscroll();
  }, 100);
});
onBeforeUnmount(() => unbindXscroll());
function headerClick(key: string, isSort = false) {
  if (!isSort) return;
  let valueArray = _col.value.filter((el) => el.key == key);
  let keyDesc = valueArray[0].sortType;
  if (!keyDesc || keyDesc == "none") {
    sort(key, "desc");
    return;
  }
  if (keyDesc == "none") {
    sort(key, "desc");
    return;
  }
  if (keyDesc == "desc") {
    sort(key, "asce");
    return;
  }
  if (keyDesc == "asce") {
    sort(key, "none");
    return;
  }
}
//descKey需要排序的字段。
function sort(descKey = "", type = "none") {
  uni.showLoading({
    title: "...",
    mask: true,
  });
  // 排序
  if (type == "none" || descKey === "") {
    setColData();
    uni.hideLoading();
    return;
  }
  let lsTemp = _tabel.value.map((item, index) => {
    let valueArray = item.data.filter((el) => el.key == descKey);
    return {
      oldIndex: index,
      value: valueArray[0].text,
    };
  });

  //降序
  if (type == "desc") {
    lsTemp.sort((a, b) => a.value - b.value);
  }
  //升序。
  if (type == "asce") {
    lsTemp.sort((a, b) => b.value - a.value);
  }
  const backTable = toRaw(_tabel.value);

  nextTick(() => {
    _col.value = _col.value.map((el) => {
      return { ...el, sortType: el.key == descKey ? type : el.sortType };
    });
    _tabel.value = lsTemp.map((el) => {
      return backTable[el.oldIndex];
    });
    uni.hideLoading();
  });
}

function rowClick(rowIndex: number, colIndex: number) {
  emits("rowClick", rowIndex, colIndex);
}
function bindingXscroll() {
  let scroller_right = proxy.$refs.scrollerRight;
  let scroller_right_head = proxy.$refs.scrolleHead;
  nextTick(() => {
    scroller_right = scroller_right.ref;
    scroller_right_head = scroller_right_head.ref;
    Binding.bind(
      {
        eventType: "scroll",
        anchor: scroller_right,
        props: [
          {
            element: scroller_right_head,
            property: "scroll.contentOffsetX",
            expression: "x+0",
          },
        ],
      },
      (e) => {
        bindingx_token = e.token;
      }
    );
  });
}
function unbindXscroll() {
  if (bindingx_token) {
    Binding.unbind({
      token: bindingx_token,
      eventType: "scroll",
    });
  }
}
function getEl(el: HTMLElement) {
  if (typeof el === "string" || typeof el === "number") return el;
  if (WXEnvironment) {
    return el.ref;
  } else {
    return el instanceof HTMLElement ? el : el.$el;
  }
}
</script>

<style></style>

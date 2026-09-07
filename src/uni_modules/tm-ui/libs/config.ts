import { defineStore } from 'pinia';


export const useTmConfig = defineStore('tmConfig', {
    state: () => {
        return {
            config: {
                mode: 'light',
                unit: 'rpx',
                fontSizeBase: '28',
                fontSizeScale: 1,
                buttonRadius: 24,
                color: "primary",
                theme:new Map<string,string>(),
                sheetRadius: 24,
                sheetMargin: [20, 0, 20, 20],
                sheetPadding: [24],
                sheetShadow: 'none',

                cellRadius: 24,

                sheetDarkColor: '#141414',
                sheetDarkBorderColor: ["#232323"],

                /** 输入框暗黑背景 */
                inputDarkColor: '#272727',
                inputLightColor: '#f5f5f5',
                inputRadius: 24,
                borderDarkColor: '#1c1c1c',
                unRadioAndCheckBoxColor: "#cfcfcf",

                switchRadius:64,

                modalRadius: 32,
                drawerRadius:32,
                animation: 'cubic-bezier(.42,.38,.15,.93)',

				backgroundColorContentDark:"#000000",
                previewImage:false,
                modalActionsHalfRound:false,
                buttonShadow:[0,2,4] as Array<number|string>,
                tagShadow:[0,2,3] as Array<number|string>

            } as Omit<TM.THEME_CONFIG,'i18n'>
        }
    },

    actions: {

    },
});
export const setConfig = (options?: Partial<Omit<TM.THEME_CONFIG, 'i18n'>>) =>{
    const configUse = useTmConfig();
    const config = configUse.config;
    type configKeyType = keyof typeof  config
    const realKeys = Object.keys(config)
    if(!options) return;
    for(const key in options){
        const tkey = key as configKeyType;
        const val = options[tkey];
        if(val !=undefined && val != null && val && realKeys.includes(key)){

           if(tkey == 'theme'){
            const realval = val as Map<string,string>;
            realval.keys().forEach((temkeyls)=>{
                config.theme.set(temkeyls,realval.get(temkeyls)!)
            })
           }else{
            // @ts-ignore
            config[tkey] = val
           }
        }
    }
}

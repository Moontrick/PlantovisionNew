(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "root": "ResultEditView-module-scss-module__k5JkkG__root",
  "root_buttonGroup": "ResultEditView-module-scss-module__k5JkkG__root_buttonGroup",
  "root_grid": "ResultEditView-module-scss-module__k5JkkG__root_grid",
  "root_gridItem": "ResultEditView-module-scss-module__k5JkkG__root_gridItem",
  "root_gridItem_button": "ResultEditView-module-scss-module__k5JkkG__root_gridItem_button",
  "root_gridItem_item": "ResultEditView-module-scss-module__k5JkkG__root_gridItem_item",
  "root_grid_title": "ResultEditView-module-scss-module__k5JkkG__root_grid_title",
  "root_header": "ResultEditView-module-scss-module__k5JkkG__root_header",
  "root_image": "ResultEditView-module-scss-module__k5JkkG__root_image",
  "root_image_img": "ResultEditView-module-scss-module__k5JkkG__root_image_img",
  "root_title": "ResultEditView-module-scss-module__k5JkkG__root_title",
});
}}),
"[project]/shared/store/searchStore/models/searchState.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchStateStore": (()=>searchStateStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __decorate as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-client] (ecmascript)");
;
;
;
;
class SearchState {
    loadings = {
        resultLoading: false
    };
    resultData = null;
    userData = null;
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeAutoObservable"])(this);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"]
], SearchState.prototype, "resultData", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_decorate__as__$5f3e$__["_"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observable"]
], SearchState.prototype, "userData", void 0);
const searchStateStore = new SearchState();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/store/searchStore/models/searchSync.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchSyncStore": (()=>searchSyncStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/searchStore/models/searchState.ts [app-client] (ecmascript)");
;
class SearchSync {
    state;
    constructor(storeState){
        this.state = storeState;
    }
    //Гетеры
    //______________________________________________________________________________________________
    getLoadings() {
        return this.state.loadings;
    }
    getResultData() {
        return this.state.resultData;
    }
    getUserData() {
        return this.state.userData;
    }
    //______________________________________________________________________________________________
    //Сетеры
    //______________________________________________________________________________________________
    setLoadings(value, key) {
        this.state.loadings = {
            ...this.state.loadings,
            [key]: value
        };
    }
    setResultData(value) {
        this.state.resultData = {
            ...value
        };
    }
    setUserData(value) {
        this.state.userData = {
            ...value
        };
    }
}
const searchSyncStore = new SearchSync(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchStateStore"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/store/searchStore/models/searchAsync.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchAsyncStore": (()=>searchAsyncStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/searchStore/models/searchState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/searchStore/models/searchSync.ts [app-client] (ecmascript)");
;
;
class SearchAsync {
    state;
    sync;
    constructor(storeState, syncStore){
        this.state = storeState;
        this.sync = syncStore;
    }
    async fetchGetResultById(id) {
        try {
            this.state.loadings.resultLoading = true;
            //   const response = await authService.post<Annotation>(
            //     ROUTES.GetAnnotation,
            //     {
            //       company_collection: integrationFolderName,
            //       user_name: this.stateUser.userInfo?.fullName,
            //       file_name: integrationFileName,
            //       document_id: documentId,
            //     },
            //   );
            //   const data = toCamelOrSnakeCase<Annotation>(response.data, true);
            // await baseService.get('/test')
            // await new Promise(resolve => setTimeout(resolve, 3000));
            const data = {
                id: 1,
                number: 3,
                date: '20.05.2025',
                result: 'Плоскостопие 1 степени',
                shtriter: '72.7',
                koef: '0.51',
                conclusion: 'Плоскостопие 1 степени, Экскавированная стопа, Вальгусное отклонение 1 пальца',
                img: [
                    '/assets/images/1.png',
                    '/assets/images/2.png',
                    '/assets/images/3.png'
                ]
            };
            return data;
        } catch (error) {
            //   alertHandler.addAlert({ alert: error });
            console.log('Все плохо, мы падаем');
        } finally{
            this.state.loadings.resultLoading = false;
        }
    }
}
const searchAsyncStore = new SearchAsync(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchStateStore"], __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSyncStore"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/shared/store/searchStore/searchStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchStore": (()=>searchStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchAsync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/searchStore/models/searchAsync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/searchStore/models/searchState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/searchStore/models/searchSync.ts [app-client] (ecmascript)");
;
;
;
class SearchStore {
    state;
    sync;
    async;
    constructor(searchState, searchSync, searchAsync){
        this.state = searchState;
        this.sync = searchSync;
        this.async = searchAsync;
    }
}
const searchStore = new SearchStore(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchStateStore"], __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchSyncStore"], __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$models$2f$searchAsync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAsyncStore"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/ResultEditControl/hooks/useResultEditView/useResultEditView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useResultEditView": (()=>useResultEditView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$searchStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/searchStore/searchStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useResultEditView({ id }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResultEditView.useEffect": ()=>{
            async function fetchData() {
                const newData = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$searchStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchStore"].async.fetchGetResultById(id);
                if (newData && typeof newData.id === 'number') {
                    setData(newData);
                } else {
                    setData(null);
                }
            }
            fetchData();
        }
    }["useResultEditView.useEffect"], [
        __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$searchStore$2f$searchStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchStore"].state.resultData,
        id
    ]);
    return {
        data
    };
}
_s(useResultEditView, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/ResultEditControl/hooks/useResultEditView/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$hooks$2f$useResultEditView$2f$useResultEditView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ResultEditControl/hooks/useResultEditView/useResultEditView.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/features/ResultEditControl/hooks/useResultEditView/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$hooks$2f$useResultEditView$2f$useResultEditView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ResultEditControl/hooks/useResultEditView/useResultEditView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$hooks$2f$useResultEditView$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/features/ResultEditControl/hooks/useResultEditView/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResultEditView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$hooks$2f$useResultEditView$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/features/ResultEditControl/hooks/useResultEditView/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$hooks$2f$useResultEditView$2f$useResultEditView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/features/ResultEditControl/hooks/useResultEditView/useResultEditView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ResultEditView({ id }) {
    _s();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const LABEL_DATA = [
        'Индекс распластанности',
        'Индекс Штритера',
        'Продольное уплощение'
    ];
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$hooks$2f$useResultEditView$2f$useResultEditView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResultEditView"])({
        id
    });
    function handleBackToSessions() {
        router.back();
    }
    function handleRedirectToEdit() {
        startTransition(()=>{
            router.push(`${pathname}/${123}`);
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_header,
                children: "Результат исследования"
            }, void 0, false, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_title,
                children: [
                    "Номер исследования: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: id
                    }, void 0, false, {
                        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                        lineNumber: 37,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_title,
                children: [
                    "Дата исследования: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data?.date
                    }, void 0, false, {
                        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                        lineNumber: 38,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_title,
                children: [
                    "Итоговый результат ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data?.result
                    }, void 0, false, {
                        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                        lineNumber: 39,
                        columnNumber: 63
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_title,
                children: [
                    "Индекс Штритера: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data?.shtriter
                    }, void 0, false, {
                        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                        lineNumber: 40,
                        columnNumber: 61
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_title,
                children: [
                    "Коэффициент распластанности верхного отдела стопы: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data?.koef
                    }, void 0, false, {
                        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                        lineNumber: 41,
                        columnNumber: 95
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_title,
                children: [
                    "Пояснения: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: data?.conclusion
                    }, void 0, false, {
                        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                        lineNumber: 42,
                        columnNumber: 55
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_header,
                style: {
                    marginTop: '24px'
                },
                children: "Снимки результатов"
            }, void 0, false, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_image,
                children: data?.img.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_image_img,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: item,
                                alt: item,
                                width: 400,
                                height: 700
                            }, void 0, false, {
                                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: LABEL_DATA[index]
                            }, void 0, false, {
                                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$components$2f$ResultEditView$2f$ResultEditView$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root_buttonGroup,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleRedirectToEdit,
                    children: "Редактировать изображения"
                }, void 0, false, {
                    fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/features/ResultEditControl/components/ResultEditView/ResultEditView.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(ResultEditView, "gz5+Ml3avg6WVXsnT8w1ZbIPABU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultEditControl$2f$hooks$2f$useResultEditView$2f$useResultEditView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResultEditView"]
    ];
});
_c = ResultEditView;
var _c;
__turbopack_context__.k.register(_c, "ResultEditView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_3d1b3a68._.js.map
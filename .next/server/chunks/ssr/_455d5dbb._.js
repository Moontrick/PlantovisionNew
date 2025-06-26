module.exports = {

"[project]/features/ResultControl/components/ResultPage/ResultPage.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "root": "ResultPage-module-scss-module__akS8wq__root",
  "root_grid": "ResultPage-module-scss-module__akS8wq__root_grid",
  "root_gridItem": "ResultPage-module-scss-module__akS8wq__root_gridItem",
  "root_gridItem_button": "ResultPage-module-scss-module__akS8wq__root_gridItem_button",
  "root_gridItem_item": "ResultPage-module-scss-module__akS8wq__root_gridItem_item",
  "root_grid_title": "ResultPage-module-scss-module__akS8wq__root_grid_title",
  "root_title": "ResultPage-module-scss-module__akS8wq__root_title",
});
}}),
"[project]/features/ResultControl/components/ResultPage/ResultPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResultPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/features/ResultControl/components/ResultPage/ResultPage.module.scss.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/LinearProgress/LinearProgress.js [app-ssr] (ecmascript) <export default as LinearProgress>");
'use client';
;
;
;
;
;
function ResultPage() {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    function handleRedirectToUser() {
        startTransition(()=>{
            router.push(`${pathname}/${123}`);
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_title,
                children: "Результаты анализов"
            }, void 0, false, {
                fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_grid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_grid_title,
                        children: "Дата"
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_grid_title,
                        children: "Краткое описание"
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_item,
                        children: "20.05.2025"
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_item,
                        children: "Плоскостопие, I=72.7"
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_item,
                        children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '8px 0px',
                                width: '100%',
                                height: '100%'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {}, void 0, false, {
                                fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                                lineNumber: 28,
                                columnNumber: 135
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                            lineNumber: 28,
                            columnNumber: 70
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_button,
                            onClick: handleRedirectToUser,
                            children: "Подробнее"
                        }, void 0, false, {
                            fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                            lineNumber: 28,
                            columnNumber: 164
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_item,
                        children: "20.05.2025"
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_item,
                        children: "Уплощенная стопа, I=54.2"
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_item,
                        children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                padding: '8px 0px',
                                width: '100%',
                                height: '100%'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LinearProgress$3e$__["LinearProgress"], {}, void 0, false, {
                                fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                                lineNumber: 33,
                                columnNumber: 135
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                            lineNumber: 33,
                            columnNumber: 70
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$features$2f$ResultControl$2f$components$2f$ResultPage$2f$ResultPage$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root_gridItem_button,
                            onClick: handleRedirectToUser,
                            children: "Подробнее"
                        }, void 0, false, {
                            fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                            lineNumber: 33,
                            columnNumber: 164
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/features/ResultControl/components/ResultPage/ResultPage.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),
"[project]/widgets/SideBar/SideBar.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "img_block": "SideBar-module-scss-module__VaTkvG__img_block",
  "logo": "SideBar-module-scss-module__VaTkvG__logo",
  "logoContainer": "SideBar-module-scss-module__VaTkvG__logoContainer",
  "sideBar": "SideBar-module-scss-module__VaTkvG__sideBar",
});
}}),
"[project]/public/assets/icons/IconHome/IconHome.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconHome": (()=>IconHome)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function IconHome({ fill = 'var(--steel-20)', width = 16, height = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 6.6L8 1L15 6.6V15.4C15 15.8243 14.8361 16.2313 14.5444 16.5314C14.2527 16.8314 13.857 17 13.4444 17H2.55556C2.143 17 1.74733 16.8314 1.45561 16.5314C1.16389 16.2313 1 15.8243 1 15.4V6.6Z",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/public/assets/icons/IconHome/IconHome.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.6665 17V9H10.3332V17",
                stroke: "#60749A",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/public/assets/icons/IconHome/IconHome.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/public/assets/icons/IconHome/IconHome.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/public/assets/icons/IconHome/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHome$2f$IconHome$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHome/IconHome.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/public/assets/icons/IconHome/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHome$2f$IconHome$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHome/IconHome.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHome$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHome/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/public/assets/icons/IconHelp/IconHelp.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconHelp": (()=>IconHelp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function IconHelp({ fill = 'var(--steel-20)', width = 16, height = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 8.55557C17.003 9.72878 16.7289 10.8861 16.2 11.9333C15.5728 13.1882 14.6086 14.2437 13.4155 14.9816C12.2223 15.7195 10.8473 16.1106 9.44443 16.1111C8.27122 16.1142 7.11387 15.8401 6.06666 15.3111L1 17L2.68889 11.9333C2.15994 10.8861 1.88583 9.72878 1.88889 8.55557C1.88943 7.15269 2.28054 5.77766 3.01841 4.58451C3.75629 3.39135 4.81178 2.42719 6.06666 1.80002C7.11387 1.27107 8.27122 0.996966 9.44443 1.00003H9.88887C11.7416 1.10224 13.4916 1.88426 14.8037 3.19634C16.1157 4.50843 16.8978 6.25837 17 8.11113V8.55557Z",
            stroke: fill,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/public/assets/icons/IconHelp/IconHelp.tsx",
            lineNumber: 12,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/public/assets/icons/IconHelp/IconHelp.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/public/assets/icons/IconHelp/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHelp$2f$IconHelp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHelp/IconHelp.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/public/assets/icons/IconHelp/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHelp$2f$IconHelp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHelp/IconHelp.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHelp$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHelp/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/public/assets/icons/IconDownload2/IconDownload2.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconDownload2": (()=>IconDownload2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function IconDownload2({ fill = 'var(--sapphire-10)', width = 16, height = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 18 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 9.50537H12.2L10.6 11.7554H7.4L5.8 9.50537H1",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/public/assets/icons/IconDownload2/IconDownload2.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3.50537H12.808C13.1057 3.50552 13.3974 3.58351 13.6504 3.73058C13.9033 3.87765 14.1075 4.08796 14.24 4.33787L17 9.50537V14.0054C17 14.4032 16.8314 14.7847 16.5314 15.066C16.2313 15.3473 15.8243 15.5054 15.4 15.5054H2.6C2.17565 15.5054 1.76869 15.3473 1.46863 15.066C1.16857 14.7847 1 14.4032 1 14.0054V9.50537L3.76 4.33787C3.89246 4.08796 4.09666 3.87765 4.34964 3.73058C4.60261 3.58351 4.89433 3.50552 5.192 3.50537H6",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/public/assets/icons/IconDownload2/IconDownload2.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.97168 7.99463V0.494629",
                stroke: fill,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/public/assets/icons/IconDownload2/IconDownload2.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.97168 7.99463L11.4717 5.49463",
                stroke: fill,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/public/assets/icons/IconDownload2/IconDownload2.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.97168 7.99463L6.47168 5.49463",
                stroke: fill,
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/public/assets/icons/IconDownload2/IconDownload2.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/public/assets/icons/IconDownload2/IconDownload2.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}}),
"[project]/public/assets/icons/IconDownload2/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconDownload2$2f$IconDownload2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconDownload2/IconDownload2.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/public/assets/icons/IconDownload2/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconDownload2$2f$IconDownload2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconDownload2/IconDownload2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconDownload2$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconDownload2/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/public/assets/icons/IconCloud/IconCloud.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "IconCloud": (()=>IconCloud)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function IconCloud({ fill = 'var(--steel-20)', width = 16, height = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: "0 0 18 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.3646 5.5H12.4485C12.1765 4.41325 11.6144 3.42699 10.8261 2.6533C10.0379 1.8796 9.05504 1.34949 7.9893 1.12321C6.92355 0.896921 5.81765 0.98353 4.79724 1.37319C3.77683 1.76286 2.88284 2.43995 2.21685 3.32754C1.55086 4.21512 1.13957 5.27761 1.02972 6.39426C0.919872 7.51092 1.11587 8.63698 1.59544 9.64447C2.075 10.652 2.81891 11.5005 3.74264 12.0937C4.66636 12.6868 5.73286 13.0008 6.82094 13H13.3646C14.3288 13 15.2535 12.6049 15.9352 11.9016C16.617 11.1984 17 10.2446 17 9.25C17 8.25544 16.617 7.30161 15.9352 6.59835C15.2535 5.89509 14.3288 5.5 13.3646 5.5Z",
            stroke: fill,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/public/assets/icons/IconCloud/IconCloud.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/public/assets/icons/IconCloud/IconCloud.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/public/assets/icons/IconCloud/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconCloud$2f$IconCloud$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconCloud/IconCloud.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/public/assets/icons/IconCloud/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconCloud$2f$IconCloud$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconCloud/IconCloud.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconCloud$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconCloud/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/public/assets/images/Plantovision_logo_2.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Plantovision_logo_2.ed01a950.png");}}),
"[project]/public/assets/images/Plantovision_logo_2.png.mjs { IMAGE => \"[project]/public/assets/images/Plantovision_logo_2.png (static in ecmascript)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$Plantovision_logo_2$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/images/Plantovision_logo_2.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$Plantovision_logo_2$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 2613,
    height: 936,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/ADOAiogKGBoZAAAAAAAAAAAAAAAABwcHALOzswD///8AADqSnZwNISMjCRYYFwkWGBcIExQUDhsdGKWytBjx/v8WADiPmZcfTlNSGT9DQhtDSEYaQUZEHENIQ465vkrU+v9DeTEcI7YzyUgAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "item": "NavLinkSideBar-module-scss-module__D74cDG__item",
  "navLink": "NavLinkSideBar-module-scss-module__D74cDG__navLink",
});
}}),
"[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NavLinkSideBar": (()=>NavLinkSideBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$NavLinkSideBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.module.scss.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [app-ssr] (ecmascript) <export default as CircularProgress>");
;
;
;
;
;
const NavLinkSideBar = ({ path, title, icon })=>{
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const fullPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    async function handleSetPathname() {
        if (path === fullPathname) return;
        startTransition(()=>{
            router.push(path);
        });
    }
    return(// <Link to={path}  className={styles.navLink} onMouseEnter={() => setFlag(true)} onMouseLeave={() => setFlag(false)}>
    //     {cloneElement(icon, {
    //           fill: flag ? 'var(--sapphire-10)' : 'var(--steel-20)', 
    //     })}
    //     {title}
    // </Link>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        width: '100%',
        height: '42',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
            style: {
                color: 'var(--sapphire-20)'
            }
        }, void 0, false, {
            fileName: "[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx",
            lineNumber: 36,
            columnNumber: 22
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>handleSetPathname(),
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$NavLinkSideBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
            style: {
                background: fullPathname.includes(path) ? 'var(--unique-white-10)' : 'transparent'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(icon, {
                    fill: fullPathname.includes(path) ? 'var(--sapphire-20)' : 'var(--steel-80)'
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$NavLinkSideBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                    style: {
                        color: fullPathname.includes(path) ? 'var(--sapphire-20)' : 'var(--steel-80)'
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this));
};
}}),
"[project]/shared/ui/NavLinkSideBar/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$NavLinkSideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/shared/ui/NavLinkSideBar/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$NavLinkSideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shared/ui/NavLinkSideBar/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/widgets/SideBar/SideBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SideBar": (()=>SideBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/widgets/SideBar/SideBar.module.scss.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHome$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHome/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHome$2f$IconHome$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHome/IconHome.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHelp$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHelp/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHelp$2f$IconHelp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconHelp/IconHelp.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconDownload2$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconDownload2/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconDownload2$2f$IconDownload2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconDownload2/IconDownload2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconCloud$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/public/assets/icons/IconCloud/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconCloud$2f$IconCloud$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/icons/IconCloud/IconCloud.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$Plantovision_logo_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$Plantovision_logo_2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/images/Plantovision_logo_2.png.mjs { IMAGE => "[project]/public/assets/images/Plantovision_logo_2.png (static in ecmascript)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/shared/ui/NavLinkSideBar/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$NavLinkSideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/ui/NavLinkSideBar/NavLinkSideBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const SideBar = ()=>{
    const NavLinkArray = [
        {
            id: 0,
            path: '/home',
            title: 'Главная',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHome$2f$IconHome$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconHome"], {
                width: "1.3vw",
                height: "1.3vw",
                fill: "var(--steel-20)"
            }, void 0, false, {
                fileName: "[project]/widgets/SideBar/SideBar.tsx",
                lineNumber: 17,
                columnNumber: 19
            }, this)
        },
        {
            id: 1,
            path: '/result',
            title: 'Посмотреть результаты',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconCloud$2f$IconCloud$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconCloud"], {
                width: "1.3vw",
                height: "1.3vw",
                fill: "var(--steel-20)"
            }, void 0, false, {
                fileName: "[project]/widgets/SideBar/SideBar.tsx",
                lineNumber: 23,
                columnNumber: 19
            }, this)
        },
        {
            id: 2,
            path: '/upload',
            title: 'Загрузить новый снимок',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconDownload2$2f$IconDownload2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconDownload2"], {
                width: "1.3vw",
                height: "1.3vw",
                fill: "var(--steel-20)"
            }, void 0, false, {
                fileName: "[project]/widgets/SideBar/SideBar.tsx",
                lineNumber: 29,
                columnNumber: 19
            }, this)
        },
        {
            id: 3,
            path: '/home',
            title: 'Помощь',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$icons$2f$IconHelp$2f$IconHelp$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconHelp"], {
                width: "1.3vw",
                height: "1.3vw",
                fill: "var(--steel-20)"
            }, void 0, false, {
                fileName: "[project]/widgets/SideBar/SideBar.tsx",
                lineNumber: 35,
                columnNumber: 19
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sideBar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$images$2f$Plantovision_logo_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$images$2f$Plantovision_logo_2$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "PlantovisionLogo",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo
                }, void 0, false, {
                    fileName: "[project]/widgets/SideBar/SideBar.tsx",
                    lineNumber: 41,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/SideBar/SideBar.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            NavLinkArray.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$ui$2f$NavLinkSideBar$2f$NavLinkSideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLinkSideBar"], {
                    ...item,
                    key: item.id,
                    __source: {
                        fileName: "[project]/widgets/SideBar/SideBar.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    },
                    __self: this
                }))
        ]
    }, void 0, true, {
        fileName: "[project]/widgets/SideBar/SideBar.tsx",
        lineNumber: 39,
        columnNumber: 7
    }, this);
};
}}),
"[project]/widgets/SideBar/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/SideBar/SideBar.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/widgets/SideBar/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/SideBar/SideBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/widgets/SideBar/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/features/RootWrapper/RootWrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RootWrapper": (()=>RootWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/widgets/SideBar/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/SideBar/SideBar.tsx [app-ssr] (ecmascript)");
'use client';
;
;
const RootWrapper = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100dvh",
            background: "var(--steel-50)",
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '1vw',
            padding: '2%'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--unique-white-10)',
                    boxShadow: 'var(--shadow-500)',
                    display: "flex",
                    border: '1px solid var(--steel-170)',
                    borderRadius: '12px',
                    // paddingLeft: '20px',
                    width: '20.79vw',
                    height: '100%',
                    gap: 0,
                    paddingBottom: '2vw'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$SideBar$2f$SideBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SideBar"], {}, void 0, false, {
                    fileName: "[project]/features/RootWrapper/RootWrapper.tsx",
                    lineNumber: 26,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/features/RootWrapper/RootWrapper.tsx",
                lineNumber: 11,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--unique-white-10)',
                    boxShadow: 'var(--shadow-500)',
                    display: "flex",
                    border: '1px solid var(--steel-170)',
                    borderRadius: '12px',
                    width: '100vw',
                    height: '100%',
                    padding: '16px',
                    gap: 0,
                    overflow: 'hidden'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/features/RootWrapper/RootWrapper.tsx",
                lineNumber: 28,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/features/RootWrapper/RootWrapper.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
};
}}),

};

//# sourceMappingURL=_455d5dbb._.js.map
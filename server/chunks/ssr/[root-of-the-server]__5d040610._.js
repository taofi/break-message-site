module.exports = {

"[project]/src/components/TextAreaWithCounter/CharacterCounter.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const CharacterCounter = ({ currentCount, limit })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "mt-1 text-sm text-gray-500",
        children: [
            currentCount,
            " / ",
            limit,
            " символов",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "w-full bg-gray-200 rounded-full h-2 mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-blue-500 h-2 rounded-full",
                    style: {
                        width: `${Math.min(100, currentCount / limit * 100)}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/TextAreaWithCounter/CharacterCounter.tsx",
                    lineNumber: 10,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/TextAreaWithCounter/CharacterCounter.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TextAreaWithCounter/CharacterCounter.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const __TURBOPACK__default__export__ = CharacterCounter;
}),
"[project]/src/components/TextAreaWithCounter/CopyButton.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [ssr] (ecmascript)");
;
;
;
const CopyButton = ({ onClick, disabled })=>{
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleClick = ()=>{
        onClick();
        setShowTooltip(true);
        setTimeout(()=>setShowTooltip(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: handleClick,
                disabled: disabled,
                className: `p-1 rounded-md transition-colors ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`,
                "aria-label": "Копировать текст",
                children: showTooltip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiCheck"], {
                    className: "w-5 h-5 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/TextAreaWithCounter/CopyButton.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FiCopy"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/TextAreaWithCounter/CopyButton.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/TextAreaWithCounter/CopyButton.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute z-10 top-full right-0 mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md whitespace-nowrap",
                children: "Скопировано!"
            }, void 0, false, {
                fileName: "[project]/src/components/TextAreaWithCounter/CopyButton.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TextAreaWithCounter/CopyButton.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CopyButton;
}),
"[project]/src/components/TextAreaWithCounter/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$CharacterCounter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextAreaWithCounter/CharacterCounter.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$CopyButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextAreaWithCounter/CopyButton.tsx [ssr] (ecmascript)");
;
;
;
;
const TextAreaWithCounter = ({ characterLimit = 1000, initialValue = '' })=>{
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialValue);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [
        text
    ]);
    const handleCopy = ()=>{
        if (text) {
            navigator.clipboard.writeText(text);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        value: text,
                        onChange: (e)=>setText(e.target.value),
                        className: "w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden",
                        rows: 1,
                        placeholder: "Введите текст...",
                        maxLength: characterLimit
                    }, void 0, false, {
                        fileName: "[project]/src/components/TextAreaWithCounter/index.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute right-2 top-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$CopyButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onClick: handleCopy,
                            disabled: !text
                        }, void 0, false, {
                            fileName: "[project]/src/components/TextAreaWithCounter/index.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TextAreaWithCounter/index.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TextAreaWithCounter/index.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$CharacterCounter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentCount: text.length,
                limit: characterLimit
            }, void 0, false, {
                fileName: "[project]/src/components/TextAreaWithCounter/index.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TextAreaWithCounter/index.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TextAreaWithCounter;
}),
"[project]/src/components/index.ts [ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextAreaWithCounter/index.tsx [ssr] (ecmascript)");
;
}),
"[project]/src/components/index.ts [ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextAreaWithCounter/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/index.ts [ssr] (ecmascript) <locals>");
}),
"[project]/src/components/TextAreaWithCounter/index.tsx [ssr] (ecmascript) <export default as TextAreaWithCounter>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TextAreaWithCounter": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextAreaWithCounter/index.tsx [ssr] (ecmascript)");
}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/index.ts [ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAreaWithCounter$3e$__ = __turbopack_context__.i("[project]/src/components/TextAreaWithCounter/index.tsx [ssr] (ecmascript) <export default as TextAreaWithCounter>");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextAreaWithCounter$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextAreaWithCounter$3e$__["TextAreaWithCounter"], {
            initialValue: "Начальный текст"
        }, void 0, false, {
            fileName: "[project]/src/pages/index.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5d040610._.js.map
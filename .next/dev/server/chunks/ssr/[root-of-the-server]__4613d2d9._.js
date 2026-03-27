module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/context/FormBuilderContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormBuilderProvider",
    ()=>FormBuilderProvider,
    "useFormBuilder",
    ()=>useFormBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const defaultSchema = {
    id: 'form-1',
    title: 'Meu Formulário Editável',
    description: 'Preencha as informações abaixo.',
    welcomeScreen: {
        enabled: false,
        title: 'Bem-vindo ao nosso formulário',
        description: 'Por favor, reserve alguns minutos para preencher as informações abaixo.',
        buttonText: 'Começar'
    },
    fields: []
};
const FormBuilderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function FormBuilderProvider({ children }) {
    const [schema, setSchema] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultSchema);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load from localStorage on mount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const saved = localStorage.getItem('form-schema');
        if (saved) {
            try {
                setSchema(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse schema", e);
            }
        }
        setIsLoaded(true);
    }, []);
    // Save to localStorage on change
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isLoaded) {
            localStorage.setItem('form-schema', JSON.stringify(schema));
        }
    }, [
        schema,
        isLoaded
    ]);
    const addField = (type)=>{
        const newField = {
            id: crypto.randomUUID(),
            type,
            label: 'Nova Pergunta',
            required: false,
            options: type === 'select' || type === 'radio' || type === 'checkbox' ? [
                {
                    label: 'Opção 1',
                    value: 'op1'
                }
            ] : undefined
        };
        setSchema((prev)=>({
                ...prev,
                fields: [
                    ...prev.fields,
                    newField
                ]
            }));
    };
    const removeField = (id)=>{
        setSchema((prev)=>({
                ...prev,
                fields: prev.fields.filter((f)=>f.id !== id)
            }));
    };
    const updateField = (id, updates)=>{
        setSchema((prev)=>({
                ...prev,
                fields: prev.fields.map((f)=>f.id === id ? {
                        ...f,
                        ...updates
                    } : f)
            }));
    };
    const updateFormMetadata = (title, description, redirectUrl)=>{
        setSchema((prev)=>({
                ...prev,
                title,
                description,
                redirectUrl
            }));
    };
    const updateWelcomeScreen = (updates)=>{
        setSchema((prev)=>({
                ...prev,
                welcomeScreen: {
                    ...prev.welcomeScreen || {
                        enabled: false
                    },
                    ...updates
                }
            }));
    };
    const updateEmailConfig = (updates)=>{
        setSchema((prev)=>({
                ...prev,
                emailConfig: {
                    ...prev.emailConfig || {
                        enabled: false
                    },
                    ...updates
                }
            }));
    };
    const moveField = (id, direction)=>{
        setSchema((prev)=>{
            const index = prev.fields.findIndex((f)=>f.id === id);
            if (index === -1) return prev;
            const newFields = [
                ...prev.fields
            ];
            if (direction === 'up' && index > 0) {
                [newFields[index - 1], newFields[index]] = [
                    newFields[index],
                    newFields[index - 1]
                ];
            } else if (direction === 'down' && index < newFields.length - 1) {
                [newFields[index + 1], newFields[index]] = [
                    newFields[index],
                    newFields[index + 1]
                ];
            }
            return {
                ...prev,
                fields: newFields
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormBuilderContext.Provider, {
        value: {
            schema,
            addField,
            removeField,
            updateField,
            updateFormMetadata,
            updateWelcomeScreen,
            updateEmailConfig,
            moveField
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/FormBuilderContext.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
function useFormBuilder() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FormBuilderContext);
    if (context === undefined) {
        throw new Error('useFormBuilder must be used within a FormBuilderProvider');
    }
    return context;
}
}),
"[project]/src/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormBuilderContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/FormBuilderContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormBuilderContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormBuilderProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4613d2d9._.js.map
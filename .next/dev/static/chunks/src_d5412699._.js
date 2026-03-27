(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/basics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Card",
    ()=>Card,
    "Input",
    ()=>Input,
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant = 'primary', size = 'default', ...props }, ref)=>{
    const variants = {
        primary: "bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/20",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
        ghost: "hover:bg-gray-100 text-gray-700",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-100"
    };
    const sizes = {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 px-3 text-xs",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10 p-0"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]", variants[variant], sizes[size], className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/basics.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-12 w-full rounded-xl border-2 border-transparent bg-gray-100 px-4 py-2 text-base shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 hover:bg-gray-200/50 focus:bg-white focus:border-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/basics.tsx",
        lineNumber: 37,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Input;
Input.displayName = "Input";
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-900 mb-2 block", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/basics.tsx",
        lineNumber: 53,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = Label;
Label.displayName = "Label";
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border border-gray-100 bg-white text-gray-950 shadow-xl shadow-gray-200/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/basics.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = Card;
Card.displayName = "Card";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "Input$React.forwardRef");
__turbopack_context__.k.register(_c3, "Input");
__turbopack_context__.k.register(_c4, "Label$React.forwardRef");
__turbopack_context__.k.register(_c5, "Label");
__turbopack_context__.k.register(_c6, "Card$React.forwardRef");
__turbopack_context__.k.register(_c7, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/renderer/FormRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormRenderer",
    ()=>FormRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/basics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FormRenderer({ schema, preview = false }) {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hasStarted, setHasStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!schema.welcomeScreen?.enabled);
    // Reset step when schema changes (important for builder preview)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormRenderer.useEffect": ()=>{
            if (preview) {
                // Keep current step valid if fields are removed
                if (currentStep >= schema.fields.length && schema.fields.length > 0) {
                    setCurrentStep(schema.fields.length - 1);
                }
                // Update hasStarted if welcomeScreen config changes during preview
                setHasStarted(!schema.welcomeScreen?.enabled);
            }
        }
    }["FormRenderer.useEffect"], [
        schema.fields.length,
        preview,
        currentStep,
        schema.welcomeScreen?.enabled
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (preview) return;
        console.log('Form submitted:', answers);
        if (schema.redirectUrl) {
            window.location.href = schema.redirectUrl;
        } else {
            alert('Formulário enviado com sucesso!');
        }
    };
    const handleNext = ()=>{
        if (currentStep < schema.fields.length - 1) {
            setDirection(1);
            setCurrentStep((prev)=>prev + 1);
        }
    };
    const handlePrev = ()=>{
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep((prev)=>prev - 1);
        }
    };
    const handleAnswer = (value)=>{
        if (preview && !value) return; // Allow typing in preview without state if complex
        const fieldId = schema.fields[currentStep].id;
        setAnswers((prev)=>({
                ...prev,
                [fieldId]: value
            }));
    };
    // Variants for slide animation
    const variants = {
        enter: (direction)=>({
                y: direction > 0 ? 50 : -50,
                opacity: 0
            }),
        center: {
            zIndex: 1,
            y: 0,
            opacity: 1
        },
        exit: (direction)=>({
                zIndex: 0,
                y: direction < 0 ? 50 : -50,
                opacity: 0
            })
    };
    if (schema.fields.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20 text-gray-300 italic text-xl",
            children: "O formulário está vazio."
        }, void 0, false, {
            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    }
    const currentField = schema.fields[currentStep];
    const isLastStep = currentStep === schema.fields.length - 1;
    const progress = (currentStep + 1) / schema.fields.length * 100;
    if (schema.welcomeScreen?.enabled && !hasStarted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl mx-auto p-4 sm:p-8 flex flex-col items-center justify-center min-h-[400px] sm:min-h-[600px] text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "space-y-8 w-full",
                children: [
                    schema.welcomeScreen.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: schema.welcomeScreen.imageUrl,
                        alt: "Welcome",
                        className: "w-full max-w-md mx-auto h-auto rounded-2xl object-cover mb-8",
                        onError: (e)=>{
                            // Esconder imagem se a URL for inválida
                            e.target.style.display = 'none';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight",
                                children: schema.welcomeScreen.title || schema.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl sm:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto",
                                children: schema.welcomeScreen.description || schema.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setHasStarted(true),
                        size: "lg",
                        className: "rounded-full px-8 sm:px-12 py-6 text-xl shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all bg-black text-white hover:bg-gray-800",
                        children: [
                            schema.welcomeScreen.buttonText || 'Começar',
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 24,
                                className: "ml-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                lineNumber: 129,
                                columnNumber: 60
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl mx-auto p-4 sm:p-8 flex flex-col h-full min-h-[400px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gray-100 h-1 mb-8 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "h-full bg-black",
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${progress}%`
                    },
                    transition: {
                        duration: 0.5
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                    lineNumber: 140,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: currentStep === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-black text-gray-900 mb-2 tracking-tight leading-tight",
                            children: schema.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                            lineNumber: 151,
                            columnNumber: 17
                        }, this),
                        schema.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-500 leading-relaxed",
                            children: schema.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                            lineNumber: 153,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                    lineNumber: 150,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex-1 flex flex-col relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        custom: direction,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: direction,
                            variants: variants,
                            initial: "enter",
                            animate: "center",
                            exit: "exit",
                            transition: {
                                y: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                },
                                opacity: {
                                    duration: 0.2
                                }
                            },
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-none text-sm font-bold text-black mt-1.5 border border-black px-2 py-0.5 rounded",
                                            children: [
                                                currentStep + 1,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 10,
                                                    className: "inline ml-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: currentField.id,
                                                    className: "text-2xl sm:text-3xl font-medium text-gray-900 mb-6 block leading-tight",
                                                    children: [
                                                        currentField.label,
                                                        currentField.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500 ml-1 text-lg align-top",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 47
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                currentField.helpText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-gray-500 mb-6 -mt-4",
                                                    children: currentField.helpText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-h-[120px]",
                                                    children: [
                                                        currentField.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: currentField.id,
                                                            placeholder: currentField.placeholder || "Digite sua resposta...",
                                                            required: currentField.required,
                                                            disabled: preview,
                                                            autoFocus: true,
                                                            className: "text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-full",
                                                            value: answers[currentField.id] || '',
                                                            onChange: (e)=>handleAnswer(e.target.value),
                                                            onKeyDown: (e)=>{
                                                                if (e.key === 'Enter' && !isLastStep) {
                                                                    e.preventDefault();
                                                                    handleNext();
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentField.type === 'email' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: currentField.id,
                                                            type: "email",
                                                            placeholder: currentField.placeholder || "exemplo@email.com",
                                                            required: currentField.required,
                                                            disabled: preview,
                                                            autoFocus: true,
                                                            className: "text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-full",
                                                            value: answers[currentField.id] || '',
                                                            onChange: (e)=>handleAnswer(e.target.value),
                                                            onKeyDown: (e)=>{
                                                                if (e.key === 'Enter' && !isLastStep) {
                                                                    e.preventDefault();
                                                                    handleNext();
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentField.type === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: currentField.id,
                                                            type: "number",
                                                            placeholder: currentField.placeholder,
                                                            required: currentField.required,
                                                            disabled: preview,
                                                            autoFocus: true,
                                                            className: "text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-full",
                                                            value: answers[currentField.id] || '',
                                                            onChange: (e)=>handleAnswer(e.target.value),
                                                            onKeyDown: (e)=>{
                                                                if (e.key === 'Enter' && !isLastStep) {
                                                                    e.preventDefault();
                                                                    handleNext();
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentField.type === 'date' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: currentField.id,
                                                            type: "date",
                                                            required: currentField.required,
                                                            disabled: preview,
                                                            autoFocus: true,
                                                            className: "text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-auto min-w-[200px]",
                                                            value: answers[currentField.id] || '',
                                                            onChange: (e)=>handleAnswer(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentField.type === 'textarea' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            id: currentField.id,
                                                            className: "flex min-h-[160px] w-full rounded-none border-b-2 border-x-0 border-t-0 border-gray-200 bg-transparent px-0 py-2 text-2xl placeholder:text-gray-300 focus:outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-50 resize-none font-sans",
                                                            placeholder: currentField.placeholder || "Digite sua resposta longa...",
                                                            required: currentField.required,
                                                            disabled: preview,
                                                            autoFocus: true,
                                                            value: answers[currentField.id] || '',
                                                            onChange: (e)=>handleAnswer(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentField.type === 'select' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            id: currentField.id,
                                                            className: "flex h-16 w-full rounded-none border-b-2 border-x-0 border-t-0 border-gray-200 bg-transparent px-0 py-2 text-2xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
                                                            required: currentField.required,
                                                            disabled: preview,
                                                            autoFocus: true,
                                                            value: answers[currentField.id] || '',
                                                            onChange: (e)=>handleAnswer(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Selecione uma opção..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                    lineNumber: 285,
                                                                    columnNumber: 23
                                                                }, this),
                                                                currentField.options?.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: opt.value,
                                                                        children: [
                                                                            String.fromCharCode(65 + idx),
                                                                            ". ",
                                                                            opt.label
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentField.type === 'radio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 mt-4",
                                                            children: currentField.options?.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: `flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group hover:bg-gray-50 ${answers[currentField.id] === opt.value ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-200'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold mr-4 transition-colors ${answers[currentField.id] === opt.value ? 'bg-black text-white border-black' : 'border-gray-200 group-hover:border-gray-300'}`,
                                                                            children: String.fromCharCode(65 + idx)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            id: `${currentField.id}-${idx}`,
                                                                            name: currentField.id,
                                                                            value: opt.value,
                                                                            className: "hidden",
                                                                            disabled: preview,
                                                                            required: currentField.required,
                                                                            checked: answers[currentField.id] === opt.value,
                                                                            onChange: (e)=>{
                                                                                handleAnswer(e.target.value);
                                                                            // Optional: Auto advance on radio selection
                                                                            // setTimeout(handleNext, 400); 
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 299,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xl text-gray-800 font-medium",
                                                                            children: opt.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 314,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        answers[currentField.id] === opt.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "ml-auto text-black",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                size: 24
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                                lineNumber: 317,
                                                                                columnNumber: 32
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 316,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this),
                                                        currentField.type === 'checkbox' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 mt-4",
                                                            children: currentField.options?.map((opt, idx)=>{
                                                                const currentAnswers = answers[currentField.id] || [];
                                                                const isChecked = currentAnswers.includes(opt.value);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: `flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group hover:bg-gray-50 ${isChecked ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-200'}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold mr-4 transition-colors ${isChecked ? 'bg-black text-white border-black' : 'border-gray-200 group-hover:border-gray-300'}`,
                                                                            children: String.fromCharCode(65 + idx)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 333,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "checkbox",
                                                                            id: `${currentField.id}-${idx}`,
                                                                            name: currentField.id,
                                                                            value: opt.value,
                                                                            className: "hidden",
                                                                            disabled: preview,
                                                                            checked: isChecked,
                                                                            onChange: (e)=>{
                                                                                const val = e.target.value;
                                                                                const newAnswers = e.target.checked ? [
                                                                                    ...currentAnswers,
                                                                                    val
                                                                                ] : currentAnswers.filter((v)=>v !== val);
                                                                                handleAnswer(newAnswers);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 336,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xl text-gray-800 font-medium",
                                                                            children: opt.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 352,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        isChecked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "ml-auto text-black",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                size: 24
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                                lineNumber: 355,
                                                                                columnNumber: 40
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                            lineNumber: 354,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                                    lineNumber: 332,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this)
                        }, currentField.id, false, {
                            fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 flex justify-between items-center mt-auto border-t border-gray-100",
                        children: [
                            currentStep > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                variant: "ghost",
                                onClick: handlePrev,
                                className: "text-gray-500 hover:text-black hover:bg-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 20,
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                        lineNumber: 378,
                                        columnNumber: 21
                                    }, this),
                                    " Anterior"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                lineNumber: 372,
                                columnNumber: 18
                            }, this),
                            isLastStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                size: "lg",
                                className: "ml-auto rounded-full px-8 text-lg shadow-xl shadow-black/20 hover:shadow-black/30 transition-all bg-black text-white hover:bg-gray-800",
                                children: [
                                    "Concluir ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 20,
                                        className: "ml-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                        lineNumber: 384,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                lineNumber: 383,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                size: "lg",
                                onClick: handleNext,
                                className: "ml-auto rounded-full px-8 text-lg shadow-xl shadow-black/20 hover:shadow-black/30 transition-all",
                                children: [
                                    "Próximo ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 20,
                                        className: "ml-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                        lineNumber: 393,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                                lineNumber: 387,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/renderer/FormRenderer.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/renderer/FormRenderer.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(FormRenderer, "4JsrZgjmgpWpPu3SbohrG956HfI=");
_c = FormRenderer;
var _c;
__turbopack_context__.k.register(_c, "FormRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/view/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ViewPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormBuilderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/FormBuilderContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$FormRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/renderer/FormRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/basics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ViewPage() {
    _s();
    const { schema } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormBuilderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormBuilder"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$basics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        className: "mb-4 text-slate-500 hover:text-slate-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 16,
                                className: "mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/view/page.tsx",
                                lineNumber: 17,
                                columnNumber: 16
                            }, this),
                            " Voltar ao Início"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/view/page.tsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/view/page.tsx",
                    lineNumber: 15,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/view/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$renderer$2f$FormRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormRenderer"], {
                schema: schema
            }, void 0, false, {
                fileName: "[project]/src/app/view/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/view/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(ViewPage, "uyYm+FNuIXDy4C/zNgTnCFhkqLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormBuilderContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormBuilder"]
    ];
});
_c = ViewPage;
var _c;
__turbopack_context__.k.register(_c, "ViewPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d5412699._.js.map
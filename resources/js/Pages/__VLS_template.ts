import { __VLS_publicComponent, __VLS_internalComponent, __VLS_componentsOption, __VLS_name, props, form, menerimaListener, membayarListener, submitData } from './Edit.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).form; ({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).input;
({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label; ({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).h5; ({} as __VLS_IntrinsicElements).h5; ({} as __VLS_IntrinsicElements).h5; ({} as __VLS_IntrinsicElements).h5; ({} as __VLS_IntrinsicElements).h5; ({} as __VLS_IntrinsicElements).h5;
({} as __VLS_IntrinsicElements).textarea; ({} as __VLS_IntrinsicElements).textarea;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).h2; ({} as __VLS_IntrinsicElements).h2;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["form"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
({} as __VLS_IntrinsicElements).form;
({} as __VLS_IntrinsicElements).form;
const __VLS_2 = __VLS_1({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4 = { 'submit': __VLS_pickEvent(__VLS_3.emit!, 'submit' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_1, typeof __VLS_2>).onSubmit) };
__VLS_4 = {
submit: () => { }
};
{
const __VLS_5 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_7 = __VLS_6({ ...{}, class: ("p-3 mt-4 flex flex-col justify-center items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("p-3 mt-4 flex flex-col justify-center items-center"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
{
const __VLS_9 = ({} as __VLS_IntrinsicElements)["input"];
const __VLS_10 = __VLS_elementAsFunctionalComponent(__VLS_9);
({} as __VLS_IntrinsicElements).input;
const __VLS_11 = __VLS_10({ ...{ onChange: {} as any, }, type: ("number"), id: ("amount"), placeholder: ("amount"), value: ((__VLS_ctx.props.data[0].amount)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_9, typeof __VLS_11> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, type: ("number"), id: ("amount"), placeholder: ("amount"), value: ((__VLS_ctx.props.data[0].amount)), });
const __VLS_12 = __VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11)!;
let __VLS_13 = { 'change': __VLS_pickEvent(__VLS_12.emit!, 'change' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_11>).onChange) };
__VLS_13 = {
change: ((e: KeyboardEvent) => {
return __VLS_ctx.form.amount = Number((<HTMLInputElement>e.target).value);
})
};
}
{
const __VLS_14 = ({} as __VLS_IntrinsicElements)["label"];
const __VLS_15 = __VLS_elementAsFunctionalComponent(__VLS_14);
({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).label;
const __VLS_16 = __VLS_15({ ...{}, for: ("amount"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_14, typeof __VLS_16> & Record<string, unknown>) => void)({ ...{}, for: ("amount"), });
const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16)!;
(__VLS_17.slots!).default;
}
if (__VLS_ctx.props.errors.amount) {
{
const __VLS_18 = ({} as __VLS_IntrinsicElements)["h5"];
const __VLS_19 = __VLS_elementAsFunctionalComponent(__VLS_18);
({} as __VLS_IntrinsicElements).h5;
({} as __VLS_IntrinsicElements).h5;
const __VLS_20 = __VLS_19({ ...{}, class: ("text-white bg-rose-800 py-2 px-5 my-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_18, typeof __VLS_20> & Record<string, unknown>) => void)({ ...{}, class: ("text-white bg-rose-800 py-2 px-5 my-3"), });
const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)!;
(__VLS_ctx.props.errors.amount);
(__VLS_21.slots!).default;
}
// @ts-ignore
[props, props, form, props, props,];
}
{
const __VLS_22 = ({} as __VLS_IntrinsicElements)["textarea"];
const __VLS_23 = __VLS_elementAsFunctionalComponent(__VLS_22);
({} as __VLS_IntrinsicElements).textarea;
({} as __VLS_IntrinsicElements).textarea;
const __VLS_24 = __VLS_23({ ...{}, id: ("keterangan"), placeholder: ("keterangan"), value: ((__VLS_ctx.props.data[0].keterangan)), }, ...__VLS_functionalComponentArgsRest(__VLS_23));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_22, typeof __VLS_24> & Record<string, unknown>) => void)({ ...{}, id: ("keterangan"), placeholder: ("keterangan"), value: ((__VLS_ctx.props.data[0].keterangan)), });
const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_22, __VLS_24)!;
}
{
const __VLS_26 = ({} as __VLS_IntrinsicElements)["label"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
({} as __VLS_IntrinsicElements).label;
({} as __VLS_IntrinsicElements).label;
const __VLS_28 = __VLS_27({ ...{}, for: ("keterangan"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, for: ("keterangan"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
(__VLS_29.slots!).default;
}
if (__VLS_ctx.props.errors.keterangan) {
{
const __VLS_30 = ({} as __VLS_IntrinsicElements)["h5"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
({} as __VLS_IntrinsicElements).h5;
({} as __VLS_IntrinsicElements).h5;
const __VLS_32 = __VLS_31({ ...{}, class: ("text-white bg-rose-800 py-2 px-5 my-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("text-white bg-rose-800 py-2 px-5 my-3"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
(__VLS_ctx.props.errors.keterangan);
(__VLS_33.slots!).default;
}
// @ts-ignore
[props, props, props, props,];
}
{
const __VLS_34 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_35 = __VLS_elementAsFunctionalComponent(__VLS_34);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_36 = __VLS_35({ ...{}, class: ("flex flex-row gap-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_34, typeof __VLS_36> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-row gap-4"), });
const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36)!;
{
const __VLS_38 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_39 = __VLS_elementAsFunctionalComponent(__VLS_38);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_40 = __VLS_39({ ...{ onClick: {} as any, }, class: ((`btn-actions ${__VLS_ctx.form.type === 'menerima' ? 'bg-green-600' : 'bg-slate-600'} `)), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_38, typeof __VLS_40> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((`btn-actions ${__VLS_ctx.form.type === 'menerima' ? 'bg-green-600' : 'bg-slate-600'} `)), });
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40)!;
let __VLS_42 = { 'click': __VLS_pickEvent(__VLS_41.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_39, typeof __VLS_40>).onClick) };
__VLS_42 = {
click: (__VLS_ctx.menerimaListener)
};
(__VLS_41.slots!).default;
}
{
const __VLS_43 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_44 = __VLS_elementAsFunctionalComponent(__VLS_43);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_45 = __VLS_44({ ...{ onClick: {} as any, }, class: ((`btn-actions ${__VLS_ctx.form.type === 'membayar' ? 'bg-rose-600' : 'bg-slate-600'} `)), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_43, typeof __VLS_45> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((`btn-actions ${__VLS_ctx.form.type === 'membayar' ? 'bg-rose-600' : 'bg-slate-600'} `)), });
const __VLS_46 = __VLS_pickFunctionalComponentCtx(__VLS_43, __VLS_45)!;
let __VLS_47 = { 'click': __VLS_pickEvent(__VLS_46.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_44, typeof __VLS_45>).onClick) };
__VLS_47 = {
click: (__VLS_ctx.membayarListener)
};
(__VLS_46.slots!).default;
}
(__VLS_37.slots!).default;
}
if (__VLS_ctx.props.errors.type) {
{
const __VLS_48 = ({} as __VLS_IntrinsicElements)["h5"];
const __VLS_49 = __VLS_elementAsFunctionalComponent(__VLS_48);
({} as __VLS_IntrinsicElements).h5;
({} as __VLS_IntrinsicElements).h5;
const __VLS_50 = __VLS_49({ ...{}, class: ("text-white bg-rose-800 py-2 px-5 my-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_48, typeof __VLS_50> & Record<string, unknown>) => void)({ ...{}, class: ("text-white bg-rose-800 py-2 px-5 my-3"), });
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
(__VLS_ctx.props.errors.type);
(__VLS_51.slots!).default;
}
// @ts-ignore
[form, form, menerimaListener, form, form, membayarListener, props, props,];
}
(__VLS_8.slots!).default;
}
{
const __VLS_52 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_54 = __VLS_53({ ...{}, class: ("p-3 flex flex-col justify-center items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, class: ("p-3 flex flex-col justify-center items-center"), });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
{
const __VLS_56 = ({} as __VLS_IntrinsicElements)["h2"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
({} as __VLS_IntrinsicElements).h2;
({} as __VLS_IntrinsicElements).h2;
const __VLS_58 = __VLS_57({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
(__VLS_59.slots!).default;
}
{
const __VLS_60 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_62 = __VLS_61({ ...{ onClick: {} as any, }, class: ("btn-actions bg-blue-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("btn-actions bg-blue-600"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64 = { 'click': __VLS_pickEvent(__VLS_63.emit!, 'click' as const, ({} as __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_62>).onClick) };
__VLS_64 = {
click: $event => {
__VLS_ctx.submitData(__VLS_ctx.props.data[0].id);
}
};
(__VLS_63.slots!).default;
}
(__VLS_55.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[submitData, props,];
return __VLS_slots;
}

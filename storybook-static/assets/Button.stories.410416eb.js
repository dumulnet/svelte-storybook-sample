var r=Object.defineProperty;var t=(o,l)=>r(o,"name",{value:l,configurable:!0});import{B as e}from"./Button.e652e461.js";import"./index.daf5e614.js";const g={parameters:{storySource:{source:`import Button from './Button.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},secondary:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},large:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},small:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}}}}},title:"Example/Button",component:e,argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}}},n=t(o=>({Component:e,props:o,on:{click:o.onClick}}),"Template"),a=n.bind({});a.args={primary:!0,label:"Button"};const s=n.bind({});s.args={label:"Button"};const c=n.bind({});c.args={size:"large",label:"Button"};const i=n.bind({});i.args={size:"small",label:"Button"};const y=["Primary","Secondary","Large","Small"];export{c as Large,a as Primary,s as Secondary,i as Small,y as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories.410416eb.js.map

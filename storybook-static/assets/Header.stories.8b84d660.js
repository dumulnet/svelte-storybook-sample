var a=Object.defineProperty;var n=(o,r)=>a(o,"name",{value:r,configurable:!0});import{H as e}from"./Header.b47bf2a7.js";import"./index.daf5e614.js";import"./Button.e652e461.js";const u={title:"Example/Header",component:e,parameters:{storySource:{source:`import Header from './Header.svelte';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => ({
  Component: Header,
  props: args,
  on: {
    login: args.onLogin,
    logout: args.onLogout,
    createAccount: args.onCreateAccount,
  },
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:17},endLoc:{col:2,line:25},startBody:{col:17,line:17},endBody:{col:2,line:25}},"logged-out":{startLoc:{col:17,line:17},endLoc:{col:2,line:25},startBody:{col:17,line:17},endBody:{col:2,line:25}}}},layout:"fullscreen"},argTypes:{onLogin:{action:"onLogin"},onLogout:{action:"onLogout"},onCreateAccount:{action:"onCreateAccount"}}},t=n(o=>({Component:e,props:o,on:{login:o.onLogin,logout:o.onLogout,createAccount:o.onCreateAccount}}),"Template"),c=t.bind({});c.args={user:{name:"Jane Doe"}};const g=t.bind({});g.args={};const p=["LoggedIn","LoggedOut"];export{c as LoggedIn,g as LoggedOut,p as __namedExportsOrder,u as default};
//# sourceMappingURL=Header.stories.8b84d660.js.map

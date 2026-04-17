import{$l as e,Ao as t,Dc as n,Il as r,Ms as i,Oa as a,Os as o,Ou as s,Po as c,Ps as l,Qs as u,Tc as d,Ua as ee,Uc as f,Zo as p,_u as m,ac as h,bu as g,fo as _,go as te,ho as v,ic as y,jl as ne,os as b,pl as x,qs as S,ru as C,tc as w,ul as re,yc as T}from"./index-BphFrnNk.js";import{a as E}from"./index-C3_DpIF--JXuNe3mc.js";import{t as ie}from"./SwapController-Cmwfdhyy-DmxanfM5.js";var D={isUnsupportedChainView(){return u.state.view===`UnsupportedChain`||u.state.view===`SwitchNetwork`&&u.state.history.includes(`UnsupportedChain`)},async safeClose(){if(this.isUnsupportedChainView()){l.shake();return}if(await e.isSIWXCloseDisabled()){l.shake();return}(u.state.view===`DataCapture`||u.state.view===`DataCaptureOtpConfirm`)&&ne.disconnect(),l.close()}},ae=_`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`,oe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},O=class extends d{render(){return h`<slot></slot>`}};O.styles=[w,ae],O=oe([r(`wui-card`)],O);var se=_`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`,k=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ce={info:`info`,success:`checkmark`,warning:`warningCircle`,error:`warning`},A=class extends d{constructor(){super(...arguments),this.message=``,this.type=`info`}render(){return h`
      <wui-flex
        data-type=${T(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${ce[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){c.close()}};A.styles=[w,se],k([x()],A.prototype,`message`,void 0),k([x()],A.prototype,`type`,void 0),A=k([r(`wui-alertbar`)],A);var le=_`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ue={info:{backgroundColor:`fg-350`,iconColor:`fg-325`,icon:`info`},success:{backgroundColor:`success-glass-reown-020`,iconColor:`success-125`,icon:`checkmark`},warning:{backgroundColor:`warning-glass-reown-020`,iconColor:`warning-100`,icon:`warningCircle`},error:{backgroundColor:`error-glass-reown-020`,iconColor:`error-125`,icon:`warning`}},M=class extends d{constructor(){super(),this.unsubscribe=[],this.open=c.state.open,this.onOpen(!0),this.unsubscribe.push(c.subscribeKey(`open`,e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=c.state,n=ue[t];return h`
      <wui-alertbar
        message=${e}
        backgroundColor=${n?.backgroundColor}
        iconColor=${n?.iconColor}
        icon=${n?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:`scale(0.85)`},{opacity:1,transform:`scale(1)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.style.cssText=`pointer-events: auto`):e||(this.animate([{opacity:1,transform:`scale(1)`},{opacity:0,transform:`scale(0.85)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.style.cssText=`pointer-events: none`)}};M.styles=le,j([v()],M.prototype,`open`,void 0),M=j([r(`w3m-alertbar`)],M);var de=_`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fe={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},pe={lg:`lg`,md:`md`,sm:`sm`},P=class extends d{constructor(){super(...arguments),this.imageSrc=``,this.text=``,this.size=`lg`,this.type=`text-dropdown`,this.disabled=!1}render(){return h`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let e=fe[this.size];return this.text?h`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){return this.imageSrc?h`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:h` <wui-flex class="left-icon-container">
      <wui-icon size=${pe[this.size]} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};P.styles=[w,t,de],N([x()],P.prototype,`imageSrc`,void 0),N([x()],P.prototype,`text`,void 0),N([x()],P.prototype,`size`,void 0),N([x()],P.prototype,`type`,void 0),N([x({type:Boolean})],P.prototype,`disabled`,void 0),P=N([r(`wui-select`)],P);var me=_`
  wui-image {
    border-radius: ${({borderRadius:e})=>e.round};
  }

  .transfers-badge {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }
`,F=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},I=class extends d{constructor(){super(),this.unsubscribe=[],this.paymentAsset=E.state.paymentAsset,this.amount=E.state.amount,this.unsubscribe.push(E.subscribeKey(`paymentAsset`,e=>{this.paymentAsset=e}),E.subscribeKey(`amount`,e=>{this.amount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=a.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.paymentAsset.network);return h`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${[`1`,`2`,`1`,`1`]}
      class="transfers-badge"
    >
      <wui-image src=${T(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${e?.name??`Unknown`}
      </wui-text>
    </wui-flex>`}};I.styles=[me],F([x()],I.prototype,`paymentAsset`,void 0),F([x()],I.prototype,`amount`,void 0),I=F([r(`w3m-pay-header`)],I);var he=_`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]},
      slide-down-in 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]},
      slide-up-in 120ms forwards ${({easings:e})=>e[`ease-out-power-2`]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ge=[`SmartSessionList`],_e={PayWithExchange:C.tokens.theme.foregroundPrimary};function R(){let e=u.state.data?.connector?.name,t=u.state.data?.wallet?.name,n=u.state.data?.network?.name,r=t??e,i=S.getConnectors(),o=i.length===1&&i[0]?.id===`w3m-email`,s=a.getAccountData()?.socialProvider,c=s?s.charAt(0).toUpperCase()+s.slice(1):`Connect Social`;return{Connect:`Connect ${o?`Email`:``} Wallet`,Create:`Create Wallet`,ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:`All Wallets`,ApproveTransaction:`Approve Transaction`,BuyInProgress:`Buy`,UsageExceeded:`Usage Exceeded`,ConnectingExternal:r??`Connect Wallet`,ConnectingWalletConnect:r??`WalletConnect`,ConnectingWalletConnectBasic:`WalletConnect`,ConnectingSiwe:`Sign In`,Convert:`Convert`,ConvertSelectToken:`Select token`,ConvertPreview:`Preview Convert`,Downloads:r?`Get ${r}`:`Downloads`,EmailLogin:`Email Login`,EmailVerifyOtp:`Confirm Email`,EmailVerifyDevice:`Register Device`,GetWallet:`Get a Wallet`,Networks:`Choose Network`,OnRampProviders:`Choose Provider`,OnRampActivity:`Activity`,OnRampTokenSelect:`Select Token`,OnRampFiatSelect:`Select Currency`,Pay:`How you pay`,ProfileWallets:`Wallets`,SwitchNetwork:n??`Switch Network`,Transactions:`Activity`,UnsupportedChain:`Switch Network`,UpgradeEmailWallet:`Upgrade Your Wallet`,UpdateEmailWallet:`Edit Email`,UpdateEmailPrimaryOtp:`Confirm Current Email`,UpdateEmailSecondaryOtp:`Confirm New Email`,WhatIsABuy:`What is Buy?`,RegisterAccountName:`Choose Name`,RegisterAccountNameSuccess:``,WalletReceive:`Receive`,WalletCompatibleNetworks:`Compatible Networks`,Swap:`Swap`,SwapSelectToken:`Select Token`,SwapPreview:`Preview Swap`,WalletSend:`Send`,WalletSendPreview:`Review Send`,WalletSendSelectToken:`Select Token`,WalletSendConfirmed:`Confirmed`,WhatIsANetwork:`What is a network?`,WhatIsAWallet:`What is a Wallet?`,ConnectWallets:`Connect Wallet`,ConnectSocials:`All Socials`,ConnectingSocial:c,ConnectingMultiChain:`Select Chain`,ConnectingFarcaster:`Farcaster`,SwitchActiveChain:`Switch Chain`,SmartSessionCreated:void 0,SmartSessionList:`Smart Sessions`,SIWXSignMessage:`Sign In`,PayLoading:`Processing payment...`,PayQuote:`Payment Quote`,DataCapture:`Profile`,DataCaptureOtpConfirm:`Confirm Email`,FundWallet:`Fund Wallet`,PayWithExchange:`Deposit from Exchange`,PayWithExchangeSelectAsset:`Select Asset`,SmartAccountSettings:`Smart Account Settings`}}var z=class extends d{constructor(){super(),this.unsubscribe=[],this.heading=R()[u.state.view],this.network=a.state.activeCaipNetwork,this.networkImage=p.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.state.view,this.viewDirection=``,this.unsubscribe.push(ee.subscribeNetworkImages(()=>{this.networkImage=p.getNetworkImage(this.network)}),u.subscribeKey(`view`,e=>{setTimeout(()=>{this.view=e,this.heading=R()[e]},m.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),a.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=p.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=_e[u.state.view]??C.tokens.theme.backgroundPrimary;return this.style.setProperty(`--local-header-background-color`,e),h`
      <wui-flex
        .padding=${[`0`,`4`,`0`,`4`]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){g.sendEvent({type:`track`,event:`CLICK_WALLET_HELP`}),u.push(`WhatIsAWallet`)}async onClose(){await D.safeClose()}rightHeaderTemplate(){let e=i?.state?.features?.smartSessions;return u.state.view!==`Account`||!e?this.closeButtonTemplate():h`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>u.push(`SmartSessionList`)}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return h`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if(this.view===`PayQuote`)return h`<w3m-pay-header></w3m-pay-header>`;let e=ge.includes(this.view);return h`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?h`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:e}=u.state,t=e===`Connect`,n=i.state.enableEmbedded,r=e===`ApproveTransaction`,a=e===`ConnectingSiwe`,o=e===`Account`,s=i.state.enableNetworkSwitch,c=r||a||t&&n;return o&&s?h`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${T(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${T(this.networkImage)}
      ></wui-select>`:this.showBack&&!c?h`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:h`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(g.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),u.push(`Networks`))}isAllowedNetworkSwitch(){let e=a.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}onViewChange(){let{history:e}=u.state,t=m.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=m.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=u.state,t=this.shadowRoot?.querySelector(`#dynamic`);e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}onGoBack(){u.goBack()}};z.styles=he,L([v()],z.prototype,`heading`,void 0),L([v()],z.prototype,`network`,void 0),L([v()],z.prototype,`networkImage`,void 0),L([v()],z.prototype,`showBack`,void 0),L([v()],z.prototype,`prevHistoryLength`,void 0),L([v()],z.prototype,`view`,void 0),L([v()],z.prototype,`viewDirection`,void 0),z=L([r(`w3m-header`)],z);var ve=_`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`,B=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=class extends d{constructor(){super(...arguments),this.message=``,this.variant=`success`}render(){return h`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.variant===`loading`?h`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:h`<wui-icon-box
      size="md"
      color=${{success:`success`,error:`error`,warning:`warning`,info:`default`}[this.variant]}
      icon=${{success:`checkmark`,error:`warning`,warning:`warningCircle`,info:`info`}[this.variant]}
    ></wui-icon-box>`}};V.styles=[w,ve],B([x()],V.prototype,`message`,void 0),B([x()],V.prototype,`variant`,void 0),V=B([r(`wui-snackbar`)],V);var ye=s`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U=class extends d{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=n.state.open,this.unsubscribe.push(n.subscribeKey(`open`,e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=n.state;return h` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:`translateX(-50%) scale(0.85)`},{opacity:1,transform:`translateX(-50%) scale(1)`}],{duration:150,fill:`forwards`,easing:`ease`}),this.timeout&&clearTimeout(this.timeout),n.state.autoClose&&(this.timeout=setTimeout(()=>n.hide(),2500))):this.animate([{opacity:1,transform:`translateX(-50%) scale(1)`},{opacity:0,transform:`translateX(-50%) scale(0.85)`}],{duration:150,fill:`forwards`,easing:`ease`})}};U.styles=ye,H([v()],U.prototype,`open`,void 0),U=H([r(`w3m-snackbar`)],U);var be=_`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e[`ease-out-power-2`]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e[`ease-out-power-2`]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e[`ease-out-power-2`]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`,W=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},G=`scroll-lock`,xe={PayWithExchange:`0`,PayWithExchangeSelectAsset:`0`,Pay:`0`,PayQuote:`0`,PayLoading:`0`},K=class extends d{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=i.state.enableEmbedded,this.open=l.state.open,this.caipAddress=a.state.activeCaipAddress,this.caipNetwork=a.state.activeCaipNetwork,this.shake=l.state.shake,this.filterByNamespace=S.state.filterByNamespace,this.padding=C.spacing[1],this.mobileFullScreen=i.state.enableMobileFullScreen,this.initializeTheming(),f.prefetchAnalyticsConfig(),this.unsubscribe.push(l.subscribeKey(`open`,e=>e?this.onOpen():this.onClose()),l.subscribeKey(`shake`,e=>this.shake=e),a.subscribeKey(`activeCaipNetwork`,e=>this.onNewNetwork(e)),a.subscribeKey(`activeCaipAddress`,e=>this.onNewAddress(e)),i.subscribeKey(`enableEmbedded`,e=>this.enableEmbedded=e),S.subscribeKey(`filterByNamespace`,e=>{var t;this.filterByNamespace!==e&&!((t=a.getAccountData(e))!=null&&t.caipAddress)&&(f.fetchRecommendedWallets(),this.filterByNamespace=e)}),u.subscribeKey(`view`,()=>{this.dataset.border=b.hasFooter()?`true`:`false`,this.padding=xe[u.state.view]??C.spacing[1]}))}firstUpdated(){if(this.dataset.border=b.hasFooter()?`true`:`false`,this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.caipAddress){if(this.enableEmbedded){l.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty(`--local-modal-padding`,this.padding),this.enableEmbedded?h`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?h`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return h` <wui-card
      shake="${this.shake}"
      data-embedded="${T(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await D.safeClose()}initializeTheming(){let{themeVariables:e,themeMode:t}=re.state;o(e,y.getColorTheme(t))}onClose(){this.open=!1,this.classList.remove(`open`),this.onScrollUnlock(),n.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add(`open`),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement(`style`);e.dataset.w3m=G,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${G}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector(`wui-card`);e?.focus(),window.addEventListener(`keydown`,t=>{if(t.key===`Escape`)this.handleClose();else if(t.key===`Tab`){let{tagName:n}=t.target;n&&!n.includes(`W3M-`)&&!n.includes(`WUI-`)&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(t){let n=a.state.isSwitchingNamespace,r=u.state.view===`ProfileWallets`;!t&&!n&&!r&&l.close(),await e.initializeIfEnabled(t),this.caipAddress=t,a.setIsSwitchingNamespace(!1)}onNewNetwork(e){let t=(this.caipNetwork?.caipNetworkId)?.toString()!==(e?.caipNetworkId)?.toString(),n=u.state.view===`UnsupportedChain`,r=l.state.open,i=!1;this.enableEmbedded&&u.state.view===`SwitchNetwork`&&(i=!0),t&&ie.resetState(),r&&n&&(i=!0),i&&u.state.view!==`SIWXSignMessage`&&u.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||=(f.prefetch(),f.fetchWalletsByPage({page:1}),!0)}};K.styles=be,W([x({type:Boolean})],K.prototype,`enableEmbedded`,void 0),W([v()],K.prototype,`open`,void 0),W([v()],K.prototype,`caipAddress`,void 0),W([v()],K.prototype,`caipNetwork`,void 0),W([v()],K.prototype,`shake`,void 0),W([v()],K.prototype,`filterByNamespace`,void 0),W([v()],K.prototype,`padding`,void 0),W([v()],K.prototype,`mobileFullScreen`,void 0);var q=class extends K{};q=W([r(`w3m-modal`)],q);var J=class extends K{};J=W([r(`appkit-modal`)],J);var Se=_`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({colors:e})=>e.semanticError010};
  }
`,Ce=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=class extends d{constructor(){super()}render(){return h`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${[`1`,`3`,`4`,`3`]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){u.goBack()}};Y.styles=Se,Y=Ce([r(`w3m-usage-exceeded-view`)],Y);var we=_`
  :host {
    width: 100%;
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Z=class extends d{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc=``,this.name=``,this.size=`md`,this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor=`accent-100`,this.rdnsId=``,this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has(`name`)||e.has(`imageSrc`)||e.has(`walletRank`))&&(this.hasImpressionSent=!1),e.has(`walletRank`)&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&=(this.intersectionObserver.disconnect(),void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&g.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(te.state.adapters).length>1?this.namespaces:[]}render(){return h`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${T(this.imageSrc)}
        name=${this.name}
        size=${T(this.size)}
        tagLabel=${T(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};Z.styles=we,X([x({type:Array})],Z.prototype,`walletImages`,void 0),X([x()],Z.prototype,`imageSrc`,void 0),X([x()],Z.prototype,`name`,void 0),X([x()],Z.prototype,`size`,void 0),X([x()],Z.prototype,`tagLabel`,void 0),X([x()],Z.prototype,`tagVariant`,void 0),X([x()],Z.prototype,`walletIcon`,void 0),X([x()],Z.prototype,`tabIdx`,void 0),X([x({type:Boolean})],Z.prototype,`disabled`,void 0),X([x({type:Boolean})],Z.prototype,`showAllWallets`,void 0),X([x({type:Boolean})],Z.prototype,`loading`,void 0),X([x({type:String})],Z.prototype,`loadingSpinnerColor`,void 0),X([x()],Z.prototype,`rdnsId`,void 0),X([x()],Z.prototype,`displayIndex`,void 0),X([x()],Z.prototype,`walletRank`,void 0),X([x({type:Array})],Z.prototype,`namespaces`,void 0),Z=X([r(`w3m-list-wallet`)],Z);var Te=_`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e[`ease-out-power-2`]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`,Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ee=60,$=class extends d{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration=`0.15s`,this.transitionFunction=``,this.history=``,this.view=``,this.setView=void 0,this.viewDirection=``,this.historyState=``,this.previousHeight=`0px`,this.mobileFullScreen=i.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has(`history`)){let e=this.history;this.historyState!==``&&this.historyState!==e&&this.onViewChange(e)}e.has(`transitionDuration`)&&this.style.setProperty(`--local-duration`,this.transitionDuration),e.has(`transitionFunction`)&&this.style.setProperty(`--local-transition`,this.transitionFunction)}firstUpdated(){var e;this.transitionFunction&&this.style.setProperty(`--local-transition`,this.transitionFunction),this.style.setProperty(`--local-duration`,this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height,n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--apkt-footer-height`)||`0`);this.mobileFullScreen?(e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-n,this.style.setProperty(`--local-border-bottom-radius`,`0px`)):(e+=n,this.style.setProperty(`--local-border-bottom-radius`,n?`var(--apkt-borderRadius-5)`:`0px`)),this.style.setProperty(`--local-container-height`,`${e}px`),this.previousHeight!==`0px`&&this.style.setProperty(`--local-duration-height`,this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener(`resize`,this.onViewportResize),(e=window.visualViewport)==null||e.addEventListener(`resize`,this.onViewportResize)}disconnectedCallback(){var e;let t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener(`resize`,this.onViewportResize),(e=window.visualViewport)==null||e.removeEventListener(`resize`,this.onViewportResize)}render(){return h`
      <div class="container" data-mobile-fullscreen="${T(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${T(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){let t=e.split(`,`).filter(Boolean),n=this.historyState.split(`,`).filter(Boolean),r=n.length,i=t.length,a=t[t.length-1]||``,o=y.cssDurationToNumber(this.transitionDuration),s=``;i>r?s=`next`:i<r?s=`prev`:i===r&&t[i-1]!==n[r-1]&&(s=`next`),this.viewDirection=`${s}-${a}`,setTimeout(()=>{var t;this.historyState=e,(t=this.setView)==null||t.call(this,a)},o),setTimeout(()=>{this.viewDirection=``},o*2)}getWrapper(){return this.shadowRoot?.querySelector(`div.page`)}updateContainerHeight(){let e=this.getWrapper();if(!e)return;let t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue(`--apkt-footer-height`)||`0`),n=0;this.mobileFullScreen?(n=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty(`--local-border-bottom-radius`,`0px`)):(n=e.getBoundingClientRect().height+t,this.style.setProperty(`--local-border-bottom-radius`,t?`var(--apkt-borderRadius-5)`:`0px`)),this.style.setProperty(`--local-container-height`,`${n}px`),this.previousHeight!==`0px`&&this.style.setProperty(`--local-duration-height`,this.transitionDuration),this.previousHeight=`${n}px`}getHeaderHeight(){return Ee}};$.styles=[Te],Q([x({type:String})],$.prototype,`transitionDuration`,void 0),Q([x({type:String})],$.prototype,`transitionFunction`,void 0),Q([x({type:String})],$.prototype,`history`,void 0),Q([x({type:String})],$.prototype,`view`,void 0),Q([x({attribute:!1})],$.prototype,`setView`,void 0),Q([v()],$.prototype,`viewDirection`,void 0),Q([v()],$.prototype,`historyState`,void 0),Q([v()],$.prototype,`previousHeight`,void 0),Q([v()],$.prototype,`mobileFullScreen`,void 0),$=Q([r(`w3m-router-container`)],$);export{J as AppKitModal,Z as W3mListWallet,q as W3mModal,K as W3mModalBase,$ as W3mRouterContainer,Y as W3mUsageExceededView};
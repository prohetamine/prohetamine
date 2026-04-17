import{$n as e,Bn as t,Dn as n,It as r,Ln as i,Qr as a,Un as o,Wn as s,Yr as c,Z as l,et as u,fr as d,hn as f,ht as p,ir as m,p as h,ur as g,xi as _}from"./index-BphFrnNk.js";var v=l`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    border: none;
    padding: ${({spacing:e})=>e[3]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[`01`]};
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`,y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},b=class extends g{constructor(){super(...arguments),this.networkImages=[``],this.text=``}render(){return s`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){return s` <wui-flex class="networks">
      ${this.networkImages.slice(0,5)?.map(e=>s` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};b.styles=[t,p,v],y([a({type:Array})],b.prototype,`networkImages`,void 0),y([a()],b.prototype,`text`,void 0),b=y([_(`wui-compatible-network`)],b);var x=l`
  wui-compatible-network {
    margin-top: ${({spacing:e})=>e[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`,S=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},C=class extends g{constructor(){super(),this.unsubscribe=[],this.address=h.getAccountData()?.address,this.profileName=h.getAccountData()?.profileName,this.network=h.state.activeCaipNetwork,this.unsubscribe.push(h.subscribeChainProp(`accountState`,e=>{e?(this.address=e.address,this.profileName=e.profileName):d.showError(`Account not found`)}),h.subscribeKey(`activeCaipNetwork`,e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error(`w3m-wallet-receive-view: No account provided`);let e=r.getNetworkImage(this.network);return s` <wui-flex
      flexDirection="column"
      .padding=${[`0`,`4`,`4`,`4`]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${o.getTruncateString({string:this.profileName||this.address||``,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?`end`:`middle`})}
        icon="copy"
        size="sm"
        imageSrc=${e||``}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${[`4`,`0`,`0`,`0`]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${c.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${m(c.state.themeVariables[`--apkt-qr-color`]??c.state.themeVariables[`--w3m-qr-color`])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let t=h.getAllRequestedCaipNetworks(),n=h.checkIfSmartAccountEnabled(),i=h.state.activeCaipNetwork,a=t.filter(e=>e?.chainNamespace===i?.chainNamespace);if(e(i?.chainNamespace)===f.ACCOUNT_TYPES.SMART_ACCOUNT&&n)return i?s`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[r.getNetworkImage(i)??``]}
      ></wui-compatible-network>`:null;let o=((a?.filter(e=>e?.assets?.imageId))?.slice(0,5)).map(r.getNetworkImage).filter(Boolean);return s`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${o}
    ></wui-compatible-network>`}onReceiveClick(){i.push(`WalletCompatibleNetworks`)}onCopyClick(){try{this.address&&(n.copyToClopboard(this.address),d.showSuccess(`Address copied`))}catch{d.showError(`Failed to copy`)}}};C.styles=x,S([u()],C.prototype,`address`,void 0),S([u()],C.prototype,`profileName`,void 0),S([u()],C.prototype,`network`,void 0),C=S([_(`w3m-wallet-receive-view`)],C);export{C as W3mWalletReceiveView};
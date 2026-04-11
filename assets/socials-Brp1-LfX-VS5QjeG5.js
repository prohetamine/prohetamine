import{$n as e,Di as t,Et as n,In as r,Ji as i,Li as a,Mi as o,Mr as s,Ni as c,On as l,Qi as u,S as d,Tr as f,Un as p,Ut as m,Yn as h,_i as g,ei as _,gr as v,mr as y,oa as b,pr as x,st as S,v as C,wi as w,zn as T}from"./index-CYOgJHgk.js";var E=e`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,D=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},O=class extends y{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.remoteFeatures=w.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=s.state.plan.hasExceededUsageLimit,this.unsubscribe.push(r.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),w.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[],t=!!this.authConnector,n=e?.length,r=p.state.view===`ConnectSocials`;return(!t||!n)&&!r?null:(r&&!n&&(e=l.DEFAULT_SOCIALS),h` <wui-flex flexDirection="column" gap="2">
      ${e.map(e=>h`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){if(this.hasExceededUsageLimit){p.push(`UsageExceeded`);return}e&&await T(e)}async handlePwaFrameLoad(){if(f.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof x&&await this.authConnector.provider.init()}catch(e){n.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}};O.styles=E,D([m()],O.prototype,`tabIdx`,void 0),D([S()],O.prototype,`connectors`,void 0),D([S()],O.prototype,`authConnector`,void 0),D([S()],O.prototype,`remoteFeatures`,void 0),D([S()],O.prototype,`isPwaLoading`,void 0),D([S()],O.prototype,`hasExceededUsageLimit`,void 0),O=D([g(`w3m-social-login-list`)],O);var k=e`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=class extends y{constructor(){super(),this.unsubscribe=[],this.checked=d.state.isLegalCheckboxChecked,this.unsubscribe.push(d.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.state,n=w.state.features?.legalCheckbox,r=!!(e||t)&&!!n&&!this.checked,i=r?-1:void 0;return h`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="01"
        class=${b(r?`disabled`:void 0)}
      >
        <w3m-social-login-list tabIdx=${b(i)}></w3m-social-login-list>
      </wui-flex>
    `}};j.styles=k,A([S()],j.prototype,`checked`,void 0),j=A([g(`w3m-connect-socials-view`)],j);var M=e`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e[`ease-out-power-2`]}
      ${({durations:e})=>e.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e[`ease-out-power-2`]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends y{constructor(){super(),this.unsubscribe=[],this.socialProvider=C.getAccountData()?.socialProvider,this.socialWindow=C.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message=`Connect in the provider window`,this.remoteFeatures=w.state.remoteFeatures,this.address=C.getAccountData()?.address,this.connectionsByNamespace=a.getConnections(C.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=r.getAuthConnector(),this.handleSocialConnection=async e=>{var t;if((t=e.data)!=null&&t.resultUri)if(e.origin===u.SECURE_SITE_ORIGIN){window.removeEventListener(`message`,this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;let t=this.parseURLError(e.data.resultUri);if(t){this.handleSocialError(t);return}this.closeSocialWindow(),this.updateMessage();let n=e.data.resultUri;this.socialProvider&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}}),await a.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:n},this.authConnector.chain),this.socialProvider&&(o.setConnectedSocialProvider(this.socialProvider),i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:f.parseError(e)}})}}else p.goBack(),v.showError(`Untrusted Origin`),this.socialProvider&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:`Untrusted Origin`}})},c.EmbeddedWalletAbortController.signal.addEventListener(`abort`,()=>{this.closeSocialWindow()}),this.unsubscribe.push(C.subscribeChainProp(`accountState`,e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){let n=this.remoteFeatures?.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&n?(p.replace(`ProfileWallets`),v.showSuccess(`New Wallet Added`),this.address=e.address):(t.state.open||w.state.enableEmbedded)&&t.close())}}),w.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener(`message`,this.handleSocialConnection,!1),!C.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return h`
      <wui-flex
        data-error=${b(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${b(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??`Social`}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?`error`:`secondary`}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=_.state.themeVariables[`--w3m-border-radius-master`];return h`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}parseURLError(e){try{let t=e.indexOf(`error=`);return t===-1?null:e.substring(t+6)}catch{return null}}connectSocial(){let e=setInterval(()=>{var t;(t=this.socialWindow)!=null&&t.closed&&(!this.connecting&&p.state.view===`ConnectingSocial`&&p.goBack(),clearInterval(e))},1e3);window.addEventListener(`message`,this.handleSocialConnection,!1)}updateMessage(){this.error?this.message=`Something went wrong`:this.connecting?this.message=`Retrieving user data`:this.message=`Connect in the provider window`}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),C.setAccountProp(`socialWindow`,void 0,C.state.activeChain))}};P.styles=M,N([S()],P.prototype,`socialProvider`,void 0),N([S()],P.prototype,`socialWindow`,void 0),N([S()],P.prototype,`error`,void 0),N([S()],P.prototype,`connecting`,void 0),N([S()],P.prototype,`message`,void 0),N([S()],P.prototype,`remoteFeatures`,void 0),P=N([g(`w3m-connecting-social-view`)],P);var F=e`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends y{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=C.getAccountData()?.socialProvider,this.uri=C.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=w.state.remoteFeatures,this.authConnector=r.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(C.subscribeChainProp(`accountState`,e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),w.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),window.addEventListener(`resize`,this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener(`resize`,this.forceUpdate),!C.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),h`${this.platformTemplate()}`}platformTemplate(){return f.isMobile()?h`${this.mobileTemplate()}`:h`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?h`${this.loadingTemplate()}`:h`${this.qrTemplate()}`}qrTemplate(){return h` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`0`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return h`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`5`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return h` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`10`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=_.state.themeVariables[`--w3m-border-radius-master`];return h`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(o.setConnectedSocialProvider(this.socialProvider),i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}})),this.loading=!0;let e=a.getConnections(this.authConnector.chain).length>0;await a.connectExternal(this.authConnector,this.authConnector.chain);let n=this.remoteFeatures?.multiWallet;this.socialProvider&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}),this.loading=!1,e&&n?(p.replace(`ProfileWallets`),v.showSuccess(`New Wallet Added`)):t.close()}catch(e){this.socialProvider&&i.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:f.parseError(e)}}),p.goBack(),v.showError(e)}}mobileLinkTemplate(){return h`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&f.openHref(this.uri,`_blank`)}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=_.state.themeVariables[`--apkt-qr-color`]??_.state.themeVariables[`--w3m-qr-color`];return h` <wui-qr-code
      size=${e}
      theme=${_.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${b(t)}
    ></wui-qr-code>`}copyTemplate(){return h`<wui-button
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(f.copyToClopboard(this.uri),v.showSuccess(`Link copied`))}catch{v.showError(`Failed to copy`)}}};L.styles=F,I([S()],L.prototype,`socialProvider`,void 0),I([S()],L.prototype,`uri`,void 0),I([S()],L.prototype,`ready`,void 0),I([S()],L.prototype,`loading`,void 0),I([S()],L.prototype,`remoteFeatures`,void 0),L=I([g(`w3m-connecting-farcaster-view`)],L);export{j as W3mConnectSocialsView,L as W3mConnectingFarcasterView,P as W3mConnectingSocialView};
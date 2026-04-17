import{Kn as e,Mi as t,Oi as n,Or as r,Pi as i,Pn as a,Vt as o,Wi as s,X as c,Y as l,Zr as u,_n as d,da as f,dr as p,ei as m,et as h,gi as g,ia as _,ir as v,kn as y,lr as b,m as x,ta as S,vt as C,yi as w,zn as T}from"./index-7_Igbst-.js";var E=c`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,D=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},O=class extends b{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.remoteFeatures=d.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=r.state.plan.hasExceededUsageLimit,this.unsubscribe.push(a.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),d.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let t=this.remoteFeatures?.socials||[],n=!!this.authConnector,r=t?.length,i=T.state.view===`ConnectSocials`;return(!n||!r)&&!i?null:(i&&!r&&(t=f.DEFAULT_SOCIALS),e` <wui-flex flexDirection="column" gap="2">
      ${t.map(t=>e`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            data-testid=${`social-selector-${t}`}
            name=${t}
            logo=${t}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){if(this.hasExceededUsageLimit){T.push(`UsageExceeded`);return}e&&await o(e)}async handlePwaFrameLoad(){if(y.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof s&&await this.authConnector.provider.init()}catch(e){C.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}};O.styles=E,D([m()],O.prototype,`tabIdx`,void 0),D([h()],O.prototype,`connectors`,void 0),D([h()],O.prototype,`authConnector`,void 0),D([h()],O.prototype,`remoteFeatures`,void 0),D([h()],O.prototype,`isPwaLoading`,void 0),D([h()],O.prototype,`hasExceededUsageLimit`,void 0),O=D([w(`w3m-social-login-list`)],O);var k=c`
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
`,A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=class extends b{constructor(){super(),this.unsubscribe=[],this.checked=l.state.isLegalCheckboxChecked,this.unsubscribe.push(l.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:t,privacyPolicyUrl:n}=d.state,r=d.state.features?.legalCheckbox,i=!!(t||n)&&!!r&&!this.checked,a=i?-1:void 0;return e`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="01"
        class=${v(i?`disabled`:void 0)}
      >
        <w3m-social-login-list tabIdx=${v(a)}></w3m-social-login-list>
      </wui-flex>
    `}};j.styles=k,A([h()],j.prototype,`checked`,void 0),j=A([w(`w3m-connect-socials-view`)],j);var M=c`
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
`,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends b{constructor(){super(),this.unsubscribe=[],this.socialProvider=x.getAccountData()?.socialProvider,this.socialWindow=x.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message=`Connect in the provider window`,this.remoteFeatures=d.state.remoteFeatures,this.address=x.getAccountData()?.address,this.connectionsByNamespace=g.getConnections(x.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=a.getAuthConnector(),this.handleSocialConnection=async e=>{var n;if((n=e.data)!=null&&n.resultUri)if(e.origin===S.SECURE_SITE_ORIGIN){window.removeEventListener(`message`,this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;let n=this.parseURLError(e.data.resultUri);if(n){this.handleSocialError(n);return}this.closeSocialWindow(),this.updateMessage();let r=e.data.resultUri;this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}}),await g.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:r},this.authConnector.chain),this.socialProvider&&(t.setConnectedSocialProvider(this.socialProvider),_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:y.parseError(e)}})}}else T.goBack(),p.showError(`Untrusted Origin`),this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:`Untrusted Origin`}})},i.EmbeddedWalletAbortController.signal.addEventListener(`abort`,()=>{this.closeSocialWindow()}),this.unsubscribe.push(x.subscribeChainProp(`accountState`,e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){let t=this.remoteFeatures?.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&t?(T.replace(`ProfileWallets`),p.showSuccess(`New Wallet Added`),this.address=e.address):(n.state.open||d.state.enableEmbedded)&&n.close())}}),d.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener(`message`,this.handleSocialConnection,!1),!x.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return e`
      <wui-flex
        data-error=${v(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${v(this.socialProvider)}></wui-logo>
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
    `}loaderTemplate(){let t=u.state.themeVariables[`--w3m-border-radius-master`];return e`<wui-loading-thumbnail radius=${(t?parseInt(t.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}parseURLError(e){try{let t=e.indexOf(`error=`);return t===-1?null:e.substring(t+6)}catch{return null}}connectSocial(){let e=setInterval(()=>{var t;(t=this.socialWindow)!=null&&t.closed&&(!this.connecting&&T.state.view===`ConnectingSocial`&&T.goBack(),clearInterval(e))},1e3);window.addEventListener(`message`,this.handleSocialConnection,!1)}updateMessage(){this.error?this.message=`Something went wrong`:this.connecting?this.message=`Retrieving user data`:this.message=`Connect in the provider window`}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),x.setAccountProp(`socialWindow`,void 0,x.state.activeChain))}};P.styles=M,N([h()],P.prototype,`socialProvider`,void 0),N([h()],P.prototype,`socialWindow`,void 0),N([h()],P.prototype,`error`,void 0),N([h()],P.prototype,`connecting`,void 0),N([h()],P.prototype,`message`,void 0),N([h()],P.prototype,`remoteFeatures`,void 0),P=N([w(`w3m-connecting-social-view`)],P);var F=c`
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
`,I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends b{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=x.getAccountData()?.socialProvider,this.uri=x.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=d.state.remoteFeatures,this.authConnector=a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(x.subscribeChainProp(`accountState`,e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),d.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),window.addEventListener(`resize`,this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener(`resize`,this.forceUpdate),!x.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),e`${this.platformTemplate()}`}platformTemplate(){return y.isMobile()?e`${this.mobileTemplate()}`:e`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?e`${this.loadingTemplate()}`:e`${this.qrTemplate()}`}qrTemplate(){return e` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`0`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return e`
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
    `}mobileTemplate(){return e` <wui-flex
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
    </wui-flex>`}loaderTemplate(){let t=u.state.themeVariables[`--w3m-border-radius-master`];return e`<wui-loading-thumbnail radius=${(t?parseInt(t.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(t.setConnectedSocialProvider(this.socialProvider),_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}})),this.loading=!0;let e=g.getConnections(this.authConnector.chain).length>0;await g.connectExternal(this.authConnector,this.authConnector.chain);let r=this.remoteFeatures?.multiWallet;this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}),this.loading=!1,e&&r?(T.replace(`ProfileWallets`),p.showSuccess(`New Wallet Added`)):n.close()}catch(e){this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:y.parseError(e)}}),T.goBack(),p.showError(e)}}mobileLinkTemplate(){return e`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&y.openHref(this.uri,`_blank`)}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let t=this.getBoundingClientRect().width-40,n=u.state.themeVariables[`--apkt-qr-color`]??u.state.themeVariables[`--w3m-qr-color`];return e` <wui-qr-code
      size=${t}
      theme=${u.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${v(n)}
    ></wui-qr-code>`}copyTemplate(){return e`<wui-button
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(y.copyToClopboard(this.uri),p.showSuccess(`Link copied`))}catch{p.showError(`Failed to copy`)}}};L.styles=F,I([h()],L.prototype,`socialProvider`,void 0),I([h()],L.prototype,`uri`,void 0),I([h()],L.prototype,`ready`,void 0),I([h()],L.prototype,`loading`,void 0),I([h()],L.prototype,`remoteFeatures`,void 0),L=I([w(`w3m-connecting-farcaster-view`)],L);export{j as W3mConnectSocialsView,L as W3mConnectingFarcasterView,P as W3mConnectingSocialView};
import{$n as e,At as t,Bn as n,Cn as r,Dn as i,Gt as a,Ln as o,Mn as s,Qr as c,U as l,Wi as u,Wn as d,Yr as f,Z as p,_n as m,aa as h,er as g,et as _,fr as v,gi as ee,hn as y,ht as b,ir as x,p as S,pa as C,pr as w,pt as T,tr as te,ur as E,xi as D,yn as O,z as k}from"./index-BphFrnNk.js";var A=C`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=600,N=360,P=64,F=class extends E{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById(`w3m-iframe`),this.ready=!1,this.unsubscribe.push(O.subscribeKey(`open`,e=>{e||this.onHideIframe()}),O.subscribeKey(`shake`,e=>{e?this.iframe.style.animation=`w3m-shake 500ms var(--apkt-easings-ease-out-power-2)`:this.iframe.style.animation=`none`}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(e=>e()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display=`block`;let e=(this==null?void 0:this.renderRoot)?.querySelector(`div`);this.bodyObserver=new ResizeObserver(t=>{let n=(t?.[0]?.contentBoxSize)?.[0]?.inlineSize;this.iframe.style.height=`${M}px`,e.style.height=`${M}px`,m.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():n&&n<=430?(this.iframe.style.width=`100%`,this.iframe.style.left=`0px`,this.iframe.style.bottom=`0px`,this.iframe.style.top=`unset`,this.onShowIframe()):(this.iframe.style.width=`${N}px`,this.iframe.style.left=`calc(50% - ${N/2}px)`,this.iframe.style.top=`calc(50% - ${M/2}px + ${P/2}px)`,this.iframe.style.bottom=`unset`,this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return d`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?`w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)`:`w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)`}onHideIframe(){this.iframe.style.display=`none`,this.iframe.style.animation=`w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)`}async syncTheme(){let e=s.getAuthConnector();if(e){let t=f.getSnapshot().themeMode,n=f.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:k(n,t)})}}async updateFrameSizeForEmbeddedMode(){let e=(this==null?void 0:this.renderRoot)?.querySelector(`div`);await new Promise(e=>{setTimeout(e,300)});let t=this.getBoundingClientRect();e.style.width=`100%`,this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top}px`,this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height}px`,this.onShowIframe()}};F.styles=A,j([_()],F.prototype,`ready`,void 0),F=j([D(`w3m-approve-transaction-view`)],F);var I=p`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R={sm:`md-regular`,md:`lg-regular`,lg:`lg-regular`},z={success:`sealCheck`,error:`warning`,warning:`exclamationCircle`},B=class extends E{constructor(){super(...arguments),this.type=`success`,this.size=`md`,this.imageSrc=void 0,this.disabled=!1,this.href=``,this.text=void 0}render(){return d`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?`disabled`:``}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${R[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?d`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:d`<wui-icon
      name=${z[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};B.styles=[n,b,I],L([c()],B.prototype,`type`,void 0),L([c()],B.prototype,`size`,void 0),L([c()],B.prototype,`imageSrc`,void 0),L([c({type:Boolean})],B.prototype,`disabled`,void 0),L([c()],B.prototype,`href`,void 0),L([c()],B.prototype,`text`,void 0),B=L([D(`wui-semantic-chip`)],B);var V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends E{render(){return d`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${l.SECURE_SITE_DASHBOARD}
          href=${l.SECURE_SITE_DASHBOARD}
          imageSrc=${l.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};H=V([D(`w3m-upgrade-wallet-view`)],H);var U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=class extends E{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text=``,this.network=S.state.activeCaipNetwork}render(){return d`
      <wui-flex flexDirection="column" gap="2" .padding=${[`6`,`4`,`3`,`4`]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return d`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?`arrowTop`:`arrowBottom`}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?`7`:`6`}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return(t.get(`dapp_smart_account_version`)||`v6`)===`v6`}toggleSmartAccountVersion(){var e;t.set(`dapp_smart_account_version`,this.isV6()?`v7`:`v6`),typeof window<`u`&&((e=window==null?void 0:window.location)==null||e.reload())}togglePreferredAccountTypeTemplate(){let t=this.network?.chainNamespace,n=S.checkIfSmartAccountEnabled(),i=s.getConnectorId(t);return!s.getAuthConnector()||i!==r.CONNECTOR_ID.AUTH||!n?null:(this.switched||(this.text=e(t)===y.ACCOUNT_TYPES.SMART_ACCOUNT?`Switch to your EOA`:`Switch to your Smart Account`),d`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `)}async changePreferredAccountType(){let t=this.network?.chainNamespace,n=S.checkIfSmartAccountEnabled(),r=e(t)===y.ACCOUNT_TYPES.SMART_ACCOUNT||!n?y.ACCOUNT_TYPES.EOA:y.ACCOUNT_TYPES.SMART_ACCOUNT;s.getAuthConnector()&&(this.loading=!0,await ee.setPreferredAccountType(r,t),this.text=r===y.ACCOUNT_TYPES.SMART_ACCOUNT?`Switch to your EOA`:`Switch to your Smart Account`,this.switched=!0,g.resetSend(),this.loading=!1,this.requestUpdate())}};U([_()],W.prototype,`loading`,void 0),U([_()],W.prototype,`switched`,void 0),U([_()],W.prototype,`text`,void 0),U([_()],W.prototype,`network`,void 0),W=U([D(`w3m-smart-account-settings-view`)],W);var G=p`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,K=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends E{constructor(){super(...arguments),this.name=``,this.registered=!1,this.loading=!1,this.disabled=!1}render(){return d`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?d`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?d`<wui-tag variant="info" size="sm">Registered</wui-tag>`:d`<wui-tag variant="success" size="sm">Available</wui-tag>`}};q.styles=[n,b,G],K([c()],q.prototype,`name`,void 0),K([c({type:Boolean})],q.prototype,`registered`,void 0),K([c({type:Boolean})],q.prototype,`loading`,void 0),K([c({type:Boolean})],q.prototype,`disabled`,void 0),q=K([D(`wui-account-name-suggestion-item`)],q);var J=p`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`,Y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},X=class extends E{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return d`
      <wui-input-text
        value=${x(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||``}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};X.styles=[n,J],Y([c()],X.prototype,`errorMessage`,void 0),Y([c({type:Boolean})],X.prototype,`disabled`,void 0),Y([c()],X.prototype,`value`,void 0),Y([c({type:Boolean})],X.prototype,`loading`,void 0),Y([c({attribute:!1})],X.prototype,`onKeyDown`,void 0),X=Y([D(`wui-ens-input`)],X);var ne=p`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`,Z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Q=class extends E{constructor(){super(),this.formRef=te(),this.usubscribe=[],this.name=``,this.error=``,this.loading=T.state.loading,this.suggestions=T.state.suggestions,this.profileName=S.getAccountData()?.profileName,this.onDebouncedNameInputChange=i.debounce(e=>{e.length<4?this.error=`Name must be at least 4 characters long`:a.isValidReownName(e)?(this.error=``,T.getSuggestions(e)):this.error=`The value is not a valid username`}),this.usubscribe.push(T.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),S.subscribeChainProp(`accountState`,e=>{this.profileName=e?.profileName,e!=null&&e.profileName&&(this.error=`You already own a name`)}))}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener(`keydown`,this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),(e=this.formRef.value)==null||e.removeEventListener(`keydown`,this.onEnterKey.bind(this))}render(){return d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${[`1`,`3`,`4`,`3`]}
      >
        <form ${w(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let e=this.suggestions.find(e=>e.name?.split(`.`)?.[0]===this.name&&e.registered);if(this.loading)return d`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let t=`${this.name}${r.WC_NAME_SUFFIX}`;return d`
      <wui-icon-link
        ?disabled=${!!e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?`default`:`accent-primary`}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){let t=a.validateReownName(e.detail||``);this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){e.key.length===1&&!a.isValidReownName(e.key)&&e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:d`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(e=>d`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(e){let t=e.split(`.`)?.[0],n=this.suggestions.find(e=>e.name?.split(`.`)?.[0]===t&&e.registered);return!this.loading&&!this.error&&!this.profileName&&t&&T.validateName(t)&&!n}async onSubmitName(t){try{if(!this.isAllowedToSubmit(t))return;h.sendEvent({type:`track`,event:`REGISTER_NAME_INITIATED`,properties:{isSmartAccount:e(S.state.activeChain)===y.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}}),await T.registerName(t),h.sendEvent({type:`track`,event:`REGISTER_NAME_SUCCESS`,properties:{isSmartAccount:e(S.state.activeChain)===y.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}})}catch(n){v.showError(n.message),h.sendEvent({type:`track`,event:`REGISTER_NAME_ERROR`,properties:{isSmartAccount:e(S.state.activeChain)===y.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t,error:i.parseError(n)}})}}onEnterKey(e){if(e.key===`Enter`&&this.name&&this.isAllowedToSubmit(this.name)){let e=`${this.name}${r.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};Q.styles=ne,Z([c()],Q.prototype,`errorMessage`,void 0),Z([_()],Q.prototype,`name`,void 0),Z([_()],Q.prototype,`error`,void 0),Z([_()],Q.prototype,`loading`,void 0),Z([_()],Q.prototype,`suggestions`,void 0),Z([_()],Q.prototype,`profileName`,void 0),Q=Z([D(`w3m-register-account-name-view`)],Q);var re=C`
  .continue-button-container {
    width: 100%;
  }
`,ie=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends E{render(){return d`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${[`0`,`0`,`4`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{i.openHref(u.URLS.FAQ,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return d` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${[`0`,`6`,`0`,`6`]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return d`<wui-flex
      .padding=${[`0`,`4`,`0`,`4`]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){o.replace(`Account`)}};$.styles=re,$=ie([D(`w3m-register-account-name-success-view`)],$);export{F as W3mApproveTransactionView,$ as W3mRegisterAccountNameSuccess,Q as W3mRegisterAccountNameView,W as W3mSmartAccountSettingsView,H as W3mUpgradeWalletView};
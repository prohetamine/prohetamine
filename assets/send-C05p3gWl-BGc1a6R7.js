import{$n as e,Hn as t,In as n,Li as r,Nn as i,Oi as a,Rt as o,Sn as s,Vn as c,Xr as l,_i as u,_r as d,_t as f,aa as ee,cr as p,ei as m,er as h,fi as g,h as _,lr as v,nt as y,or as b,pt as x,qi as S,qn as C,zr as w}from"./index-CsJn1Z-6.js";import"./index-BjN0_M4J-jrkLmlwH.js";import"./index-76nq0woB-DEDWu21j.js";import{t as T}from"./SwapController-oNBQF_cs-GMddHoUl.js";var E=C`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${({tokens:e})=>e.theme.textPrimary};
    margin: 0 ${({spacing:e})=>e[2]};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${({fontFamily:e})=>e.regular};
    font-style: normal;
    font-size: ${({textSize:e})=>e.large};
    font-weight: ${({fontWeight:e})=>e.regular};
    line-height: ${({typography:e})=>e[`lg-regular`].lineHeight};
    letter-spacing: ${({typography:e})=>e[`lg-regular`].letterSpacing};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`,D=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},O=class extends b{constructor(){super(...arguments),this.inputElementRef=h(),this.instructionElementRef=h(),this.readOnly=!1,this.instructionHidden=!!this.value,this.pasting=!1,this.onDebouncedSearch=d.debounce(async t=>{if(!t.length){this.setReceiverAddress(``);return}let n=_.state.activeChain;if(d.isAddress(t,n)){this.setReceiverAddress(t);return}try{let n=await r.getEnsAddress(t);if(n){e.setReceiverProfileName(t),e.setReceiverAddress(n);let i=await r.getEnsAvatar(t);e.setReceiverProfileImageUrl(i||void 0)}}catch{this.setReceiverAddress(t)}finally{e.setLoading(!1)}})}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return this.readOnly?t` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${[`8`,`4`,`5`,`4`]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${this.value??``}
        >
           ${this.value??``}</textarea
        >
      </wui-flex>`:t` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${[`8`,`4`,`5`,`4`]}
    >
      <wui-text
        ${v(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${v(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??``}
        autocomplete="off"
      >
${this.value??``}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents=`none`,(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents=`auto`,(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:`ease`,fill:`forwards`}).finished}onBoxClick(){!this.value&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.value&&this.instructionHidden&&!this.pasting&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;let t=await navigator.clipboard.readText();e.setReceiverAddress(t),this.focusInput()}onInputChange(t){let n=t.target;this.pasting=!1,this.value=t.target?.value,n.value&&!this.instructionHidden&&this.focusInput(),e.setLoading(!0),this.onDebouncedSearch(n.value)}setReceiverAddress(t){e.setReceiverAddress(t),e.setReceiverProfileName(void 0),e.setReceiverProfileImageUrl(void 0),e.setLoading(!1)}};O.styles=E,D([l()],O.prototype,`value`,void 0),D([l({type:Boolean})],O.prototype,`readOnly`,void 0),D([y()],O.prototype,`instructionHidden`,void 0),D([y()],O.prototype,`pasting`,void 0),O=D([u(`w3m-input-address`)],O);var k=C`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${({borderRadius:e})=>e[5]};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
    transition: all ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.lg};
  }

  :host(:hover) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`,A=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},j=class extends b{constructor(){super(...arguments),this.readOnly=!1,this.isInsufficientBalance=!1}render(){let e=this.readOnly||!this.token;return t` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${[`5`,`3`,`4`,`3`]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${e}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):``}
          ?error=${!!this.isInsufficientBalance}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?t`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:t`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||n.push(`WalletSendSelectToken`)}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){let e=this.token.price*this.sendTokenAmount;return t`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${e?`$${m.formatNumberToLocalString(e,2)}`:`Incorrect value`}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?t` <wui-text variant="sm-regular" color="secondary">
        ${c.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?t`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:t`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(t){e.setTokenAmount(t.detail)}onMaxClick(){if(this.token){let t=m.bigNumber(this.token.quantity.numeric);e.setTokenAmount(Number(t.toFixed(20)))}}};j.styles=k,A([l({type:Object})],j.prototype,`token`,void 0),A([l({type:Boolean})],j.prototype,`readOnly`,void 0),A([l({type:Number})],j.prototype,`sendTokenAmount`,void 0),A([l({type:Boolean})],j.prototype,`isInsufficientBalance`,void 0),j=A([u(`w3m-input-token`)],j);var M=C`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P={INSUFFICIENT_FUNDS:`Insufficient Funds`,INCORRECT_VALUE:`Incorrect Value`,INVALID_ADDRESS:`Invalid Address`,ADD_ADDRESS:`Add Address`,ADD_AMOUNT:`Add Amount`,SELECT_TOKEN:`Select Token`,PREVIEW_SEND:`Preview Send`},F=class extends b{constructor(){super(),this.unsubscribe=[],this.isTryingToChooseDifferentWallet=!1,this.token=e.state.token,this.sendTokenAmount=e.state.sendTokenAmount,this.receiverAddress=e.state.receiverAddress,this.receiverProfileName=e.state.receiverProfileName,this.loading=e.state.loading,this.params=n.state.data?.send,this.caipAddress=_.getAccountData()?.caipAddress,this.message=P.PREVIEW_SEND,this.disconnecting=!1,this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice());let t=_.subscribeKey(`activeCaipAddress`,e=>{!e&&this.isTryingToChooseDifferentWallet&&(this.isTryingToChooseDifferentWallet=!1,a.open({view:`Connect`,data:{redirectView:`WalletSend`}}).catch(()=>null),t())});this.unsubscribe.push(_.subscribeAccountStateProp(`caipAddress`,e=>{this.caipAddress=e}),e.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){await this.handleSendParameters()}render(){this.getMessage();let e=!!this.params;return t` <wui-flex flexDirection="column" .padding=${[`0`,`4`,`4`,`4`]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${e}
          ?isInsufficientBalance=${this.message===P.INSUFFICIENT_FUNDS}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${e}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate()}
    </wui-flex>`}async fetchBalances(){await e.fetchTokenBalance(),e.fetchNetworkBalance()}async fetchNetworkPrice(){await T.getNetworkTokenPrice()}onButtonClick(){n.push(`WalletSendPreview`,{send:this.params})}onFundWalletClick(){n.push(`FundWallet`,{redirectView:`WalletSend`})}async onConnectDifferentWalletClick(){try{this.isTryingToChooseDifferentWallet=!0,this.disconnecting=!0,await r.disconnect()}finally{this.disconnecting=!1}}getMessage(){var e;this.message=P.PREVIEW_SEND,this.receiverAddress&&!d.isAddress(this.receiverAddress,_.state.activeChain)&&(this.message=P.INVALID_ADDRESS),this.receiverAddress||(this.message=P.ADD_ADDRESS),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message=P.INSUFFICIENT_FUNDS),this.sendTokenAmount||(this.message=P.ADD_AMOUNT),this.sendTokenAmount&&(e=this.token)!=null&&e.price&&(this.sendTokenAmount*this.token.price||(this.message=P.INCORRECT_VALUE)),this.token||(this.message=P.SELECT_TOKEN)}buttonTemplate(){let e=!this.message.startsWith(P.PREVIEW_SEND),n=this.message===P.INSUFFICIENT_FUNDS,r=!!this.params;return n&&!r?t`
        <wui-flex .margin=${[`4`,`0`,`0`,`0`]} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `:t`<wui-flex .margin=${[`4`,`0`,`0`,`0`]}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${e}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${this.message}
      </wui-button>
    </wui-flex>`}async handleSendParameters(){if(this.loading=!0,!this.params){this.loading=!1;return}let t=Number(this.params.amount);if(isNaN(t)){p.showError(`Invalid amount`),this.loading=!1;return}let{namespace:n,chainId:r,assetAddress:i}=this.params;if(!s.SEND_PARAMS_SUPPORTED_CHAINS.includes(n)){p.showError(`Chain "${n}" is not supported for send parameters`),this.loading=!1;return}let a=_.getCaipNetworkById(r,n);if(!a){p.showError(`Network with id "${r}" not found`),this.loading=!1;return}try{let{balance:n,name:r,symbol:s,decimals:c}=await g.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:i,caipNetwork:a});if(!r||!s||!c||!n){p.showError(`Token not found`);return}e.setToken({name:r,symbol:s,chainId:a.id.toString(),address:`${a.chainNamespace}:${a.id}:${i}`,value:0,price:0,quantity:{decimals:c.toString(),numeric:n.toString()},iconUrl:o.getTokenImage(s)??``}),e.setTokenAmount(t),e.setReceiverAddress(this.params.to)}catch(e){console.error(`Failed to load token information:`,e),p.showError(`Failed to load token information`)}finally{this.loading=!1}}};F.styles=M,N([y()],F.prototype,`token`,void 0),N([y()],F.prototype,`sendTokenAmount`,void 0),N([y()],F.prototype,`receiverAddress`,void 0),N([y()],F.prototype,`receiverProfileName`,void 0),N([y()],F.prototype,`loading`,void 0),N([y()],F.prototype,`params`,void 0),N([y()],F.prototype,`caipAddress`,void 0),N([y()],F.prototype,`message`,void 0),N([y()],F.prototype,`disconnecting`,void 0),F=N([u(`w3m-wallet-send-view`)],F);var I=C`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=class extends b{constructor(){super(),this.unsubscribe=[],this.tokenBalances=e.state.tokenBalances,this.search=``,this.onDebouncedSearch=d.debounce(e=>{this.search=e}),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(e.subscribe(e=>{this.tokenBalances=e.tokenBalances}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){(!this.tokenBalances||this.tokenBalances?.length===0)&&(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await e.fetchTokenBalance(),e.fetchNetworkBalance()}async fetchNetworkPrice(){await T.getNetworkTokenPrice()}templateSearchInput(){return t`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalances?.filter(e=>e.chainId===_.state.activeCaipNetwork?.caipNetworkId),this.search?this.filteredTokens=this.tokenBalances?.filter(e=>e.name.toLowerCase().includes(this.search.toLowerCase())):this.filteredTokens=this.tokens,t`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${[`0`,`3`,`0`,`3`]}
      >
        <wui-flex justifyContent="flex-start" .padding=${[`4`,`3`,`3`,`3`]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map(e=>t`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`):t`<wui-flex
                .padding=${[`20`,`0`,`0`,`0`]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){n.push(`OnRampProviders`)}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(t){e.setToken(t),e.setTokenAmount(void 0),n.goBack()}};R.styles=I,L([y()],R.prototype,`tokenBalances`,void 0),L([y()],R.prototype,`tokens`,void 0),L([y()],R.prototype,`filteredTokens`,void 0),L([y()],R.prototype,`search`,void 0),R=L([u(`w3m-wallet-send-select-token-view`)],R);var z=C`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[32]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    padding-left: ${({spacing:e})=>e[2]};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`,B=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},V=class extends b{constructor(){super(...arguments),this.text=``}render(){return t`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?t`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?t`<wui-image src=${this.imageSrc}></wui-image>`:t`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};V.styles=[i,f,z],B([l({type:String})],V.prototype,`text`,void 0),B([l({type:String})],V.prototype,`address`,void 0),B([l({type:String})],V.prototype,`imageSrc`,void 0),V=B([u(`wui-preview-item`)],V);var H=C`
  :host {
    display: flex;
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`,U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=class extends b{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle=``,this.textValue=void 0}render(){return t`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?t`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?t` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:t`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};W.styles=[i,f,H],U([l()],W.prototype,`imageSrc`,void 0),U([l()],W.prototype,`textTitle`,void 0),U([l()],W.prototype,`textValue`,void 0),W=U([u(`wui-list-content`)],W);var G=C`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[5]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${({spacing:e})=>e[2]};
  }

  wui-flex {
    margin-top: ${({spacing:e})=>e[2]};
  }

  .network {
    cursor: pointer;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${({tokens:e})=>e.core.textAccentPrimary};
    background-color: ${({tokens:e})=>e.core.glass010};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent010};
  }

  .network:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .network:active {
    background-color: ${({tokens:e})=>e.core.glass010};
  }
`,K=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends b{constructor(){super(...arguments),this.params=n.state.data?.send}render(){return t` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${c.getTruncateString({string:this.receiverAddress??``,charsStart:4,charsEnd:4,truncate:`middle`})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?t` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ee(o.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&!this.params&&n.push(`Networks`,{network:e})}};q.styles=G,K([l()],q.prototype,`receiverAddress`,void 0),K([l({type:Object})],q.prototype,`caipNetwork`,void 0),K([y()],q.prototype,`params`,void 0),q=K([u(`w3m-wallet-send-details`)],q);var J=C`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[20]};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${({borderRadius:e})=>e[4]} !important;
  }
`,Y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},X=class extends b{constructor(){super(),this.unsubscribe=[],this.token=e.state.token,this.sendTokenAmount=e.state.sendTokenAmount,this.receiverAddress=e.state.receiverAddress,this.receiverProfileName=e.state.receiverProfileName,this.receiverProfileImageUrl=e.state.receiverProfileImageUrl,this.caipNetwork=_.state.activeCaipNetwork,this.loading=e.state.loading,this.params=n.state.data?.send,this.unsubscribe.push(e.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl,this.loading=e.loading}),_.subscribeKey(`activeCaipNetwork`,e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t` <wui-flex flexDirection="column" .padding=${[`0`,`4`,`4`,`4`]}>
      <wui-flex gap="2" flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?c.roundNumber(this.sendTokenAmount,6,5):`unknown`} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?c.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:`end`}):c.getTruncateString({string:this.receiverAddress?this.receiverAddress:``,charsStart:4,charsEnd:4,truncate:`middle`})}"
            address=${this.receiverAddress??``}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${[`6`,`0`,`0`,`0`]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${[`3`,`0`,`0`,`0`]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${[`4`,`0`,`0`,`0`]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){return!this.params&&this.token&&this.sendTokenAmount?t`<wui-text variant="md-regular" color="primary"
        >$${(this.token.price*this.sendTokenAmount).toFixed(2)}</wui-text
      >`:null}async onSendClick(){if(!this.sendTokenAmount||!this.receiverAddress){p.showError(`Please enter a valid amount and receiver address`);return}try{await e.sendToken(),this.params?n.reset(`WalletSendConfirmed`):(p.showSuccess(`Transaction started`),n.replace(`Account`))}catch(t){let n=`Failed to send transaction`,r=t instanceof w&&t.originalName===x.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST,i=t instanceof w&&t.originalName===x.PROVIDER_RPC_ERROR_NAME.SEND_TRANSACTION_ERROR;(r||i)&&(n=t.message),S.sendEvent({type:`track`,event:r?`SEND_REJECTED`:`SEND_ERROR`,properties:e.getSdkEventProperties(t)}),p.showError(n)}}onCancelClick(){n.goBack()}};X.styles=J,Y([y()],X.prototype,`token`,void 0),Y([y()],X.prototype,`sendTokenAmount`,void 0),Y([y()],X.prototype,`receiverAddress`,void 0),Y([y()],X.prototype,`receiverProfileName`,void 0),Y([y()],X.prototype,`receiverProfileImageUrl`,void 0),Y([y()],X.prototype,`caipNetwork`,void 0),Y([y()],X.prototype,`loading`,void 0),Y([y()],X.prototype,`params`,void 0),X=Y([u(`w3m-wallet-send-preview-view`)],X);var Z=C`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${({spacing:e})=>e[16]};
    border: 8px solid ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e.round};
  }
`,Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends b{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${[`1`,`3`,`4`,`3`]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){a.close()}};$.styles=Z,$=Q([u(`w3m-send-confirmed-view`)],$);export{$ as W3mSendConfirmedView,R as W3mSendSelectTokenView,X as W3mWalletSendPreviewView,F as W3mWalletSendView};